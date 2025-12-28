"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/announcements.json";

export default function AnnouncementList() {
  return (
    <section className="my-5">
      <SectionTitle title="घोषणा" />

      <div className="row">
        {data.announcements.map((a, i) => (
          <div key={i} className="col-md-6 mb-3">
            <div className="grid-card light">
              🔔 {a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
