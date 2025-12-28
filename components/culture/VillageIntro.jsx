"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/culture.json";

export default function VillageIntro() {
  return (
    <section className="my-5">
      <SectionTitle title={data.intro.title} />

      <div className="row align-items-center">
        <div className="col-md-6 mb-3">
          <img
            src={data.intro.image}
            alt="Village"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <div className="grid-card light">
            <p className="mb-0">{data.intro.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
