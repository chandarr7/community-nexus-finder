
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Home, Building, Hotel, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Housing types with their icons and descriptions
const housingTypes = [
  {
    id: 'dorms',
    title: 'University Dorms',
    icon: <Building className="h-10 w-10 text-primary" />,
    description: 'On-campus dormitories with convenient access to classes and facilities.',
    benefits: ['Close to classes', 'Meal plans available', 'Campus security', 'Inclusive utilities']
  },
  {
    id: 'apartments',
    title: 'Apartments',
    icon: <Building className="h-10 w-10 text-primary" />,
    description: 'Off-campus apartments ranging from studios to multi-bedroom units.',
    benefits: ['Privacy', 'Various size options', 'Amenities like pools and gyms', 'Flexible leasing']
  },
  {
    id: 'houses',
    title: 'Rental Homes',
    icon: <Home className="h-10 w-10 text-primary" />,
    description: 'Single-family homes and townhouses for rent in residential neighborhoods.',
    benefits: ['More space', 'Quiet environment', 'Private yards', 'Good for groups']
  },
  {
    id: 'hostels',
    title: 'Hostels',
    icon: <Hotel className="h-10 w-10 text-primary" />,
    description: 'Budget-friendly shared accommodations with communal spaces.',
    benefits: ['Affordable', 'Meet other students', 'Short-term options', 'All-inclusive pricing']
  }
];

// Featured neighborhoods with brief descriptions
const neighborhoods = [
  {
    id: 'university',
    name: 'University Area',
    description: 'Closest to campus with the highest concentration of student housing options.',
    distance: 'Walking distance to campus',
    popular: true
  },
  {
    id: 'downtown',
    name: 'Downtown Tampa',
    description: 'Urban living with access to restaurants, nightlife, and cultural attractions.',
    distance: '15-20 min drive to campus',
    popular: true
  },
  {
    id: 'temple',
    name: 'Temple Terrace',
    description: 'Quiet suburban area with affordable housing options and parks.',
    distance: '10-15 min drive to campus',
    popular: false
  },
  {
    id: 'ybor',
    name: 'Ybor City',
    description: 'Historic district with character, nightlife, and renovated lofts.',
    distance: '20 min drive to campus',
    popular: false
  },
  {
    id: 'westshore',
    name: 'Westshore',
    description: 'Business district with upscale apartment complexes and shopping.',
    distance: '25 min drive to campus',
    popular: false
  },
  {
    id: 'seminole',
    name: 'Seminole Heights',
    description: 'Trendy neighborhood with character homes and local eateries.',
    distance: '15-20 min drive to campus',
    popular: true
  }
];

const StudentHousing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative bg-accent/30 py-16 md:py-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
                Find Your Perfect Student Housing
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover comfortable and affordable housing options near USF and throughout Tampa Bay.
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <Input
                  type="text"
                  placeholder="Search by neighborhood, housing type, or keywords..."
                  className="pl-11 pr-4 py-6 h-14 rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full px-6">
                  Search
                </Button>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </section>
        
        {/* Housing Types Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Housing Options</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore different types of student accommodations available in the Tampa Bay area.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {housingTypes.map((type) => (
                <div key={type.id} className="bg-accent/10 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col items-center text-center mb-4">
                    {type.icon}
                    <h3 className="text-xl font-semibold mt-4 mb-2">{type.title}</h3>
                    <p className="text-muted-foreground">{type.description}</p>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Neighborhoods Section */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Popular Neighborhoods</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover the best areas to live in Tampa based on your preferences and budget.
              </p>
            </div>
            
            <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="all">All Areas</TabsTrigger>
                <TabsTrigger value="popular">Most Popular</TabsTrigger>
                <TabsTrigger value="affordable">Affordable</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {neighborhoods.map((area) => (
                    <div key={area.id} className="bg-background rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold">{area.name}</h3>
                          {area.popular && (
                            <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground mb-4">{area.description}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1.5 text-primary" />
                          <span>{area.distance}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="popular" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {neighborhoods
                    .filter(area => area.popular)
                    .map((area) => (
                      <div key={area.id} className="bg-background rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-semibold">{area.name}</h3>
                            <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                              Popular
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-4">{area.description}</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1.5 text-primary" />
                            <span>{area.distance}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="affordable" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {neighborhoods
                    .filter(area => area.id === 'temple' || area.id === 'university')
                    .map((area) => (
                      <div key={area.id} className="bg-background rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-semibold">{area.name}</h3>
                            {area.popular && (
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-4">{area.description}</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1.5 text-primary" />
                            <span>{area.distance}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Housing Resources Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Housing Resources</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Helpful information to guide you through your housing search.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-accent/10 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">USF Housing Portal</h3>
                  <p className="text-muted-foreground mb-4">
                    Official university resource for on-campus housing options and roommate matching services.
                  </p>
                  <a 
                    href="https://www.usf.edu/housing/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center"
                  >
                    Visit USF Housing
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                <div className="bg-accent/10 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Off-Campus Housing Office</h3>
                  <p className="text-muted-foreground mb-4">
                    Resources and guidance for finding apartments and houses in the Tampa area.
                  </p>
                  <a 
                    href="https://www.usf.edu/student-affairs/housing/off-campus/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center"
                  >
                    Learn More
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                <div className="bg-accent/10 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Roommate Finder</h3>
                  <p className="text-muted-foreground mb-4">
                    Connect with potential roommates based on lifestyle, budget, and preferences.
                  </p>
                  <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
                    Coming Soon
                  </Button>
                </div>
                
                <div className="bg-accent/10 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Housing FAQ</h3>
                  <p className="text-muted-foreground mb-4">
                    Answers to commonly asked questions about student housing options.
                  </p>
                  <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
                    View FAQ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Need Help Finding Housing?</h2>
              <p className="text-muted-foreground mb-8">
                Our housing advisors can help you navigate your options and find the perfect place based on your needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="px-8">Contact Housing Advisor</Button>
                <Button variant="outline" className="px-8">Schedule a Tour</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudentHousing;
