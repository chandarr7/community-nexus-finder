
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, Google, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const SignIn = () => {
  const [loading, setLoading] = useState(false);

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
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20 md:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => handleSocialLogin('Google')}
                  disabled={loading}
                >
                  <Google className="h-4 w-4" />
                  <span>Continue with Google</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => handleSocialLogin('GitHub')}
                  disabled={loading}
                >
                  <Github className="h-4 w-4" />
                  <span>Continue with GitHub</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => handleSocialLogin('LinkedIn')}
                  disabled={loading}
                >
                  <Linkedin className="h-4 w-4" />
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                  className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
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
