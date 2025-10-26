import Image from 'next/image';
import { services } from '@/data/services';

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h5 className="text-[var(--secondary)] decorative-text text-3xl mb-2">Our Services</h5>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-enhanced)]">
            Expert Massage Therapy
          </h2>
          <p className="text-lg text-[var(--text-05)] max-w-2xl mx-auto">
            Discover our comprehensive range of massage therapy services designed to address your specific needs
            and promote optimal health and wellness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[var(--primary-enhanced)]">{service.title}</h3>
                <p className="text-[var(--text-05)] mb-4">{service.description}</p>
                <a
                  href={service.link || '#contact'}
                  className="text-[var(--primary)] font-semibold hover:text-[var(--primary-enhanced)] transition-colors inline-flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
