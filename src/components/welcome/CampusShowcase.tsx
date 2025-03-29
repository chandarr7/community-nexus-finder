
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import MicroservicesArchitecture from './MicroservicesArchitecture';
import { useState, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

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
    <div className={`h-screen w-full flex flex-col bg-gradient-to-b ${campuses[currentStep].color} to-background transition-colors duration-1000`}>
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        {showDiagram ? (
          <div className="w-full max-w-5xl bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 h-[90vh]">
            <ScrollArea className="h-[80vh]">
              <MicroservicesArchitecture />
            </ScrollArea>
            <div className="mt-2 flex justify-center">
              <Button 
                variant="outline"
                onClick={() => setShowDiagram(false)}
              >
                Back to Campuses
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 max-w-md w-full">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 mx-auto shadow-lg">
              <span className="text-white text-2xl font-bold">C</span>
            </div>
            
            <h1 className="text-2xl font-bold mb-2">USF {campuses[currentStep].name} Campus</h1>
            <div className="flex items-center justify-center mb-3">
              <MapPin className="h-4 w-4 text-primary mr-1" />
              <span className="text-sm text-muted-foreground">University of South Florida</span>
            </div>
            
            <p className="text-muted-foreground mb-6 text-sm">
              {campuses[currentStep].description}
            </p>
            
            <div className="flex justify-center items-center gap-2 mb-4 flex-wrap">
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
