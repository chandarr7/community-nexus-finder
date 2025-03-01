
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import { Event } from '../types';
import { categories } from '../data/events';

interface EventCardProps {
  event: Event;
  className?: string;
}

const EventCard = ({ event, className = "" }: EventCardProps) => {
  const category = categories.find(c => c.value === event.category);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      month: 'short', 
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <Link 
      to={`/events/${event.id}`}
      className={`group block rounded-lg overflow-hidden transition-all duration-300 bg-card hover:shadow-xl hover-lift ${className}`}
      aria-label={`View details for ${event.title}`}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-white/90 backdrop-blur-sm text-primary">
            {category?.icon} {category?.label}
          </span>
        </div>
        {event.price === 'Free' && (
          <div className="absolute top-3 right-3">
            <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-primary/90 backdrop-blur-sm text-white">
              Free
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-medium line-clamp-1 group-hover:text-primary transition-colors duration-300">
          {event.title}
        </h3>
        
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {event.shortDescription || event.description}
        </p>
        
        <div className="mt-4 flex items-start space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-1.5 h-4 w-4 flex-shrink-0 text-primary" />
            <span>{formatDate(event.date)}</span>
          </div>
          
          <div className="flex items-center">
            <MapPin className="mr-1.5 h-4 w-4 flex-shrink-0 text-primary" />
            <span className="truncate">{event.location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
