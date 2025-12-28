"use client";

import SectionTitle from "../common/SectionTitle";

export default function FeedbackForm() {
  return (
    <section className="my-5">
      <SectionTitle title="फीडबॅक व सूचना" />

      <div className="grid-card light">
        <form>
          <input className="form-control mb-2" placeholder="नाव" />
          <input className="form-control mb-2" placeholder="मोबाइल क्रमांक" />
          <textarea className="form-control mb-2" placeholder="आपली सूचना / तक्रार"></textarea>

          <button type="submit" className="btn btn-primary">
            सबमिट करा
          </button>
        </form>
      </div>
    </section>
  );
}
