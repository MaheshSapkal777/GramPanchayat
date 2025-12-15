"use client";

export default function WelcomeVideo() {
  return (
    <section className="my-5">
      <h3>सरपंच संदेश</h3>

      {/* ✅ SMALLER VIDEO */}
      <div className="row">
        <div className="col-md-6">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Welcome Message"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="col-md-6">
          <p>
            गावाच्या सर्वांगीण विकासासाठी ग्रामपंचायत सतत कार्यरत आहे.
            नागरिकांचा सहभाग हाच आमचा खरा बळ आहे.
          </p>
        </div>
      </div>
    </section>
  );
}
