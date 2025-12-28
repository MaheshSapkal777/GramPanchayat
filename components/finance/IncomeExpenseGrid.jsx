"use client";
import SectionTitle from "../common/SectionTitle";
import data from "../../data/finance.json";

export default function IncomeExpenseGrid() {
  return (
    <section className="my-5">

      <SectionTitle title="उत्पन्नाचे स्रोत" />
      <div className="row mb-4">
        {data.incomeSources.map((item, idx) => (
          <div key={idx} className="col-md-4 mb-3">
            <div className="grid-card light">
              <strong>{item.name}</strong>
              <p className="mb-0">{item.amount}</p>
            </div>
          </div>
        ))}
      </div>

      <SectionTitle title="खर्चाचे विभाग" />
      <div className="row">
        {data.expenditureHeads.map((item, idx) => (
          <div key={idx} className="col-md-4 mb-3">
            <div className="grid-card light">
              <strong>{item.name}</strong>
              <p className="mb-0">{item.amount}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
