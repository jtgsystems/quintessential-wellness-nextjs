import Image from 'next/image';
import { pricing, operatingHours } from '@/data/pricing';

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-[var(--bg-02)]">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h5 className="text-[var(--secondary)] decorative-text text-3xl mb-2">Pricing & Packages</h5>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-enhanced)]">
            Flexible Treatment Options
          </h2>
          <p className="text-lg text-[var(--text-05)] max-w-2xl mx-auto">
            Choose from our comprehensive range of massage therapy sessions designed to meet your specific wellness needs and schedule.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Operating Hours */}
          <div className="bg-[var(--primary)] text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Operating Hours</h3>
            <p className="mb-6">We are dedicated to accommodating your schedule to ensure you receive the best possible care.</p>

            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold mb-1">Monday – Friday</h4>
                <p className="text-white/90">9:00 AM - 7:00 PM</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">Saturday</h4>
                <p className="text-white/90">10:00 AM - 6:00 PM</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">Sunday</h4>
                <p className="text-white/90">Closed</p>
              </div>
            </div>

            <a href="#contact" className="mt-8 inline-block w-full text-center bg-white text-[var(--primary)] font-bold py-3 rounded-xl hover:bg-gray-100 transition-colors">
              Book Now
            </a>
          </div>

          {/* Image */}
          <div className="relative h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/Massage-Stcatharines.webp"
              alt="Quintessential Wellness Facilities"
              fill
              className="object-cover"
            />
          </div>

          {/* Pricing Table */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-2 text-[var(--primary-enhanced)]">Session Length</h3>
            <p className="text-[var(--text-05)] mb-6">Treatment Packages</p>

            <div className="space-y-4">
              {pricing.map((item, index) => (
                <div key={index} className="flex justify-between items-center pb-4 border-b border-dashed border-gray-300">
                  <h4 className="font-semibold text-[var(--text-01)]">{item.duration}</h4>
                  <span className="text-xl font-bold text-[var(--primary-enhanced)]">{item.price}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-[var(--text-05)] italic">* All prices include HST</p>
          </div>
        </div>
      </div>
    </section>
  );
}
