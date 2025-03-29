
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
  const [viewingDiagram, setViewingDiagram] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  // Auto-advance through campuses when not viewing diagram
  useEffect(() => {
    if (currentStep < campuses.length && !showingLoginPage && !viewingDiagram) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => {
          if (prev + 1 >= campuses.length) {
            // Show login page after showcasing all campuses
            setShowingLoginPage(true);
            return prev;
          }
          return prev + 1;
        });
      }, 3000);
      
      return () => clearTimeout(timer);
    } else if (currentStep >= campuses.length && !showingLoginPage) {
      // Show login page after showcasing all campuses
      setShowingLoginPage(true);
      
      toast({
        title: "Welcome to Community Connect",
        description: "Please sign in to continue",
        variant: "info",
      });
    }
  }, [currentStep, showingLoginPage, viewingDiagram]);
  
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

  // Track diagram state
  const handleDiagramToggle = (isViewing: boolean) => {
    setViewingDiagram(isViewing);
  };

  // Add a style to ensure the page takes up the full viewport height without any padding
  return (
    <div className="h-screen w-full overflow-auto" style={{ paddingBottom: 0 }}>
      {currentStep < campuses.length && !showingLoginPage ? (
        <CampusShowcase 
          campuses={campuses}
          currentStep={currentStep}
          onCampusClick={handleCampusClick}
          onSkip={handleSkip}
          onDiagramToggle={handleDiagramToggle}
        />
      ) : (
        <LoginView onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default Welcome;
