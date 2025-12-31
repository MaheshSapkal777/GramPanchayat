"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/media.json";

export default function PhotoGallery() {
  return (
    <section className="my-5">
      <SectionTitle title="फोटो गॅलरी" />

      <div className="row">
        {data.photos.map((p, i) => (
          <div key={i} className="col-md-4 mb-3">
            <div className="card h-100">
              <img
                src={p.src}
                alt={p.caption}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <small className="text-muted">{p.caption}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
