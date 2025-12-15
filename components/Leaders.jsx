"use client";

import data from "../data/home.json";

// REPLACE THIS FILE
export default function Leaders() {
  const colors = ["#e3f2fd", "#e8f5e9", "#fff3e0", "#fce4ec"];

  return (
    <section className="my-5">
      <h3 className="mb-3">आपले लोकप्रतिनिधी</h3>

      <div className="row">
        {data.leaders.map((l, i) => (
          <div key={i} className="col-md-3 mb-3" data-aos="zoom-in">
            <div
              className="card text-center h-100"
              style={{
                background: colors[i % colors.length], // COLORFUL CARD
                borderRadius: "18px",
                boxShadow: "0 12px 25px rgba(0,0,0,0.15)" // SHADOW
              }}
            >
              <img
                src={l.image}
                alt={l.name}
                style={{
                  height: "180px",        // SAME IMAGE SIZE
                  objectFit: "cover",
                  borderRadius: "18px 18px 0 0"
                }}
              />
              <div className="card-body">
                <h6 className="fw-bold">{l.name}</h6>
                <small>{l.role}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
