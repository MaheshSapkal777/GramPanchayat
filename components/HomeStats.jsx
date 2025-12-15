"use client";

import data from "../data/home.json";

// REPLACE THIS FILE
export default function HomeStats() {
  const colors = [
    "linear-gradient(135deg,#1e3c72,#2a5298)",
    "linear-gradient(135deg,#11998e,#38ef7d)",
    "linear-gradient(135deg,#f7971e,#ffd200)",
    "linear-gradient(135deg,#ee0979,#ff6a00)",
    "linear-gradient(135deg,#56ccf2,#2f80ed)"
  ];

  return (
    <section className="row justify-content-center text-center my-5">
      {data.stats.map((s, i) => (
        <div key={i} className="col-md-2 col-6 mb-3" data-aos="zoom-in">
          <div
            className="p-3 text-white"
            style={{
              background: colors[i % colors.length],
              borderRadius: "18px",
              minHeight: "110px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <h3 className="fw-bold mb-1">{s.value}</h3>
            <small>{s.label}</small>
          </div>
        </div>
      ))}
    </section>
  );
}
