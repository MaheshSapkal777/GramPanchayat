"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/dashboard.json";

export default function TopAchievements() {
  return (
    <section className="my-5">
      <SectionTitle title="वर्षातील टॉप ५ उपलब्धी" />

      <div className="row">
        {data.achievements.map((a, i) => (
          <div key={i} className="col-md-6 mb-2">
            <div className="grid-card light">
              ✅ {a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
