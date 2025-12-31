"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/projects.json";

export default function ImpactDashboard() {
  return (
    <section className="my-5">
      <SectionTitle title="प्रकल्पांचा प्रभाव" />

      <div className="row text-center">
        {data.impact.map((i, idx) => (
          <div key={idx} className="col-md-4 mb-3">
            <div className="grid-card">
              <h3>{i.value}</h3>
              <p>{i.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
