import { PriceItem } from '../types';

export const pricing: PriceItem[] = [
  { duration: '15 Minutes', price: '$60' },
  { duration: '30 Minutes', price: '$70' },
  { duration: '45 Minutes', price: '$95' },
  { duration: '60 Minutes', price: '$115' },
  { duration: '75 Minutes', price: '$145' },
  { duration: '90 Minutes', price: '$180' },
  { duration: '120 Minutes', price: '$250' }
];

export const operatingHours = {
  weekdays: 'Monday – Friday: 9:00 AM - 7:00 PM',
  saturday: 'Saturday: 10:00 AM - 6:00 PM',
  sunday: 'Sunday: Closed'
};
