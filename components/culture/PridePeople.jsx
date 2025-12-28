"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/culture.json";

export default function PridePeople() {
  return (
    <section className="my-5">
      <SectionTitle title="गौरवशाली व्यक्ती" />

      <div className="row">
        {data.pridePeople.map((p, i) => (
          <div key={i} className="col-md-6 mb-3">
            <div className="grid-card light d-flex align-items-center">
              <img
                src={p.image}
                alt={p.name}
                width="80"
                height="80"
                className="rounded-circle me-3"
              />
              <div>
                <strong>{p.name}</strong>
                <p className="mb-0 text-muted">{p.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
