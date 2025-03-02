
import { Link, useNavigate } from 'react-router-dom';
import { Mail, ArrowRight, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';

interface LoginViewProps {
  onLoginSuccess: () => void;
}

const LoginView = ({ onLoginSuccess }: LoginViewProps) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSocialLogin = (provider: string) => {
    setLoading(true);
    // Simulating login process
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Login Successful",
        description: `You've signed in with ${provider}`,
        variant: "success",
      });
      onLoginSuccess();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-primary/10 to-background">
      <div className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-8 shadow-lg">
          <span className="text-white text-3xl font-bold">C</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-3">Community Connect</h1>
        <p className="text-muted-foreground mb-10 max-w-xs">
          Connect with your local community, join events and groups that match your interests.
        </p>
        
        <div className="space-y-4 w-full max-w-xs mb-10">
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 h-14 rounded-xl shadow-sm"
            onClick={() => handleSocialLogin('Google')}
            disabled={loading}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="text-base">Continue with Google</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 h-14 rounded-xl shadow-sm"
            onClick={() => handleSocialLogin('Gmail')}
            disabled={loading}
          >
            <Mail className="h-5 w-5 text-red-500" />
            <span className="text-base">Continue with Gmail</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 h-14 rounded-xl shadow-sm"
            onClick={() => handleSocialLogin('GitHub')}
            disabled={loading}
          >
            <Github className="h-5 w-5" />
            <span className="text-base">Continue with GitHub</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 h-14 rounded-xl shadow-sm"
            onClick={() => handleSocialLogin('LinkedIn')}
            disabled={loading}
          >
            <Linkedin className="h-5 w-5 text-blue-600" />
            <span className="text-base">Continue with LinkedIn</span>
          </Button>
        </div>
        
        <div className="text-sm text-muted-foreground">
          <div>Don't want to sign up yet?</div>
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:underline mt-2 text-base"
          >
            Continue as guest
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
      
      <div className="p-4 text-center text-xs text-muted-foreground pb-8">
        <p>By continuing, you agree to our Terms of Service and Privacy Policy.</p>
      </div>
    </div>
  );
};

export default LoginView;
