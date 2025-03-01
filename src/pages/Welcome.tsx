
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, ArrowRight, Github, Linkedin, CircleUserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Welcome = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  // Redirect to main page if on desktop
  useEffect(() => {
    if (!isMobile) {
      navigate('/');
    }
  }, [isMobile, navigate]);

  const handleSocialLogin = (provider: string) => {
    setLoading(true);
    // Simulating login process
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-primary/10 to-background">
      <div className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6">
          <span className="text-white text-2xl font-bold">C</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-3">Community Connect</h1>
        <p className="text-muted-foreground mb-8 max-w-xs">
          Connect with your local community, join events and groups that match your interests.
        </p>
        
        <div className="space-y-4 w-full max-w-xs mb-8">
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 h-12"
            onClick={() => handleSocialLogin('google')}
            disabled={loading}
          >
            <CircleUserRound className="h-5 w-5" />
            <span>Continue with Google</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 h-12"
            onClick={() => handleSocialLogin('github')}
            disabled={loading}
          >
            <Github className="h-5 w-5" />
            <span>Continue with GitHub</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 h-12"
            onClick={() => handleSocialLogin('linkedin')}
            disabled={loading}
          >
            <Linkedin className="h-5 w-5" />
            <span>Continue with LinkedIn</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 h-12"
            onClick={() => handleSocialLogin('email')}
            disabled={loading}
          >
            <Mail className="h-5 w-5" />
            <span>Continue with Email</span>
          </Button>
        </div>
        
        <div className="text-sm text-muted-foreground">
          <div>Don't want to sign up yet?</div>
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:underline mt-1"
          >
            Continue as guest
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
      
      <div className="p-4 text-center text-xs text-muted-foreground">
        <p>By continuing, you agree to our Terms of Service and Privacy Policy.</p>
      </div>
    </div>
  );
};

export default Welcome;
