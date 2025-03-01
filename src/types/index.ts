
export interface Event {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  date: string;
  time: string;
  location: string;
  address: string;
  organizerName: string;
  organizerImage?: string;
  category: EventCategory;
  price: string;
  image: string;
  isFeatured?: boolean;
  attendees?: number;
  coordinates?: {
    lat: number;
    lng: number;
  };
  tags?: string[];
}

export type EventCategory = 
  | 'music'
  | 'art'
  | 'food'
  | 'sports'
  | 'networking'
  | 'technology'
  | 'education'
  | 'community'
  | 'other';

export interface CategoryOption {
  value: EventCategory;
  label: string;
  icon: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  description: string;
  hoursPerWeek: string;
  pay: string;
  requirements: string[];
  contactEmail: string;
  postedDate: string;
  applicationDeadline: string;
  isOnCampus: boolean;
}
