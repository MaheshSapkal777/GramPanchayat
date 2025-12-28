"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/schemes.json";

export default function SchemeGrid() {
  return (
    <section className="my-5">
      <SectionTitle title="योजना व लाभ" />

      <div className="row">
        {data.schemes.map((s, i) => (
          <div key={i} className="col-md-4 mb-3">
            <div className="grid-card light">
              <h6 className="fw-bold">{s.name}</h6>
              <small className="text-muted">{s.type}</small>
              <p className="mb-0">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
