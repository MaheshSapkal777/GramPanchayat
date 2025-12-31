"use client";

import data from "../data/home.json";

export default function HomeSlider() {
  return (
    <div
      id="homeSlider"
      className="carousel slide mb-4"
      data-bs-ride="carousel"
    >
      {/* DOT INDICATORS */}
      <div className="carousel-indicators">
        {data.slider.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#homeSlider"
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
          />
        ))}
      </div>

      {/* SLIDES */}
      <div className="carousel-inner">
        {data.slider.map((slide, i) => (
          <div
            key={i}
            className={`carousel-item ${i === 0 ? "active" : ""}`}
          >
            <img
              src={slide.image}
              className="d-block w-100 banner-img"
              alt="banner"
            />

            <div className="carousel-caption d-none d-md-block">
              <h3>{slide.title}</h3>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CONTROLS */}
      <button
        className="carousel-control-prev"
        data-bs-target="#homeSlider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        data-bs-target="#homeSlider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}
