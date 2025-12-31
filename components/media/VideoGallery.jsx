"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/media.json";

export default function VideoGallery() {
  return (
    <section className="my-5">
      <SectionTitle title="व्हिडिओ गॅलरी" />

      <div className="row">
        {data.videos.map((v, i) => (
          <div key={i} className="col-md-6 mb-3">
            <div className="ratio ratio-16x9">
              <iframe
                src={v.embed}
                title={v.title}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
