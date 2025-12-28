"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/grievance.json";

export default function GrievanceContactInfo() {
  const { phone, whatsapp, email } = data.contacts;

  return (
    <section className="my-5">
      <SectionTitle title="तक्रार संपर्क माहिती" />

      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="grid-card">
            📞 {phone}
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="grid-card">
            💬 WhatsApp: {whatsapp}
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="grid-card">
            ✉️ {email}
          </div>
        </div>
      </div>
    </section>
  );
}
