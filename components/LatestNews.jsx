"use client";

import data from "../data/home.json";

export default function LatestNews() {
  return (
    <section className="my-4">
      <div
        className="p-3 text-white"
        style={{
          background: "linear-gradient(90deg,#185a9d,#43cea2)",
          borderRadius: "12px"
        }}
      >
        <strong>📰 ताज्या बातम्या :</strong>
        <marquee className="ms-2">
          {data.news.join("  |  ")}
        </marquee>
      </div>
    </section>
  );
}
