"use client";

import SectionTitle from "../common/SectionTitle";

export default function BudgetPdfDownload() {
  return (
    <section className="my-5">
      <SectionTitle title="वार्षिक अर्थसंकल्प (PDF)" />

      <div className="grid-card light d-flex justify-content-between align-items-center flex-wrap">
        <div>
          <strong>वार्षिक अर्थसंकल्प दस्तऐवज</strong>
          <p className="mb-0 text-muted">
            ग्रामपंचायत अर्थसंकल्प PDF स्वरूपात डाउनलोड करा
          </p>
        </div>

        {/* 🔽 PDF LINK */}
        <a
          href="/pdfs/annual-budget-2024-25.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-2 mt-md-0"
        >
          📄 PDF डाउनलोड
        </a>
      </div>
    </section>
  );
}
