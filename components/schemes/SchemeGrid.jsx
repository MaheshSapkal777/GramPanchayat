"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/schemes.json";

export default function SchemeGrid() {
  return (
    <section className="my-5">
      <SectionTitle title="योजना" />

      <div className="row">
        {data.schemes.map((s, i) => (
          <div key={i} className="col-md-4 mb-3" data-aos="fade-up">
            <div className="grid-card light">
              <div className="grid-icon">📄</div>
              <strong>{s.name}</strong>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
