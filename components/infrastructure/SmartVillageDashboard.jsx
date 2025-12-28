"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/infrastructure.json";

export default function SmartVillageDashboard() {
  return (
    <section className="my-5">
      <SectionTitle title="स्मार्ट व्हिलेज डॅशबोर्ड" />

      <div className="row text-center">
        {data.dailyStats.map((s, i) => (
          <div key={i} className="col-md-4 mb-3">
            <div className="grid-card">
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
