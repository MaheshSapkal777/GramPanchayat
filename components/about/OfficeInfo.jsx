"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/about.json";

export default function OfficeInfo() {
  return (
    <section className="my-5">
      <SectionTitle title="कार्यालय माहिती" />

      <div className="row">
        {/* ADDRESS */}
        <div className="col-md-4 mb-3" data-aos="fade-up">
          <div className="grid-card">
            <div className="grid-icon">🏢</div>
            <strong>पत्ता</strong>
            <p>{data.office.address}</p>
          </div>
        </div>

        {/* TIMING */}
        <div className="col-md-4 mb-3" data-aos="fade-up">
          <div className="grid-card">
            <div className="grid-icon">⏰</div>
            <strong>कामकाज वेळ</strong>
            <p>{data.office.timing}</p>
          </div>
        </div>

        {/* CONTACT (CALL + EMAIL LINKS) */}
        <div className="col-md-4 mb-3" data-aos="fade-up">
          <div className="grid-card">
            <div className="grid-icon">📞</div>
            <strong>संपर्क</strong>

            {/* CLICK TO CALL */}
            <p className="mb-1">
              📞 <a href={`tel:${data.office.phone}`} style={{ color: "#fff" }}>
                {data.office.phone}
              </a>
            </p>

            {/* CLICK TO EMAIL */}
            <p className="mb-0">
              ✉️ <a
                href={`mailto:${data.office.email}`}
                style={{ color: "#fff" }}
              >
                {data.office.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
