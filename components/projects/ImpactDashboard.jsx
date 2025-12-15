"use client";

import SectionTitle from "../common/SectionTitle";

export default function ImpactDashboard() {
  return (
    <section className="my-5">
      <SectionTitle title="इम्पॅक्ट डॅशबोर्ड" />

      <div className="row text-center">
        {[
          { label: "स्वच्छतागृहे", value: "95%" },
          { label: "नळजोडणी", value: "88%" },
          { label: "वीजपुरवठा", value: "100%" }
        ].map((i, idx) => (
          <div key={idx} className="col-md-4 mb-3" data-aos="zoom-in">
            <div className="grid-card">
              <h3>{i.value}</h3>
              <p>{i.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
