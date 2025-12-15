"use client";

// REPLACE THIS FILE
export default function GalleryPreview() {
  return (
    <section className="my-5">
      <h3>गॅलरी</h3>

      <div className="row">
        {[1, 2, 3].map(i => (
          <div key={i} className="col-md-4 mb-3" data-aos="zoom-in">
            <img
              src={`/images/gallery${i}.png`}
              alt="gallery"
              style={{
                width: "100%",
                height: "220px",        // SAME SIZE
                objectFit: "cover",
                borderRadius: "16px",
                boxShadow: "0 12px 25px rgba(0,0,0,0.2)",
                transition: "transform 0.4s"
              }}
              onMouseOver={e => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
