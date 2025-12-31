"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/about.json";

export default function VisionMission() {
  const { vision, mission, values } = data.vision;

  return (
    <section className="my-5">
      <SectionTitle title="दृष्टी, ध्येय आणि मूल्ये" />

      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="grid-card light">
            <strong>दृष्टी</strong>
            <p className="mb-0">{vision}</p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="grid-card light">
            <strong>ध्येय</strong>
            <p className="mb-0">{mission}</p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="grid-card light">
            <strong>मूल्ये</strong>
            <ul className="mb-0 ps-3">
              {values.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
