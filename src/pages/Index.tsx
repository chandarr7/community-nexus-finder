
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, BriefcaseIcon } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedEvent from '../components/FeaturedEvent';
import EventCard from '../components/EventCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import { getFeaturedEvents, getEventsByCategory } from '../data/events';
import { Event } from '../types';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const featuredEvents = getFeaturedEvents();
  
  useEffect(() => {
    setFilteredEvents(getEventsByCategory(selectedCategory));
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative bg-accent/30 py-16 md:py-20 lg:py-24 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
                Discover and Connect with Your Local Community
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Find events that match your interests, connect with like-minded individuals, and make the most of your community.
              </p>
              
              <SearchBar className="mb-8" />
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/events"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-300"
                >
                  Browse All Events
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/usf-jobs"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors duration-300"
                >
                  USF Student Jobs
                  <BriefcaseIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </section>
        
        {/* Featured Event Section */}
        {featuredEvents.length > 0 && (
          <section className="py-16 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold">Featured Event</h2>
                <Link 
                  to="/events" 
                  className="text-primary flex items-center hover:underline"
                >
                  View all events
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <FeaturedEvent event={featuredEvents[0]} />
            </div>
          </section>
        )}
        
        {/* Categories & Events Section */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Explore Events</h2>
            
            <CategoryFilter 
              selectedCategory={selectedCategory} 
              onChange={setSelectedCategory}
              className="mb-8"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEvents.slice(0, visibleCount).map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
            
            {visibleCount < filteredEvents.length && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setVisibleCount(Math.min(visibleCount + 4, filteredEvents.length))}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors duration-300"
                >
                  Load More Events
                </button>
              </div>
            )}
          </div>
        </section>
        
        {/* USF Student Jobs Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                  <div className="bg-primary/5 rounded-2xl p-8 relative overflow-hidden">
                    <div className="relative z-10">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                        USF Students
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Find Part-Time Jobs at USF</h2>
                      <p className="text-muted-foreground mb-6">
                        Balance your studies with valuable work experience. Discover on-campus opportunities that fit your schedule and help you earn while you learn.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                            <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                          </div>
                          <span className="ml-2 text-sm">Flexible schedules around your classes</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                            <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                          </div>
                          <span className="ml-2 text-sm">Conveniently located on campus</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                            <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                          </div>
                          <span className="ml-2 text-sm">Gain valuable work experience</span>
                        </li>
                      </ul>
                      <Link
                        to="/usf-jobs"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-300"
                      >
                        Explore USF Jobs
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                    
                    {/* Background decoration */}
                    <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2">
                  <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/20 to-primary/5 aspect-square flex items-center justify-center">
                    <BriefcaseIcon className="h-32 w-32 text-primary/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Become an Organizer Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="max-w-2xl relative z-10">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-6">
                  Create Events
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Become an Event Organizer</h2>
                <p className="text-muted-foreground mb-8">
                  Share your passion with the community. Create and manage events, connect with attendees, and make an impact in your local area.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              {/* Background decoration */}
              <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/10 to-transparent"></div>
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
