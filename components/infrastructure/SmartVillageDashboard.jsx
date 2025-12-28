"use client";

import SectionTitle from "../common/SectionTitle";

export default function SmartVillageDashboard() {
  return (
    <section className="my-5">
      <SectionTitle title="स्मार्ट व्हिलेज डॅशबोर्ड" />

      <div className="row text-center">
        {[
          { label: "पाणीपुरवठा", value: "95%" },
          { label: "वीजपुरवठा", value: "100%" },
          { label: "स्वच्छता", value: "90%" }
        ].map((i, idx) => (
          <div key={idx} className="col-md-4 mb-3" data-aos="fade-up">
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
