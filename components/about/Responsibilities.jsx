"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/about.json";

export default function Responsibilities() {
  return (
    <section className="my-5">
      <SectionTitle title="भूमिका व जबाबदाऱ्या" />

      <div className="row">
        {data.responsibilities.map((r, i) => (
          <div key={i} className="col-md-4 mb-3" data-aos="zoom-in">
            <div className="grid-card light">
              <div className="grid-icon">✔</div>
              {r}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
