'use client';

import { useState } from 'react';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="reviews" className="section-padding bg-[var(--bg-pearl)]">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h5 className="text-[var(--secondary)] decorative-text text-3xl mb-2">Client Reviews</h5>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-enhanced)]">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[var(--text-05)] max-w-2xl mx-auto">
            Read testimonials from our satisfied clients who have experienced the transformative benefits of our massage therapy services.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-[var(--text-01)] italic mb-8 leading-relaxed">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center">
                {currentTestimonial.image && (
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <h4 className="font-bold text-xl text-[var(--primary-enhanced)]">{currentTestimonial.name}</h4>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-enhanced)] transition-colors flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-[var(--primary)]' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-enhanced)] transition-colors flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
