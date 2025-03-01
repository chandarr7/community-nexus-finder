
import { Event, CategoryOption } from '../types';

export const categories: CategoryOption[] = [
  { value: 'music', label: 'Music', icon: '🎵' },
  { value: 'art', label: 'Arts & Culture', icon: '🎨' },
  { value: 'food', label: 'Food & Drink', icon: '🍷' },
  { value: 'sports', label: 'Sports', icon: '⚽' },
  { value: 'networking', label: 'Networking', icon: '🤝' },
  { value: 'technology', label: 'Technology', icon: '💻' },
  { value: 'education', label: 'Education', icon: '📚' },
  { value: 'community', label: 'Community', icon: '🏘️' },
  { value: 'other', label: 'Other', icon: '✨' },
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Local Jazz Night',
    description: 'Join us for an evening of smooth jazz performances by local musicians. The event will feature a variety of jazz styles from classic to contemporary. Drinks and light refreshments will be available for purchase. This is a perfect opportunity to unwind after a long week and immerse yourself in the vibrant local music scene. Come early to secure the best seats!',
    shortDescription: 'An evening of smooth jazz performances by local musicians',
    date: '2023-09-15',
    time: '8:00 PM - 11:00 PM',
    location: 'Blue Note Jazz Club',
    address: '123 Music Avenue, Downtown',
    organizerName: 'Downtown Music Association',
    organizerImage: '/placeholder.svg',
    category: 'music',
    price: '$15',
    image: '/placeholder.svg',
    isFeatured: true,
    attendees: 120,
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    },
    tags: ['jazz', 'live music', 'nightlife']
  },
  {
    id: '2',
    title: 'Farmers Market Festival',
    description: 'Our annual Farmers Market Festival celebrates local produce, artisanal foods, and sustainable farming practices. Meet the farmers who grow your food, participate in cooking demonstrations, and enjoy live music throughout the day. Activities for children include face painting and a mini petting zoo. Supporting local agriculture has never been more delicious or fun!',
    shortDescription: 'Celebrate local produce, artisanal foods, and sustainable farming',
    date: '2023-09-10',
    time: '9:00 AM - 2:00 PM',
    location: 'Central Park',
    address: '456 Park Street',
    organizerName: 'Community Farmers Association',
    category: 'food',
    price: 'Free',
    image: '/placeholder.svg',
    attendees: 500,
    coordinates: {
      lat: 40.7831,
      lng: -73.9712
    },
    tags: ['food', 'market', 'community']
  },
  {
    id: '3',
    title: 'Tech Startup Meetup',
    description: 'Connect with local entrepreneurs, developers, and investors at our monthly Tech Startup Meetup. This month features a panel discussion on securing seed funding followed by a networking session. Whether you\'re looking to pitch your idea, find a co-founder, or simply learn more about the startup ecosystem, this event offers valuable insights and connections for technology innovators at all stages.',
    shortDescription: 'Connect with local entrepreneurs, developers, and investors',
    date: '2023-09-20',
    time: '6:30 PM - 9:00 PM',
    location: 'Innovation Hub',
    address: '789 Tech Boulevard',
    organizerName: 'StartUp Network',
    category: 'technology',
    price: '$5',
    image: '/placeholder.svg',
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    },
    tags: ['startup', 'networking', 'technology']
  },
  {
    id: '4',
    title: 'Community Cleanup Day',
    description: 'Join fellow community members for a day dedicated to beautifying our neighborhood. Volunteers will collect litter, plant flowers, and help restore local parks. All cleaning supplies will be provided, but please bring your own water bottle and wear appropriate clothing. This is a family-friendly event and a great way to meet neighbors while making a positive impact on our shared environment.',
    shortDescription: 'Join fellow community members for a neighborhood beautification day',
    date: '2023-09-25',
    time: '10:00 AM - 1:00 PM',
    location: 'Riverfront Park',
    address: '321 River Road',
    organizerName: 'Green Community Initiative',
    category: 'community',
    price: 'Free',
    image: '/placeholder.svg',
    attendees: 75,
    coordinates: {
      lat: 34.0522,
      lng: -118.2437
    },
    tags: ['volunteer', 'environment', 'community']
  },
  {
    id: '5',
    title: 'Art Gallery Opening: Modern Perspectives',
    description: 'Be among the first to experience our new exhibition featuring works by emerging local artists exploring contemporary themes through various mediums. The evening includes an artist talk, wine reception, and opportunity to purchase original artwork. This curated collection challenges conventional perspectives and showcases innovative approaches to modern art. Network with artists and fellow art enthusiasts in an inspiring creative environment.',
    shortDescription: 'Exhibition featuring works by emerging local artists',
    date: '2023-09-18',
    time: '7:00 PM - 10:00 PM',
    location: 'Contemporary Art Space',
    address: '555 Gallery Lane',
    organizerName: 'Metropolitan Arts Council',
    category: 'art',
    price: '$10',
    image: '/placeholder.svg',
    isFeatured: true,
    coordinates: {
      lat: 41.8781,
      lng: -87.6298
    },
    tags: ['art', 'exhibition', 'culture']
  },
  {
    id: '6',
    title: 'Charity 5K Run/Walk',
    description: 'Lace up your running shoes for a good cause! This annual 5K raises funds for children\'s education programs in underserved communities. The scenic route takes participants through beautiful park trails and historic neighborhoods. All fitness levels are welcome—run, jog, or walk at your own pace. Registration includes a t-shirt, finisher\'s medal, and post-race refreshments. Join us in making a difference one step at a time.',
    shortDescription: 'Annual 5K that raises funds for children\'s education programs',
    date: '2023-09-30',
    time: '8:30 AM - 11:00 AM',
    location: 'Lakeside Park',
    address: '987 Lake Drive',
    organizerName: 'Education Foundation',
    category: 'sports',
    price: '$25',
    image: '/placeholder.svg',
    attendees: 300,
    coordinates: {
      lat: 29.7604,
      lng: -95.3698
    },
    tags: ['running', 'charity', 'fitness']
  },
  {
    id: '7',
    title: 'Professional Networking Breakfast',
    description: 'Start your day with purpose at our monthly networking breakfast for professionals across industries. The structured format includes a brief keynote on effective networking strategies, followed by facilitated introductions and open networking time. Enjoy a gourmet breakfast buffet while making valuable business connections. Bring plenty of business cards and prepare a 30-second introduction about yourself and your professional goals.',
    shortDescription: 'Monthly gathering for professionals across industries',
    date: '2023-09-12',
    time: '7:30 AM - 9:00 AM',
    location: 'Grand Hotel Conference Center',
    address: '123 Business Parkway',
    organizerName: 'Chamber of Commerce',
    category: 'networking',
    price: '$20',
    image: '/placeholder.svg',
    coordinates: {
      lat: 33.4484,
      lng: -112.0740
    },
    tags: ['business', 'networking', 'professional']
  },
  {
    id: '8',
    title: 'Workshop: Financial Literacy for Young Adults',
    description: 'This interactive workshop covers essential financial skills for those starting their independent financial journey. Topics include budgeting, saving, understanding credit, investment basics, and planning for major life purchases. The facilitator brings 15 years of experience in personal finance education and uses real-world scenarios to make complex concepts accessible. Participants will leave with practical tools, resources, and a personalized financial action plan.',
    shortDescription: 'Interactive workshop on essential financial skills',
    date: '2023-09-22',
    time: '1:00 PM - 4:00 PM',
    location: 'Community College',
    address: '456 Education Street',
    organizerName: 'Financial Empowerment Initiative',
    category: 'education',
    price: '$15',
    image: '/placeholder.svg',
    attendees: 50,
    coordinates: {
      lat: 39.9526,
      lng: -75.1652
    },
    tags: ['finance', 'education', 'workshop']
  }
];

export function getEventById(id: string): Event | undefined {
  return events.find(event => event.id === id);
}

export function getFeaturedEvents(): Event[] {
  return events.filter(event => event.isFeatured);
}

export function getEventsByCategory(category: string): Event[] {
  if (category === 'all') return events;
  return events.filter(event => event.category === category);
}

export function searchEvents(query: string): Event[] {
  const lowercaseQuery = query.toLowerCase();
  return events.filter(event => 
    event.title.toLowerCase().includes(lowercaseQuery) || 
    event.description.toLowerCase().includes(lowercaseQuery) ||
    event.location.toLowerCase().includes(lowercaseQuery) ||
    event.category.toLowerCase().includes(lowercaseQuery) ||
    (event.tags && event.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)))
  );
}
