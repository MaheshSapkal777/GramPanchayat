"use client";

import data from "../data/home.json";

// REPLACE THIS FILE
export default function HomeStats() {
  const colors = [
    "linear-gradient(135deg,#1e3c72,#2a5298)",
    "linear-gradient(135deg,#11998e,#38ef7d)",
    "linear-gradient(135deg,#f7971e,#ffd200)",
    "linear-gradient(135deg,#ee0979,#ff6a00)",
    "linear-gradient(135deg,#56ccf2,#2f80ed)",
    "linear-gradient(135deg,#8360c3,#2ebf91)"
  ];

  return (
    <section className="row justify-content-center text-center my-5">
      {data.stats.map((s, i) => (
        <div
          key={i}
          className="col-lg-2 col-md-3 col-6 mb-3"
          data-aos="zoom-in"
        >
          <div
            className="p-3 text-white d-flex flex-column justify-content-center align-items-center"
            style={{
              background: colors[i % colors.length],
              borderRadius: "18px",
              minHeight: "140px"
            }}
          >
            {/* ICON */}
            <div style={{ fontSize: "26px", lineHeight: "1" }}>
              {s.icon}
            </div>

            {/* VALUE */}
            <h4 className="fw-bold mt-2 mb-1 text-break">
              {s.value}
            </h4>

            {/* LABEL (auto-wrap if long) */}
            <small
              className="fw-medium"
              style={{
                lineHeight: "1.3",
                wordBreak: "break-word",
                whiteSpace: "normal"
              }}
            >
              {s.label}
            </small>
          </div>
        </div>
      ))}
    </section>
  );
}
