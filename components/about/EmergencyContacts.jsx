"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/about.json";

export default function EmergencyContacts() {
  return (
    <section className="my-5">
      <SectionTitle title="आपत्कालीन संपर्क" />

      <div className="row">
        {data.emergency.map((e, i) => (
          <div key={i} className="col-md-4 mb-3">
            <div className="grid-card light text-center">
              <div style={{ fontSize: "28px" }}>{e.icon}</div>
              <strong>{e.label}</strong>
              <p className="mb-0">{e.number}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
