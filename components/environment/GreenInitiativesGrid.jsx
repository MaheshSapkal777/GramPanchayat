"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/environment.json";

export default function GreenInitiativesGrid() {
  return (
    <section className="my-5">
      <SectionTitle title="पर्यावरण व शाश्वत विकास" />

      <div className="row">
        {data.initiatives.map((i, idx) => (
          <div key={idx} className="col-md-3 mb-3">
            <div className="grid-card light text-center">
              <div className="grid-icon" style={{ fontSize: "30px" }}>
                {i.icon}
              </div>
              <strong>{i.title}</strong>
              <p className="mb-0 text-muted">{i.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
