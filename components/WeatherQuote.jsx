"use client";

import data from "../data/home.json";

export default function WeatherQuote() {
  const quote =
    data.quotes[Math.floor(Math.random() * data.quotes.length)];

  return (
    <section className="row my-4">
      {/* WEATHER */}
      <div className="col-md-6 mb-3">
        <div className="card p-3 h-100">
          <h5>🌦 हवामान</h5>
          <iframe
            src="https://www.meteoblue.com/en/weather/widget/daily/pune_india_1259229?geoloc=fixed"
            style={{ width: "100%", height: "230px", border: 0 }}
          ></iframe>
        </div>
      </div>

      {/* SUVICHAR */}
      <div className="col-md-6 mb-3">
        <div
          className="card p-4 h-100 text-white"
          style={{
            background: "linear-gradient(135deg,#f7971e,#ffd200)",
            borderRadius: "16px"
          }}
        >
          <h5>🌼 सुविचार</h5>
          <p className="fs-5 fw-semibold">{quote}</p>
        </div>
      </div>
    </section>
  );
}
