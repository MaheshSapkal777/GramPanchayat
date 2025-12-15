"use client";

import SectionTitle from "../common/SectionTitle";
import data from "../../data/about.json";

export default function EmergencyContacts() {
    return (
        <section className="my-5">
            <SectionTitle title="आपत्कालीन संपर्क" />

            <div className="row">
                {data.emergency.map((e, i) => (
                    <div key={i} className="col-md-4 mb-3" data-aos="fade-right">
                        <div
                            className="grid-card"
                            style={{
                                background: "linear-gradient(135deg,#b71c1c,#f44336)" // 🔴 emergency color
                            }}
                        >
                            <div className="grid-icon">🚨</div>
                            <strong>{e.name}</strong>
                            <p className="mb-0">
                                📞 <a href={`tel:${e.phone}`} style={{ color: "#fff" }}>
                                    {e.phone}
                                </a>
                            </p>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
