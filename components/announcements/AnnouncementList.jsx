"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/announcements.json";

export default function AnnouncementList() {
  return (
    <section className="my-5">
      <SectionTitle title="घोषणा व सूचना" />

      <div className="row">
        {data.announcements.map((a, i) => (
          <div key={i} className="col-md-6 mb-3">
            <div className="grid-card light">
              <strong>{a.title}</strong>
              <p className="mb-1 text-muted">{a.date}</p>
              <p className="mb-0">{a.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
