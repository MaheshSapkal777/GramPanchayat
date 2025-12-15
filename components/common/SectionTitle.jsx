// ADD THIS FILE
"use client";

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-4">
      <h3
        style={{
          color: "var(--primary)",
          fontWeight: 700
        }}
      >
        {title}
      </h3>

      {subtitle && (
        <p style={{ color: "var(--color-text)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
