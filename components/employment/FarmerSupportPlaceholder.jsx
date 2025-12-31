"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/employment.json";

export default function FarmerSupportPlaceholder() {
  return (
    <section className="my-5">
      <SectionTitle title="शेतकरी सहाय्य केंद्र" />

      <div className="card">
        <img
          src={data.farmerSupport.image}
          alt="Farmer Support"
          className="card-img-top"
          style={{ height: "220px", objectFit: "fit" }}
        />
        <div className="card-body text-center">
          🌾 {data.farmerSupport.text}
        </div>
      </div>
    </section>
  );
}
