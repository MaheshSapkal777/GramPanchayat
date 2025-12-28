"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/announcements.json";

export default function CircularDownloads() {
  return (
    <section className="my-5">
      <SectionTitle title="परिपत्रके व आदेश" />

      <ul>
        {data.circulars.map((c, i) => (
          <li key={i}>
            📄 <a href="#">{c}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
