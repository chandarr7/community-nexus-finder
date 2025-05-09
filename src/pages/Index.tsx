import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, BriefcaseIcon, NewspaperIcon, ExternalLinkIcon, HomeIcon } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedEvent from '../components/FeaturedEvent';
import EventCard from '../components/EventCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import { getFeaturedEvents, getEventsByCategory } from '../data/events';
import { Event } from '../types';
import { toast } from '@/hooks/use-toast';

const breakingNews = [
  {
    id: 1,
    title: "USF Research Team Makes Breakthrough Discovery",
    summary: "A team of USF researchers has made a significant breakthrough in renewable energy technology.",
    source: "USF News",
    date: "2 hours ago",
    url: "https://www.usf.edu/news"
  },
  {
    id: 2,
    title: "Major Tech Conference Coming to Tampa Bay",
    summary: "The annual TechWave Conference will be held in Tampa next month, bringing together industry leaders.",
    source: "Tampa Bay Times",
    date: "5 hours ago",
    url: "https://www.tampabay.com"
  },
  {
    id: 3,
    title: "New Campus Facility Opening Next Week",
    summary: "USF's new Student Innovation Center will officially open its doors next Monday.",
    source: "USF Campus Update",
    date: "Yesterday",
    url: "https://www.usf.edu/campus"
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const featuredEvents = getFeaturedEvents();
  
  useEffect(() => {
    setFilteredEvents(getEventsByCategory(selectedCategory));
  }, [selectedCategory]);

  useEffect(() => {
    setTimeout(() => {
      toast({
        title: "Welcome back!",
        description: "You have 3 new event updates in your area.",
        variant: "activity",
      });
    }, 1500);
  }, []);

  const handleEventInteraction = (event: Event) => {
    toast({
      title: `Event Update: ${event.title}`,
      description: "This event was recently updated with new information.",
      variant: "info",
    });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    
    toast({
      title: "Category Updated",
      description: `Now showing ${category === 'all' ? 'all events' : `${category} events`}.`,
      variant: "activity",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16 md:pt-20">
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
                  USF Student Part-Time Jobs
                  <BriefcaseIcon className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/student-housing"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-foreground font-medium hover:bg-accent/80 transition-colors duration-300"
                >
                  Student Housing
                  <HomeIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </section>
        
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center">
                <NewspaperIcon className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl sm:text-3xl font-bold">Breaking News</h2>
              </div>
              <a 
                href="https://news.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary flex items-center hover:underline"
              >
                More news
                <ExternalLinkIcon className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {breakingNews.map((item) => (
                <a 
                  key={item.id} 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block bg-accent/10 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                  onClick={() => {
                    toast({
                      title: "Reading news",
                      description: `You're now reading: ${item.title}`,
                      variant: "activity",
                    });
                  }}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">{item.summary}</p>
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{item.source}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        
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
              
              <div onClick={() => handleEventInteraction(featuredEvents[0])}>
                <FeaturedEvent event={featuredEvents[0]} />
              </div>
            </div>
          </section>
        )}
        
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Explore Events</h2>
            
            <CategoryFilter 
              selectedCategory={selectedCategory} 
              onChange={handleCategoryChange}
              className="mb-8"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEvents.slice(0, visibleCount).map((event) => (
                <div key={event.id} onClick={() => handleEventInteraction(event)}>
                  <EventCard event={event} />
                </div>
              ))}
            </div>
            
            {visibleCount < filteredEvents.length && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => {
                    setVisibleCount(Math.min(visibleCount + 4, filteredEvents.length));
                    toast({
                      title: "More Events Loaded",
                      description: "Showing more events for you to explore.",
                      variant: "success",
                    });
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors duration-300"
                >
                  Load More Events
                </button>
              </div>
            )}
          </div>
        </section>
        
        <section className="py-16 bg-accent/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                  <div className="bg-primary/5 rounded-2xl p-8 relative overflow-hidden">
                    <div className="relative z-10">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                        USF Students
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Find Student Housing</h2>
                      <p className="text-muted-foreground mb-6">
                        Looking for a place to stay? Explore dorms, apartments, rental homes, and more. Find accommodations that fit your budget and lifestyle.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                            <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                          </div>
                          <span className="ml-2 text-sm">On and off-campus options</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                            <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                          </div>
                          <span className="ml-2 text-sm">Filter by neighborhood and budget</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                            <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                          </div>
                          <span className="ml-2 text-sm">Connect with roommates</span>
                        </li>
                      </ul>
                      <Link
                        to="/student-housing"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-300"
                        onClick={() => {
                          toast({
                            title: "Exploring Housing",
                            description: "Checking out student housing options in Tampa Bay.",
                            variant: "activity",
                          });
                        }}
                      >
                        Explore Student Housing
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                    
                    <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2">
                  <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/20 to-primary/5 aspect-square flex items-center justify-center">
                    <HomeIcon className="h-32 w-32 text-primary/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
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
                  onClick={() => {
                    toast({
                      title: "Organizer Application",
                      description: "You're on your way to becoming an event organizer!",
                      variant: "success",
                    });
                  }}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
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
