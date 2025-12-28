"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/infrastructure.json";

export default function InfrastructureGrid() {
  return (
    <section className="my-5">
      <SectionTitle title="ग्राम पायाभूत सुविधा" />

      <div className="row">
        {data.facilities.map((item, i) => (
          <div key={i} className="col-md-4 mb-3">
            <div className="grid-card light text-center">
              <div className="grid-icon" style={{ fontSize: "32px" }}>
                {item.icon}
              </div>
              <strong>{item.title}</strong>
              <p className="mb-0 text-muted">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
