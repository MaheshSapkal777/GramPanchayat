"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/about.json";

export default function VisionMission() {
  return (
    <section className="my-5">
      <SectionTitle title="दृष्टी, ध्येय आणि मूल्ये" />

      <div className="row">
        <div className="col-md-4 mb-3" data-aos="zoom-in">
          <div className="grid-card">
            <div className="grid-icon">🎯</div>
            <strong>दृष्टी</strong>
            <p>{data.vision}</p>
          </div>
        </div>

        <div className="col-md-4 mb-3" data-aos="zoom-in">
          <div className="grid-card">
            <div className="grid-icon">🚀</div>
            <strong>ध्येय</strong>
            <p>{data.mission}</p>
          </div>
        </div>

        <div className="col-md-4 mb-3" data-aos="zoom-in">
          <div className="grid-card">
            <div className="grid-icon">💡</div>
            <strong>मूल्ये</strong>
            <p>{data.values}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
