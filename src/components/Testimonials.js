'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Rithika Sen',
    role: 'Founder, EdTech Global',
    text: '“Working with the team at Dzone was a seamless experience. They took our complex learning platform idea and built a highly performant, beautiful web application that our students absolutely love!”',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Michael Chang',
    role: 'CTO, InsurCloud',
    text: '“Dzone delivered our secure claims platform ahead of schedule and with incredible attention to detail. Their expertise in cloud architectures and high-security compliance was exactly what we needed.”',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Marketing Director, ShopVibe',
    text: '“The design team is outstanding! They designed our e-commerce store with so many subtle micro-interactions that users love. Our conversion rate increased by 35% in the first two months.”',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80'
  }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="testimonials">
      <div className="container">
        <h2 style={{ fontSize: '1.75rem' }}>What Our Clients Say</h2>
        <p className="section-description">
          Read stories of how we partnered with clients to bring success.
        </p>

        <div className="testimonials-carousel">
          <div 
            className="testimonials-track" 
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                <div className="testimonial-stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <blockquote className="testimonial-quote">{t.text}</blockquote>
                <div className="testimonial-author">
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="testimonials-controls">
            <button 
              className="control-btn"
              onClick={() => setCurrentTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className="control-btn"
              onClick={() => setCurrentTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export { testimonials };
