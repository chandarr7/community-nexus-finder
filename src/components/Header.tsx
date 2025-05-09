
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogIn, Home, Bell, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Badge } from '@/components/ui/badge';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  // Sample unread notification count
  const unreadNotifications = 3;
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Close mobile menu when changing routes or resizing above mobile breakpoint
  useEffect(() => {
    setIsOpen(false);
  }, [location, isMobile]);
  
  // Add shadow to header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Groups', path: '/groups' },
    { name: 'USF Jobs', path: '/usf-jobs' },
    { name: 'Student Housing', path: '/student-housing' },
    { name: 'About Us', path: '/about' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-md ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
            <span className="text-xl font-bold text-primary">Community Connect</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-accent/50 transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/documents">
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center gap-2 text-sm font-medium hover:bg-accent/50 transition-colors"
              >
                <FileText className="h-4 w-4" />
                Documents
              </Button>
            </Link>
          </nav>
          
          {/* Auth Buttons & Notifications - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/notifications" className="relative p-2 rounded-full hover:bg-accent/50 transition-colors">
              <Bell className="h-5 w-5" />
              {unreadNotifications > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs rounded-full">
                  {unreadNotifications}
                </Badge>
              )}
            </Link>
            <Link to="/sign-in">
              <Button variant="ghost" size="sm" className="flex items-center">
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </Link>
            <Link to="/create-account">
              <Button size="sm" className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Create Account
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Link to="/notifications" className="relative p-2 rounded-full hover:bg-accent/50 transition-colors">
              <Bell className="h-5 w-5" />
              {unreadNotifications > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs rounded-full">
                  {unreadNotifications}
                </Badge>
              )}
            </Link>
            <button 
              className="p-2 rounded-md hover:bg-accent/50 transition-colors"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md font-medium hover:bg-accent/50 transition-colors ${
                    location.pathname === link.path
                      ? 'bg-accent/50 text-primary'
                      : 'text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/documents">
                <Button 
                  variant="ghost" 
                  className="flex items-center justify-start gap-2 px-4 py-2 rounded-md font-medium hover:bg-accent/50 transition-colors w-full text-left"
                >
                  <FileText className="h-4 w-4" />
                  Documents
                </Button>
              </Link>
              <hr className="border-border my-2" />
              <Link
                to="/sign-in"
                className="flex items-center px-4 py-2 rounded-md font-medium hover:bg-accent/50 transition-colors"
              >
                <LogIn className="h-4 w-4 mr-3" />
                Sign In
              </Link>
              <Link
                to="/create-account"
                className="flex items-center px-4 py-2 rounded-md font-medium text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                <User className="h-4 w-4 mr-3" />
                Create Account
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
