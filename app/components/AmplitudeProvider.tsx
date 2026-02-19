"use client";

import { useEffect } from "react";
import * as amplitude from "@amplitude/analytics-browser";

export default function AmplitudeProvider() {
  useEffect(() => {
    amplitude.init("3c71318f716a4753460b50f724a7cfc7", {
      autocapture: true,
    });
  }, []);

  return null;
}
