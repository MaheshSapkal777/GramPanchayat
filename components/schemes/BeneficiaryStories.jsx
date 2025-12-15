"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/schemes.json";

export default function BeneficiaryStories() {
  return (
    <section className="my-5">
      <SectionTitle title="लाभार्थी अनुभव" />

      <div className="row">
        {data.stories.map((s, i) => (
          <div key={i} className="col-md-6 mb-3" data-aos="fade-right">
            <div className="grid-card">
              <strong>{s.name}</strong>
              <p className="mb-0">{s.story}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
