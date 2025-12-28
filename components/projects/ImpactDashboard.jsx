"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/projects.json";

export default function ImpactDashboard() {
  return (
    <section className="my-5">

      <SectionTitle title="इम्पॅक्ट डॅशबोर्ड" />

      <div className="row text-center">
        {data.impact.map((i, idx) => (
          <div key={idx} className="col-md-4 mb-3" data-aos="zoom-in">
            <div className="grid-card">
              <h3 className="fw-bold">{i.value}</h3>
              <p className="mb-0">{i.label}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
