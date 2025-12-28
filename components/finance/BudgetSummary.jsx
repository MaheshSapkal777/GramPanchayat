"use client";
import SectionTitle from "../common/SectionTitle";
import data from "../../data/finance.json";

export default function BudgetSummary() {
  const { summary, year } = data;

  return (
    <section className="my-5">
      <SectionTitle title={`अर्थसंकल्प (${year})`} />

      <div className="row text-center">
        <div className="col-md-4 mb-3">
          <div className="grid-card">
            <h4>{summary.totalBudget}</h4>
            <p>एकूण अर्थसंकल्प</p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="grid-card">
            <h4>{summary.income}</h4>
            <p>एकूण उत्पन्न</p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="grid-card">
            <h4>{summary.expenditure}</h4>
            <p>एकूण खर्च</p>
          </div>
        </div>
      </div>
    </section>
  );
}
