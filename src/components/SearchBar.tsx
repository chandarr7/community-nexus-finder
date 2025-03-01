
import { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ className = "" }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/events?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`relative w-full max-w-md mx-auto ${className}`}
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Search events, categories, locations..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full h-12 pl-4 pr-12 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary focus-visible:outline-none transition-all duration-200"
        />
        <button
          type="submit"
          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-2.5 hover:bg-primary/90 transition-colors"
          aria-label="Search"
        >
          <Search className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
