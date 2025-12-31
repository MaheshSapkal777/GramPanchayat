"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/education.json";

export default function SchoolInfo() {
  return (
    <section className="my-5">
      <SectionTitle title="शाळा व शैक्षणिक यश" />

      <div className="row">
        {data.schools.map((s, i) => (
          <div key={i} className="col-md-6 mb-3">
            <div className="card h-100">
              <img
                src={s.image}
                alt={s.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <strong>{s.name}</strong>
                <p className="mb-0 text-muted">{s.achievement}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
