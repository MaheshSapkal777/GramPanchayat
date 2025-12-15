"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    // ✅ Load Bootstrap JS safely
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

    // ✅ Load AOS safely
    import("aos").then(AOS => {
      AOS.default.init({
        duration: 900,
        once: true
      });
    });
  }, []);

  return null;
}
