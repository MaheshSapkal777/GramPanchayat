"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/finance.json";

export default function IncomeExpenseGrid() {
  return (
    <section className="my-5">
      <SectionTitle title="उत्पन्न व खर्च विभाजन" />

      <div className="row">
        {data.items.map((i, idx) => (
          <div key={idx} className="col-md-4 mb-3">
            <div className="grid-card">
              <strong>{i.title}</strong>
              <h4>₹ {i.amount}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
