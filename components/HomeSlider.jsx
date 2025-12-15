"use client";

// REPLACE THIS FILE
export default function HomeSlider() {
  return (
    <div
      id="homeSlider"                 // IMPORTANT: ID must match indicators
      className="carousel slide mb-4"
      data-bs-ride="carousel"
    >
      {/* UPDATE: DOT INDICATORS */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#homeSlider"  // MUST MATCH ID
          data-bs-slide-to="0"
          className="active"
        ></button>
        <button
          type="button"
          data-bs-target="#homeSlider"
          data-bs-slide-to="1"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/banner1.png" className="d-block w-100 banner-img" alt="banner" />
        </div>

        <div className="carousel-item">
          <img src="/images/banner2.png" className="d-block w-100 banner-img" alt="banner" />
        </div>
      </div>

      {/* OPTIONAL CONTROLS */}
      <button className="carousel-control-prev" data-bs-target="#homeSlider" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" data-bs-target="#homeSlider" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}
