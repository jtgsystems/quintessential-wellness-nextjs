'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactSection() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      console.log('Contact form data:', data);
      alert('Message sent successfully! We\'ll get back to you soon.');
      reset();
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h5 className="text-[var(--secondary)] decorative-text text-3xl mb-2">Get In Touch</h5>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-enhanced)]">
            Contact Us Today
          </h2>
          <p className="text-lg text-[var(--text-05)] max-w-2xl mx-auto">
            Have questions or ready to book your appointment? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div>
            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-[var(--primary-enhanced)]">Address</h4>
                  <p className="text-[var(--text-05)]">
                    2287 King Street<br />
                    St. Catharines, ON L2R 6P7
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-[var(--primary-enhanced)]">Phone</h4>
                  <a href="tel:9059328236" className="text-[var(--text-05)] hover:text-[var(--primary)]">(905) 932-8236</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-[var(--primary-enhanced)]">Email</h4>
                  <a href="mailto:quintessentialw@icloud.com" className="text-[var(--text-05)] hover:text-[var(--primary)]">
                    quintessentialw@icloud.com
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2909.9976!2d-79.2389!3d43.1594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA5JzMzLjgiTiA3OcKwMTQnMjAuMCJX!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[var(--bg-02)] rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-[var(--primary-enhanced)]">Send Us a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="Your Name *"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--primary)] focus:outline-none transition-colors bg-white"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                  })}
                  type="email"
                  placeholder="Your Email *"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--primary)] focus:outline-none transition-colors bg-white"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <input
                  {...register('phone')}
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--primary)] focus:outline-none transition-colors bg-white"
                />
              </div>

              <div>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  placeholder="Your Message *"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--primary)] focus:outline-none transition-colors bg-white resize-none"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 text-lg disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
