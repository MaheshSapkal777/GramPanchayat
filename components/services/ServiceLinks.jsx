"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/services.json";

export default function ServiceLinks() {
  return (
    <section className="my-5">
      <SectionTitle title="नागरिक सेवा" />

      <div className="row">
        {data.services.map((s, i) => (
          <div key={i} className="col-md-4 mb-3">
            <div className="grid-card light">
              <strong className="p-2">{s.name}</strong>
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary mt-2"
              >
                अर्ज करा
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
