
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import MicroservicesArchitecture from './MicroservicesArchitecture';
import { useState, useEffect } from 'react';

interface CampusShowcaseProps {
  campuses: {
    name: string;
    description: string;
    image: string;
    color: string;
  }[];
  currentStep: number;
  onCampusClick: (index: number) => void;
  onSkip: () => void;
  onDiagramToggle?: (isViewing: boolean) => void;
}

const CampusShowcase = ({ 
  campuses, 
  currentStep, 
  onCampusClick, 
  onSkip,
  onDiagramToggle
}: CampusShowcaseProps) => {
  const [showDiagram, setShowDiagram] = useState(false);
  
  // Notify parent component when diagram view changes
  useEffect(() => {
    onDiagramToggle?.(showDiagram);
  }, [showDiagram, onDiagramToggle]);
  
  return (
    <div className={`min-h-screen w-full flex flex-col bg-gradient-to-b ${campuses[currentStep].color} to-background transition-colors duration-1000`}>
      <div className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        {showDiagram ? (
          <div className="w-full max-w-5xl bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 my-8 overflow-y-auto max-h-[90vh]">
            <MicroservicesArchitecture />
            <Button 
              variant="outline"
              className="mt-4 mb-2"
              onClick={() => setShowDiagram(false)}
            >
              Back to Campuses
            </Button>
          </div>
        ) : (
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-md w-full my-16">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6 mx-auto shadow-lg">
              <span className="text-white text-3xl font-bold">C</span>
            </div>
            
            <h1 className="text-3xl font-bold mb-2">USF {campuses[currentStep].name} Campus</h1>
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-4 w-4 text-primary mr-1" />
              <span className="text-sm text-muted-foreground">University of South Florida</span>
            </div>
            
            <p className="text-muted-foreground mb-8">
              {campuses[currentStep].description}
            </p>
            
            <div className="flex justify-center items-center gap-2 mb-6 flex-wrap">
              {campuses.map((campus, index) => (
                <Button 
                  key={index}
                  variant={index === currentStep ? "default" : "outline"}
                  size="sm"
                  className={`px-3 py-1 text-xs rounded-full ${index === currentStep ? '' : 'hover:bg-primary/10'}`}
                  onClick={() => onCampusClick(index)}
                >
                  {campus.name}
                </Button>
              ))}
            </div>
            
            <div className="flex flex-col space-y-2">
              <Button 
                className="w-full"
                onClick={onSkip}
              >
                Skip to Login
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setShowDiagram(true)}
              >
                View Architecture Diagram
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampusShowcase;
