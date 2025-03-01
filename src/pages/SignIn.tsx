
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
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
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20 md:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-8">
              <div className="mb-2">
                <Link to="/" className="inline-flex items-center text-sm text-primary hover:underline">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to home
                </Link>
              </div>
              <h1 className="text-2xl font-bold mb-6">Sign In</h1>
              
              <div className="space-y-4 mb-6">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 h-12 rounded-xl"
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
                  <span>Continue with Google</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 h-12 rounded-xl"
                  onClick={() => handleSocialLogin('Gmail')}
                  disabled={loading}
                >
                  <Mail className="h-5 w-5 text-red-500" />
                  <span>Continue with Gmail</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 h-12 rounded-xl"
                  onClick={() => handleSocialLogin('GitHub')}
                  disabled={loading}
                >
                  <Github className="h-5 w-5" />
                  <span>Continue with GitHub</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 h-12 rounded-xl"
                  onClick={() => handleSocialLogin('LinkedIn')}
                  disabled={loading}
                >
                  <Linkedin className="h-5 w-5 text-blue-600" />
                  <span>Continue with LinkedIn</span>
                </Button>
                
                <div className="relative flex items-center gap-4 py-2">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="text-sm text-gray-500">or</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-1">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-500">
                      Remember me
                    </label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-4 rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Sign In
                </button>
              </form>
              <div className="mt-6 text-center">
                <span className="text-sm text-gray-500">Don't have an account?</span>
                <Link to="/create-account" className="ml-1 text-sm text-primary hover:underline">
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignIn;
