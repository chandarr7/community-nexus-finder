
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import { getEventsByCategory, searchEvents } from '../data/events';
import { Event } from '../types';
import { MapIcon, GridIcon } from 'lucide-react';

const Events = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const searchQuery = searchParams.get('search') || '';
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (searchQuery) {
        setFilteredEvents(searchEvents(searchQuery));
      } else {
        setFilteredEvents(getEventsByCategory(selectedCategory));
      }
      setLoading(false);
    }, 300); // Simulate loading
  }, [selectedCategory, searchQuery]);
  
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16 md:pt-20">
        <section className="py-12 bg-accent/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                {searchQuery ? `Search Results: "${searchQuery}"` : 'Discover Events'}
              </h1>
              <p className="text-lg text-muted-foreground">
                {searchQuery 
                  ? 'Browse through the events that match your search.'
                  : 'Find events that match your interests and connect with your community.'}
              </p>
            </div>
            
            <div className="max-w-xl mx-auto mb-8">
              <SearchBar />
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <CategoryFilter selectedCategory={selectedCategory} onChange={handleCategoryChange} />
              
              <div className="flex items-center space-x-2 bg-secondary rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  aria-label="Grid view"
                >
                  <GridIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'map' ? 'bg-white shadow text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  aria-label="Map view"
                >
                  <MapIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {loading ? (
              // Loading skeleton
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="rounded-lg overflow-hidden bg-card animate-pulse">
                    <div className="aspect-[16/9] w-full bg-muted"></div>
                    <div className="p-4">
                      <div className="h-6 bg-muted rounded mb-3 w-3/4"></div>
                      <div className="h-4 bg-muted rounded mb-2 w-full"></div>
                      <div className="h-4 bg-muted rounded mb-4 w-2/3"></div>
                      <div className="flex space-x-4">
                        <div className="h-4 bg-muted rounded w-1/4"></div>
                        <div className="h-4 bg-muted rounded w-1/3"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {viewMode === 'grid' ? (
                  filteredEvents.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground text-lg">No events found. Try adjusting your search criteria.</p>
                    </div>
                  )
                ) : (
                  <div className="bg-muted rounded-lg p-12 text-center">
                    <p className="text-lg font-medium">Map view coming soon!</p>
                    <p className="text-muted-foreground">We're working on an interactive map to help you find events near you.</p>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
