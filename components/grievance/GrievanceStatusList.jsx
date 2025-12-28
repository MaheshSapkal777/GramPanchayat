"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/grievance.json";

export default function GrievanceStatusList() {
  return (
    <section className="my-5">
      <SectionTitle title="तक्रारींची स्थिती" />

      <div className="row">
        {data.complaints.map((c, i) => (
          <div key={i} className="col-md-6 mb-3">
            <div className="grid-card light">
              <strong>तक्रार क्र.: {c.id}</strong>
              <p className="mb-1">प्रकार: {c.type}</p>
              <p className="mb-1">दिनांक: {c.date}</p>
              <span
                className={`badge ${
                  c.status === "निकाल लागलेला"
                    ? "bg-success"
                    : "bg-warning text-dark"
                }`}
              >
                {c.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
