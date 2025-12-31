"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/education.json";

export default function ScholarshipList() {
  return (
    <section className="my-5">
      <SectionTitle title="शिष्यवृत्ती योजना" />

      <div className="row">
        {data.scholarships.map((s, i) => (
          <div key={i} className="col-md-6 mb-3">
            <div className="grid-card light">
              <strong>{s.name}</strong>
              <p className="mb-0 text-muted">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
