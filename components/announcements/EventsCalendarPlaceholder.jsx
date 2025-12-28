"use client";

import SectionTitle from "../common/SectionTitle";

export default function EventsCalendarPlaceholder() {
  return (
    <section className="my-5">
      <SectionTitle title="कार्यक्रम कॅलेंडर" />

      <div
        className="grid-card light text-center"
        style={{ minHeight: "200px" }}
      >
        📅 येथे कार्यक्रम व ग्रामसभा कॅलेंडर दर्शविले जाईल
      </div>
    </section>
  );
}
