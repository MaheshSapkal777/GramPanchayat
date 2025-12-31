"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/contact.json";

export default function ContactInfo() {
  const { office } = data;

  return (
    <section className="my-5">
      <SectionTitle title="संपर्क माहिती" />

      <div className="grid-card light">
        <strong>{office.name}</strong>
        <p className="mb-1">📍 {office.address}</p>
        <p className="mb-1">📞 {office.phone}</p>
        <p className="mb-0">✉️ {office.email}</p>
      </div>
    </section>
  );
}
