"use client";

import { useEffect, useState } from "react";
import data from "../data/home.json";

export default function WeatherQuote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Pick random quote ONLY on client
    const random =
      data.quotes[Math.floor(Math.random() * data.quotes.length)];
    setQuote(random);
  }, []);

  return (
    <section className="my-4">
      <div className="row">
        {/* WEATHER */}
        <div className="col-md-6 mb-3">
          <div className="grid-card light text-center">
            <h5>आजचे हवामान</h5>
            <iframe
              src="https://www.meteoblue.com/en/weather/widget/daily/pune_india_1259229?geoloc=fixed"
              width="100%"
              height="230px"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* SUVICHAR */}
        <div className="col-md-6 mb-3">
          <div className="suvichar-box text-center">
            <h5>आजचा सुविचार</h5>
            <p className="mb-0">{quote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
