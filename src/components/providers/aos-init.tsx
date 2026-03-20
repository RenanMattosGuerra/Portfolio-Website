"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { once } from "events";

export function AosInit() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
    });
  });

  return null;
}
