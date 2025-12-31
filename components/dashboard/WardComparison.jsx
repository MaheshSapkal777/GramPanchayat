"use client";

import { useEffect, useState } from "react";
import SectionTitle from "../common/SectionTitle";
import data from "../../data/dashboard.json";

export default function WardComparison() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="my-5">
      <SectionTitle title="वॉर्डनिहाय प्रगती" />

      <div className="row">
        {data.wards.map((w, i) => {
          const percent = parseInt(w.progress);

          return (
            <div key={i} className="col-md-4 mb-3">
              <div className="grid-card light">
                <strong>{w.name}</strong>

                <div className="progress my-2" style={{ height: "10px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: animate ? `${percent}%` : "0%",
                      backgroundColor: "var(--primary)",
                      transition: "width 1.6s ease-in-out"
                    }}
                    aria-valuenow={percent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>

                <small className="fw-bold">{w.progress}</small>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
