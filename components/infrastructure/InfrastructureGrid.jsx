"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/infrastructure.json";

export default function InfrastructureGrid() {
  return (
    <section className="my-5">
      <SectionTitle title="ग्राम पायाभूत सुविधा" />

      <div className="row">
        {data.items.map((i, idx) => (
          <div key={idx} className="col-md-4 mb-3" data-aos="zoom-in">
            <div className="grid-card light">
              <div className="grid-icon">{i.icon}</div>
              <strong>{i.title}</strong>
              <p className="mb-0">{i.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
