"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/projects.json";

export default function ProjectTimeline() {
  return (
    <section className="my-5">

      <SectionTitle title="आगामी प्रकल्प" />

      <div className="row">
        {data.upcoming.map((item, i) => (
          <div key={i} className="col-md-6 mb-3" data-aos="zoom-in">
            <div className="grid-card">
              <div className="grid-icon">📌</div>
              <strong>{item}</strong>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
