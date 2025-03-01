
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

export type GroupType = 
  | 'department'
  | 'student_organization'
  | 'club'
  | 'sports_team'
  | 'academic'
  | 'community';

export interface Group {
  id: string;
  name: string;
  type: GroupType;
  description: string;
  memberCount: number;
  image?: string;
  isFavorite: boolean;
  isJoined: boolean;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  groupId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  timestamp: string;
}
