"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/environment.json";

export default function GreenScoreboard() {
  return (
    <section className="my-5">
      <SectionTitle title="ग्रीन स्कोअरबोर्ड" />

      <div className="row text-center">
        {data.scoreboard.map((s, i) => (
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
