import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const TO_EMAIL = "daniele.laciura@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev";

Deno.serve(async (req) => {
  try {
    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY secret");
      return new Response(JSON.stringify({ error: "Missing RESEND_API_KEY" }), { status: 500 });
    }

    const payload = await req.json();
    console.log("Payload received:", JSON.stringify(payload));

    const record = payload.record;
    if (!record) {
      console.error("No record in payload");
      return new Response(JSON.stringify({ error: "No record in payload" }), { status: 400 });
    }

    const emailBody = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${record.first_name} ${record.last_name}</p>
    <p><strong>Email:</strong> ${record.email}</p>
    <p><strong>Message:</strong></p>
    <p>${record.message}</p>
  `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `New message from ${record.first_name} ${record.last_name}`,
        html: emailBody,
      }),
    });

    const resBody = await res.text();
    if (!res.ok) {
      console.error("Resend API error:", res.status, resBody);
      return new Response(JSON.stringify({ error: resBody }), { status: 500 });
    }

    console.log("Email sent successfully:", resBody);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
});
