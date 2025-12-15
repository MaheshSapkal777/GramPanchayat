"use client";

import { useEffect, useRef, useState } from "react";
import data from "../data/home.json";

export default function ProgressMeter() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);        // start animation
        } else {
          setAnimate(false);       // reset when out of view
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  

  return (
    <section className="my-5" ref={ref}>
      <h3>ग्राम प्रगती मीटर</h3>

      <div className="row text-center">
        {data.progress.map((p, i) => {
          const r = 60;
          const c = 2 * Math.PI * r;

          return (
            <div key={i} className="col-md-4">
              <svg width="140" height="140">
                <circle cx="70" cy="70" r={r} stroke="var(--color-secondary)"
 strokeWidth="12" fill="none" />
                <circle
                  cx="70"
                  cy="70"
                  r={r}
                  stroke="url(#grad)"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={c}
                  strokeDashoffset={animate ? c - (c * p.value) / 100 : c}
                  style={{
                    transition: "stroke-dashoffset 2.5s ease",
                    transform: "rotate(-90deg)",
                    transformOrigin: "50% 50%"
                  }}
                />
                <defs>
                  <linearGradient id="grad">
                    <stop offset="0%" stopColor="#43cea2" />
                    <stop offset="100%" stopColor="#185a9d" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="fw-bold">{p.value}%</div>
              <p>{p.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
