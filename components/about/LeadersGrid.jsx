// ADD THIS FILE
"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/about.json";

export default function LeadersGrid() {
  return (
    <section className="my-5">
      <SectionTitle title="आपले लोकप्रतिनिधी" />

      <div className="row">
        {data.leaders.map((l, i) => (
          <div key={i} className="col-md-3 mb-3">
            <div
              className="card text-center h-100"
              style={{
                background: "var(--color-card)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-soft)"
              }}
            >
              <img
                src={l.image}
                alt={l.name}
                style={{
                  height: "160px",
                  objectFit: "cover",
                  borderRadius: "var(--radius-lg) var(--radius-lg) 0 0"
                }}
              />
              <div className="card-body">
                <strong>{l.name}</strong>
                <br />
                <small>{l.role}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
