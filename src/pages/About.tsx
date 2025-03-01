
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16 md:pt-20">
        {/* About Section */}
        <section className="py-16 md:py-20 bg-accent/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-6">About Us</h1>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-10">
                <h2 className="text-2xl font-bold mb-6 text-primary">Community Connect: Local Event Discovery Platform</h2>
                
                <p className="text-lg mb-8">
                  Community Connect is a comprehensive platform designed to help users discover local events, 
                  connect with their community, and stay updated on what's happening around them.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Developed By</h3>
                
                <ul className="space-y-4 mb-8">
                  <li className="p-4 bg-accent/20 rounded-lg">
                    <span className="font-medium">Maha Lakshmi Nekkanti</span> – U98024085
                  </li>
                  <li className="p-4 bg-accent/20 rounded-lg">
                    <span className="font-medium">Neha Apparao Yejgar</span> – U66487389
                  </li>
                  <li className="p-4 bg-accent/20 rounded-lg">
                    <span className="font-medium">Chandar Rathala</span> – U82675064
                  </li>
                </ul>
                
                <div className="flex items-center justify-center">
                  <div className="bg-primary/10 rounded-lg px-6 py-3">
                    <p className="text-primary font-semibold">University of South Florida Students</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-lg mb-6">
                  Our mission is to create a centralized platform where community members can easily discover 
                  and participate in local events, fostering greater community engagement and connection.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Features</h3>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                    </div>
                    <span className="ml-2">Event discovery and filtering by categories</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                    </div>
                    <span className="ml-2">USF student part-time job listings</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                    </div>
                    <span className="ml-2">Breaking news and updates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                    </div>
                    <span className="ml-2">Real-time activity notifications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
