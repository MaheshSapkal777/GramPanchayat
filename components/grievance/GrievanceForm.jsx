"use client";

import SectionTitle from "../common/SectionTitle";

export default function GrievanceForm() {
  return (
    <section className="my-5">
      <SectionTitle title="तक्रार नोंदणी फॉर्म" />

      <div className="grid-card light">
        <form>
          <input className="form-control mb-2" placeholder="नाव" />
          <input className="form-control mb-2" placeholder="मोबाइल क्रमांक" />
          <select className="form-control mb-2">
            <option>तक्रार प्रकार निवडा</option>
            <option>पाणीपुरवठा</option>
            <option>रस्ते</option>
            <option>स्वच्छता</option>
          </select>
          <textarea
            className="form-control mb-2"
            placeholder="तक्रारीचे तपशील"
          ></textarea>

          <button className="btn btn-primary">
            तक्रार सबमिट करा
          </button>
        </form>
      </div>
    </section>
  );
}
