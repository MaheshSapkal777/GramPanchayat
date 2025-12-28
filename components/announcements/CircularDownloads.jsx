"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/announcements.json";

export default function CircularDownload() {
  return (
    <section className="my-5">
      <SectionTitle title="परिपत्रके व आदेश (डाउनलोड)" />

      <div className="row">
        {data.circulars.map((c, i) => (
          <div key={i} className="col-md-6 mb-3">
            <div className="grid-card d-flex justify-content-between align-items-center">
              <span>{c.name}</span>

              <a
                href={c.file}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                📄 डाउनलोड
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
