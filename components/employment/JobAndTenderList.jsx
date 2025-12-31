"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/employment.json";

export default function JobAndTenderList() {
  return (
    <section className="my-5">
      <SectionTitle title="स्थानिक रोजगार व निविदा" />

      <div className="row">
        {data.jobs.map((j, i) => (
          <div key={i} className="col-md-6 mb-3">
            <div className="grid-card light">
              <strong>{j.title}</strong>
              <p className="mb-1">प्रकार: {j.type}</p>
              <span className="badge bg-info">{j.status}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
