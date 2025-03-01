
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm dark:bg-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-semibold tracking-tight">
                Community<span className="text-primary">Connect</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-primary relative ${
                      location.pathname === item.href
                        ? 'text-primary'
                        : 'text-foreground/80'
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.href && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Auth Buttons */}
            <div className="flex items-center ml-8 space-x-4">
              <Link
                to="/sign-in"
                className="flex items-center text-sm font-medium px-4 py-2 rounded-full border border-primary/30 text-primary hover:bg-primary/5 transition-colors duration-200"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Link>
              <Link
                to="/create-account"
                className="flex items-center text-sm font-medium px-4 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors duration-200"
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Create Account
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out transform ${
          mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } fixed inset-0 z-40 bg-white dark:bg-black/90 backdrop-blur-lg`}
      >
        <div className="px-2 pt-20 pb-3 space-y-1 sm:px-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-3 py-4 text-base font-medium transition-colors duration-200 ${
                location.pathname === item.href
                  ? 'text-primary'
                  : 'text-foreground/80 hover:text-primary'
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Mobile Auth Buttons */}
          <div className="mt-6 px-3 space-y-4">
            <Link
              to="/sign-in"
              className="flex items-center justify-center text-base font-medium py-3 rounded-md border border-primary/30 text-primary hover:bg-primary/5 transition-colors duration-200"
            >
              <LogIn className="h-5 w-5 mr-2" />
              Sign In
            </Link>
            <Link
              to="/create-account"
              className="flex items-center justify-center text-base font-medium py-3 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors duration-200"
            >
              <UserPlus className="h-5 w-5 mr-2" />
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
