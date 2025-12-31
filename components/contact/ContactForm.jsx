"use client";

import SectionTitle from "../common/SectionTitle";

export default function ContactForm() {
  return (
    <section className="my-5">
      <SectionTitle title="फीडबॅक / संपर्क फॉर्म" />

      <div className="grid-card light">
        <form>
          <input className="form-control mb-2" placeholder="नाव" />
          <input className="form-control mb-2" placeholder="ई-मेल / मोबाईल" />
          <textarea className="form-control mb-2" placeholder="संदेश"></textarea>
          <button className="btn btn-primary">पाठवा</button>
        </form>
      </div>
    </section>
  );
}
