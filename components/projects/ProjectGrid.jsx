"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/projects.json";

export default function ProjectGrid() {
  return (
    <section className="my-5">
      <SectionTitle title="प्रमुख प्रकल्प" />

      <div className="row">
        {data.projects.map((p, i) => (
          <div key={i} className="col-md-4 mb-3">
            <div className="grid-card light">
              <div className="grid-icon">🏗️</div>

              <strong>{p.name}</strong>

              <p className="mb-1">वर्ष: {p.year}</p>
              <p className="mb-1">खर्च: ₹ {p.cost}</p>

              <span
                className={`badge ${
                  p.status === "पूर्ण" ? "bg-success" : "bg-warning text-dark"
                }`}
              >
                {p.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
