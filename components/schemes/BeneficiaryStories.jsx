"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/schemes.json";

export default function BeneficiaryStories() {
  return (
    <section className="my-5">
      <SectionTitle title="लाभार्थी अनुभव" />

      <div className="row">
        {data.beneficiaries.map((b, i) => (
          <div key={i} className="col-md-6 mb-3">
            <div className="grid-card">
              <strong>{b.name}</strong>
              <p className="mb-1"><em>{b.scheme}</em></p>
              <p className="mb-0">“{b.story}”</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
