
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Event } from '../types';
import { categories } from '../data/events';

interface FeaturedEventProps {
  event: Event;
}

const FeaturedEvent = ({ event }: FeaturedEventProps) => {
  const category = categories.find(c => c.value === event.category);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="w-full relative overflow-hidden rounded-2xl group">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
      
      <img 
        src={event.image} 
        alt={event.title}
        className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-8 md:p-12">
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/90 backdrop-blur-sm text-primary">
              {category?.icon} {category?.label}
            </span>
            {event.price === 'Free' && (
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/90 backdrop-blur-sm text-white">
                Free
              </span>
            )}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {event.title}
          </h2>
          
          <p className="text-gray-200 mb-6 max-w-xl line-clamp-3">
            {event.shortDescription || event.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-300">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 flex-shrink-0 text-gray-300" />
              <span>{formatDate(event.date)}</span>
            </div>
            
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4 flex-shrink-0 text-gray-300" />
              <span>{event.location}</span>
            </div>
            
            {event.attendees && (
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4 flex-shrink-0 text-gray-300" />
                <span>{event.attendees}+ attending</span>
              </div>
            )}
          </div>
          
          <Link
            to={`/events/${event.id}`}
            className="inline-block px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-300 hover:shadow-lg"
          >
            View Event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvent;
