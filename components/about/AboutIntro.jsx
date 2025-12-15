// ADD THIS FILE
"use client";

import SectionTitle from "../common/SectionTitle";

export default function AboutIntro() {
  return (
    <section className="my-5">
      <SectionTitle title="ग्रामपंचायतीबद्दल" />

      <p style={{ color: "var(--color-text)" }}>
        ग्रामपंचायत ही गावाच्या सर्वांगीण विकासासाठी कार्यरत असलेली स्थानिक
        स्वराज्य संस्था आहे. शिक्षण, आरोग्य, पाणीपुरवठा, स्वच्छता व
        पायाभूत सुविधांचा विकास हे तिचे प्रमुख उद्दिष्ट आहे.
      </p>
    </section>
  );
}
