"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/dashboard.json";

export default function DashboardSummary() {
  return (
    <section className="my-5">
      <SectionTitle title="माझे गाव, माझी प्रगती" />

      <div className="row text-center">
        {data.summary.map((item, i) => (
          <div key={i} className="col-md-4 col-lg-2 mb-3">
            <div className="grid-card">
              <div style={{ fontSize: "28px" }}>{item.icon}</div>
              <h4 className="mt-2">{item.value}</h4>
              <p className="mb-0">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
