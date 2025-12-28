"use client";

import SectionTitle from "../common/SectionTitle";

export default function BudgetChartsPlaceholder() {
  return (
    <section className="my-5">
      <SectionTitle title="आपला रुपया कुठे जातो?" />

      <div
        className="grid-card light text-center"
        style={{ minHeight: "220px" }}
      >
        📊 येथे पाई चार्ट / बजेट व्हिज्युअलायझर जोडला जाईल
      </div>
    </section>
  );
}
