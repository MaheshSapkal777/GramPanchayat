"use client";

import data from "../data/home.json";

// REPLACE THIS FILE
export default function Notices() {
  return (
    <section className="my-5">
      <h3>घोषणा व सूचना</h3>

      <div className="row">
        {data.notices.map((n, i) => (
          <div key={i} className="col-md-6 mb-3" data-aos="fade-up">
            <div
              className="p-3"
              style={{
                background: "#e8f5e9",      // FILLED COLOR
                borderLeft: "6px solid #2e7d32",
                borderRadius: "12px",
                minHeight: "80px"           // SAME HEIGHT
              }}
            >
              🔔 {n}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
