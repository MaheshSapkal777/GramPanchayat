"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/employment.json";

export default function SkillTrainingPrograms() {
  return (
    <section className="my-5">
      <SectionTitle title="कौशल्य विकास व प्रशिक्षण" />

      <div className="row">
        {data.trainings.map((t, i) => (
          <div key={i} className="col-md-6 mb-3">
            <div className="card h-100">
              <img
                src={t.image}
                alt={t.name}
                className="card-img-top"
                style={{ height: "180px", objectFit: "fit" }}
              />
              <div className="card-body">
                <strong>{t.name}</strong>
                <p className="mb-0 text-muted">{t.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
