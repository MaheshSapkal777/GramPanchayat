"use client";

import data from "../data/home.json";

// REPLACE THIS FILE
export default function Schemes() {
  const bg = ["bg-primary", "bg-success", "bg-warning"];

  return (
    <section className="my-5">
      <h3 className="mb-3">प्रमुख योजना</h3>

      <div className="row">
        {data.schemes.map((s, i) => (
          <div key={i} className="col-md-4 mb-3" data-aos="fade-up">
            <div className={`card text-white ${bg[i % bg.length]} h-100`}>
              <div className="card-body">
                <h5>{s.title}</h5>
                <p className="mb-0">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
