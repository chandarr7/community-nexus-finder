
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from '@/hooks/use-toast';
import CampusShowcase from '@/components/welcome/CampusShowcase';
import LoginView from '@/components/welcome/LoginView';
import { campuses } from '@/data/campuses';

const Welcome = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showingLoginPage, setShowingLoginPage] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  // Auto-advance through campuses
  useEffect(() => {
    if (currentStep < campuses.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 3000);
      
      return () => clearTimeout(timer);
    } else if (!showingLoginPage) {
      // Show login page after showcasing all campuses
      setShowingLoginPage(true);
      
      toast({
        title: "Welcome to Community Connect",
        description: "Please sign in to continue",
        variant: "info",
      });
    }
  }, [currentStep, showingLoginPage]);
  
  const handleCampusClick = (index: number) => {
    setCurrentStep(index);
    // Reset the auto-advance timer by forcing a re-render of the component
    const timer = setTimeout(() => {
      // This is just to trigger a re-render
    }, 10);
    return () => clearTimeout(timer);
  };

  const handleSkip = () => {
    setShowingLoginPage(true);
  };
  
  const handleLoginSuccess = () => {
    navigate('/');
  };

  // Render campus showcase or login view
  if (currentStep < campuses.length && !showingLoginPage) {
    return (
      <CampusShowcase 
        campuses={campuses}
        currentStep={currentStep}
        onCampusClick={handleCampusClick}
        onSkip={handleSkip}
      />
    );
  }
  
  return <LoginView onLoginSuccess={handleLoginSuccess} />;
};

export default Welcome;
