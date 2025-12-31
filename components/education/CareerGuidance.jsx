"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/education.json";

export default function CareerGuidance() {
  return (
    <section className="my-5">
      <SectionTitle title="करिअर मार्गदर्शन" />

      <div className="row">
        {data.careers.map((c, i) => (
          <div key={i} className="col-md-4 mb-3">
            <div className="grid-card light d-flex align-items-center">
              <span style={{ fontSize: "26px", marginRight: "12px" }}>
                {c.icon}
              </span>
              <strong>{c.text}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
