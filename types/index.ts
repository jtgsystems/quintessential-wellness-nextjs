export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  social?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  image?: string;
  date?: string;
}

export interface PriceItem {
  duration: string;
  price: string;
}

export interface NavLink {
  label: string;
  href: string;
}
