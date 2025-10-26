'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface BookingFormData {
  name: string;
  phone: string;
  date: string;
  treatment: string;
}

export default function HeroSection() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<BookingFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      console.log('Booking data:', data);
      alert('Booking request submitted successfully!');
      reset();
    } catch (error) {
      console.error('Submission error:', error);
      alert('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-cover bg-center bg-fixed pt-20"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/images/shellfish.jpg)'
      }}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Hero Text */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premier Massage Therapy & Wellness in Niagara
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Experience transformative healing at Quintessential Wellness. Located in the heart of the Niagara region,
              our clinic combines expert massage therapy with a serene environment designed for your complete well-being and recovery.
            </p>
            <a href="#services" className="btn-primary inline-block text-lg">
              Explore Our Services
            </a>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-[var(--primary-enhanced)]">Book Your Appointment</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="Your Name *"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--primary)] focus:outline-none transition-colors"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <input
                  {...register('phone', { required: 'Phone is required' })}
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--primary)] focus:outline-none transition-colors"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <input
                  {...register('date', { required: 'Date is required' })}
                  type="datetime-local"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--primary)] focus:outline-none transition-colors"
                />
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
              </div>

              <div>
                <select
                  {...register('treatment', { required: 'Please select a treatment' })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--primary)] focus:outline-none transition-colors"
                >
                  <option value="">Select Treatment *</option>
                  <option value="deep-tissue">Deep Tissue Massage</option>
                  <option value="sports">Sports Massage</option>
                  <option value="therapeutic">Therapeutic Massage</option>
                  <option value="stretching">Assisted Stretching</option>
                </select>
                {errors.treatment && <p className="text-red-500 text-sm mt-1">{errors.treatment.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 text-lg disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Request Appointment'}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-[var(--text-05)] mb-2">Or call us directly:</p>
              <a href="tel:9059328236" className="text-2xl font-bold text-[var(--primary-enhanced)] hover:text-[var(--primary)] transition-colors">
                (905) 932-8236
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
