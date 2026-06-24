import React from 'react';

export default function WhyUs() {
  return (
    <section className="why-us">
      <div className="container">
        <h2>Why Choose US ?</h2>
        <p className="why-us-subtitle">don't just write code; we build digital foundations.</p>

        <div className="why-us-grid-new">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="why-us-item-new">
              <div className="why-us-header-new">
                <span className="why-us-num-new">{idx + 1}.</span>
                <h3 className="why-us-title-new">Long-term Partner You Can Trust</h3>
              </div>
              <p className="why-us-text-new">
                long-term technology partner for 200+ clients across Asia, Europe, and Oceania, supporting stable offshore delivery over time. We are also an active member of DBAV and EuroCham, helping strengthen collaboration with European business communities and international partners.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
