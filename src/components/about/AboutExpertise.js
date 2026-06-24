import React from 'react';

export default function AboutExpertise() {
  const features = [
    'Blazing-Fast Performance that eliminates friction and keeps users engaged.',
    'Robust Scalability that supports massive traffic and long-term growth.',
    'Pixel-Perfect UX that feels completely effortless and intuitive.'
  ];

  return (
    <section 
      className="expertise" 
      style={{ 
        padding: '6rem 0', 
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Image Container: cropped by 10% top & bottom to remove pre-baked white blur gradients */}
      <div 
        style={{
          position: 'absolute',
          top: '-35px',
          left: '0',
          width: '100%',
          height: 'calc(100% + 35px)',
          backgroundImage: "url('/images/expertise.jpg?v=2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <h2 style={{ color: '#000000', textAlign: 'center', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          Hire our Expert Developer
        </h2>
        <p style={{ textAlign: 'center', fontSize: '1.15rem', color: '#000000', fontWeight: 500, marginBottom: '1.5rem' }}>
          don't just write code; we build digital foundations.
        </p>

        {/* Glassmorphic Panel */}
        <div 
          className="expertise-content-panel-new" 
          style={{ 
            maxWidth: '1000px', 
            margin: '0 auto', 
            position: 'relative',
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(20px) saturate(140%)',
            WebkitBackdropFilter: 'blur(20px) saturate(140%)',
            border: '1px solid rgba(255, 255, 255, 0.35)',
            borderRadius: '24px',
            padding: '3.5rem 4rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
            color: '#000000'
          }}
        >
          {/* Paragraph */}
          <div style={{ fontSize: '0.85rem', lineHeight: '1.65', marginBottom: '0.5rem', fontWeight: 500 }}>
            Healthcare Software Development Service Dubai <a href="#" style={{ color: '#000000', fontWeight: 700, textDecoration: 'underline' }}>i-HiddenTalent</a> delivers innovative healthcare platforms that help medical organizations enhance patient care and operational efficiency. As a trusted Healthcare Software Development Company in Australia & Dubai, we provide reliable Healthcare Software Development Service Australia & Dubai for hospitals, clinics, and healthcare startups.
          </div>
          
          {/* Bullets List */}
          <div className="expertise-bullets-new" style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
            {features.map((feat, index) => (
              <div key={index} className="expertise-bullet-new" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <img 
                  src="/images/blacktick.png" 
                  alt="check" 
                  style={{ 
                    width: '28px', 
                    height: '28px', 
                    objectFit: 'contain',
                    flexShrink: 0
                  }} 
                />
                <div className="expertise-bullet-text-new" style={{ color: '#000000', fontSize: '0.85rem', fontWeight: 600 }}>
                  {feat}
                </div>
              </div>
            ))}
          </div>

          {/* Overlapping Primary CTA Button */}
          <div 
            style={{ 
              position: 'absolute',
              bottom: '-56px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10
            }}
          >
            <a 
              href="#contact" 
              className="btn btn-reach-out" 
              style={{ 
                backgroundColor: '#2E3092', 
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '0 2.5rem',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(46, 48, 146, 0.3)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                height: '48px'
              }}
            >
              Reach Out To Us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
