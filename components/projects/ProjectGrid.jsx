"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/projects.json";

export default function ProjectGrid() {
  return (
    <section className="my-5">

      <SectionTitle title="प्रमुख प्रकल्प" />

      <div className="row">
        {data.projects.map((p, i) => (
          <div key={i} className="col-md-4 mb-4" data-aos="fade-up">
            <div className="grid-card light h-100">
              <div className="grid-icon">🏗️</div>

              <h6 className="fw-bold mb-2">{p.name}</h6>

              <p className="mb-1">
                <strong>वर्ष:</strong> {p.year}
              </p>

              <p className="mb-1">
                <strong>खर्च:</strong> ₹ {p.cost}
              </p>

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
