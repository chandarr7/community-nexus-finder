import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, Share2, ArrowLeft, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import EventRegistrationModal from '../components/EventRegistrationModal';
import { getEventById, getEventsByCategory } from '../data/events';
import { Event } from '../types';
import { useToast } from '@/hooks/use-toast';

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [relatedEvents, setRelatedEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (id) {
        const foundEvent = getEventById(id);
        if (foundEvent) {
          setEvent(foundEvent);
          
          // Get related events from the same category
          const related = getEventsByCategory(foundEvent.category)
            .filter(e => e.id !== id)
            .slice(0, 4);
          setRelatedEvents(related);
        }
      }
      setLoading(false);
    }, 300);
  }, [id]);
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event?.title,
        text: event?.shortDescription || event?.description.substring(0, 100),
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied to clipboard",
        description: "Share this link with friends and family",
      });
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long',
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const openRegistration = () => {
    setIsRegistrationOpen(true);
  };

  const closeRegistration = () => {
    setIsRegistrationOpen(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16 md:pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
              <div className="h-96 bg-muted rounded-lg mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="h-6 bg-muted rounded w-1/2 mb-4"></div>
                  <div className="h-4 bg-muted rounded w-full mb-2"></div>
                  <div className="h-4 bg-muted rounded w-full mb-2"></div>
                  <div className="h-4 bg-muted rounded w-3/4 mb-6"></div>
                  <div className="h-6 bg-muted rounded w-1/3 mb-4"></div>
                  <div className="h-4 bg-muted rounded w-full mb-2"></div>
                  <div className="h-4 bg-muted rounded w-full mb-2"></div>
                </div>
                <div>
                  <div className="h-64 bg-muted rounded-lg mb-4"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16 md:pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
            <p className="text-muted-foreground mb-8">The event you're looking for doesn't exist or has been removed.</p>
            <Link
              to="/events"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-300"
            >
              Browse Events
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16 md:pt-20 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-muted-foreground mb-6">
            <button 
              onClick={() => navigate(-1)} 
              className="inline-flex items-center hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </button>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/events" className="hover:text-primary transition-colors">
              Events
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-foreground truncate">{event.title}</span>
          </div>
          
          {/* Event Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{event.title}</h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-primary" />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-primary" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                <span>{event.location}</span>
              </div>
              {event.attendees && (
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-primary" />
                  <span>{event.attendees}+ attending</span>
                </div>
              )}
              <button
                onClick={handleShare}
                className="inline-flex items-center hover:text-primary transition-colors ml-auto"
              >
                <Share2 className="h-5 w-5 mr-1" />
                Share
              </button>
            </div>
          </div>
          
          {/* Event Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="rounded-xl overflow-hidden mb-8">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full object-cover" 
                  style={{ height: '400px' }}
                />
              </div>
              
              <div className="prose max-w-none dark:prose-invert mb-12">
                <h2 className="text-2xl font-semibold mb-4">About This Event</h2>
                <p className="whitespace-pre-line text-lg">{event.description}</p>
              </div>
              
              {event.tags && event.tags.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map(tag => (
                      <Link 
                        key={tag} 
                        to={`/events?search=${tag}`} 
                        className="px-3 py-1 bg-secondary rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <div className="sticky top-24 bg-card rounded-xl shadow-sm p-6 border border-border">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">Price</h3>
                    <span className="text-xl font-semibold">{event.price}</span>
                  </div>
                  <div className="border-t border-border pt-4 mb-4">
                    <h4 className="font-medium mb-2">Location</h4>
                    <p className="text-muted-foreground">{event.address}</p>
                  </div>
                  <div className="border-t border-border pt-4 mb-6">
                    <h4 className="font-medium mb-2">Organizer</h4>
                    <div className="flex items-center">
                      {event.organizerImage ? (
                        <img 
                          src={event.organizerImage} 
                          alt={event.organizerName} 
                          className="w-10 h-10 rounded-full mr-3"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <span className="text-primary font-medium">
                            {event.organizerName.charAt(0)}
                          </span>
                        </div>
                      )}
                      <span>{event.organizerName}</span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={openRegistration}
                  className="w-full py-3 px-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
          
          {/* Related Events */}
          {relatedEvents.length > 0 && (
            <div className="mt-16 mb-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold">Related Events</h2>
                <Link 
                  to={`/events?category=${event.category}`} 
                  className="text-primary flex items-center hover:underline"
                >
                  View all
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {relatedEvents.map((relatedEvent) => (
                  <EventCard key={relatedEvent.id} event={relatedEvent} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      {event && (
        <EventRegistrationModal
          isOpen={isRegistrationOpen}
          onClose={closeRegistration}
          eventTitle={event.title}
          eventDate={formatDate(event.date)}
          maxTickets={Math.max(50, event.attendees ? event.attendees * 2 : 100)}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default EventDetails;
