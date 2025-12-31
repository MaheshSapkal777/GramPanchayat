"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/employment.json";

export default function TalentDirectory() {
  return (
    <section className="my-5">
      <SectionTitle title="गाव टॅलेंट डायरेक्टरी" />

      <div className="row">
        {data.talents.map((p, i) => (
          <div key={i} className="col-md-6 mb-3">
            <div className="grid-card light d-flex align-items-center">
              <img
                src={p.image}
                alt={p.name}
                width="80"
                height="80"
                className="rounded-circle me-3"
                style={{objectFit: "fit"}}
              />
              <div>
                <strong>{p.name}</strong>
                <p className="mb-0 text-muted">{p.contact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
