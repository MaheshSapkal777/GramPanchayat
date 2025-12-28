"use client";

import SectionTitle from "../common/SectionTitle";

export default function ServiceLinks() {
  return (
    <section className="my-5">
      <SectionTitle title="नागरिक सेवा" />

      <div className="row">
        {[
          "जन्म प्रमाणपत्र",
          "मृत्यू प्रमाणपत्र",
          "रहिवासी दाखला",
          "RTS सेवा"
        ].map((s, i) => (
          <div key={i} className="col-md-3 mb-3" data-aos="zoom-in">
            <div className="grid-card light text-center">
              📄 {s}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
