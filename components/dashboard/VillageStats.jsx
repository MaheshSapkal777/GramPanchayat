"use client";
import SectionTitle from "../common/SectionTitle";

export default function VillageStats() {
  return (
    <section className="my-5">
      <SectionTitle title="माझे गाव, माझी प्रगती" />
      <div className="row text-center">
        {["लोकसंख्या", "स्वच्छता", "नळजोडणी", "वीजपुरवठा"].map((s, i) => (
          <div key={i} className="col-md-3 mb-3">
            <div className="grid-card">{s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
