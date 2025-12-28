"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/culture.json";

export default function CultureGrid() {
  return (
    <section className="my-5">
      <SectionTitle title="संस्कृती व परंपरा" />

      <div className="row">
        {data.culture.map((c, i) => (
          <div key={i} className="col-md-4 mb-3">
            <div className="card h-100">
              <img
                src={c.image}
                alt={c.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <div className="grid-icon">{c.icon}</div>
                <h6 className="fw-bold">{c.title}</h6>
                <p className="text-muted mb-0">{c.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
