import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'deep-tissue',
    title: 'Deep Tissue Massage',
    description: 'Targets chronic tension and muscle knots with focused pressure to release deep-seated stress and improve mobility.',
    image: '/images/deep-tissue-massage.jpg',
    link: '/services/deep-tissue'
  },
  {
    id: 'sports-massage',
    title: 'Sports Massage',
    description: 'Specialized techniques for athletes to enhance performance, prevent injuries, and accelerate recovery.',
    image: '/images/theragun-massage.jpg',
    link: '/services/sports-massage'
  },
  {
    id: 'therapeutic',
    title: 'Therapeutic Massage',
    description: 'Holistic approach combining multiple techniques to address specific health concerns and promote overall wellness.',
    image: '/images/envato-massage1.jpg',
    link: '/services/therapeutic'
  },
  {
    id: 'stretching',
    title: 'Assisted Stretching',
    description: 'Professional assisted stretching to improve flexibility, reduce tension, and enhance range of motion.',
    image: '/images/massage-therapy.jpg',
    link: '/services/stretching'
  }
];
