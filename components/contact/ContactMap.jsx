"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/contact.json";

export default function ContactMap() {
  return (
    <section className="my-5">
      <SectionTitle title="कार्यालयाचा नकाशा" />

      <div className="ratio ratio-16x9">
        <iframe
          src={data.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
