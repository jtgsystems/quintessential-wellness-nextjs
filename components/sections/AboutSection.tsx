import Image from 'next/image';

export default function AboutSection() {
  const benefits = [
    {
      icon: '💆',
      title: 'Pain Relief',
      description: 'Targeted therapy to alleviate chronic pain and muscle tension'
    },
    {
      icon: '🏃',
      title: 'Enhanced Recovery',
      description: 'Accelerate healing and improve athletic performance'
    },
    {
      icon: '🧘',
      title: 'Stress Reduction',
      description: 'Promote relaxation and mental well-being'
    },
    {
      icon: '💪',
      title: 'Improved Mobility',
      description: 'Increase flexibility and range of motion'
    }
  ];

  return (
    <section id="about" className="section-padding bg-[var(--bg-02)]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/envato-massage1.jpg"
              alt="Quintessential Wellness Massage Therapy"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h5 className="text-[var(--secondary)] decorative-text text-3xl mb-2">About Us</h5>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-enhanced)]">
              Your Wellness Journey Starts Here
            </h2>
            <p className="text-lg text-[var(--text-05)] mb-6">
              Quintessential Wellness is dedicated to providing exceptional massage therapy services
              in the Niagara region. Our experienced team combines traditional techniques with modern
              approaches to deliver personalized treatment plans tailored to your unique needs.
            </p>
            <p className="text-lg text-[var(--text-05)] mb-8">
              Whether you're seeking relief from chronic pain, recovering from an injury, or simply
              looking to enhance your overall well-being, we're here to support you every step of the way.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-4xl">{benefit.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-[var(--primary-enhanced)]">{benefit.title}</h4>
                    <p className="text-[var(--text-05)]">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
