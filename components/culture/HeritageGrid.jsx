"use client";

import SectionTitle from "../common/SectionTitle";

export default function HeritageGrid() {
  return (
    <section className="my-5">
      <SectionTitle title="वारसा स्थळे व परंपरा" />

      <div className="row">
        {[
          "स्थानिक मंदिर",
          "लोककला व संगीत",
          "वार्षिक यात्रा",
          "पारंपरिक सण"
        ].map((h, i) => (
          <div key={i} className="col-md-3 mb-3">
            <div className="grid-card light text-center">
              🏺 {h}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
