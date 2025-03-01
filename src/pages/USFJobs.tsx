
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobCard from '../components/JobCard';
import { Input } from "@/components/ui/input";
import { getAllUSFJobs } from '../data/usfJobs';
import { BriefcaseIcon, SearchIcon } from 'lucide-react';

const USFJobs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const allJobs = getAllUSFJobs();

  // Filter jobs based on search term
  const filteredJobs = allJobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/20 py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm mb-6">
                <BriefcaseIcon className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">USF Student Part-Time Jobs</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Find on-campus opportunities that fit your schedule and help you earn while you learn
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search by job title, department, or keywords..."
                  className="pl-10 py-6 text-base rounded-full pr-4 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Jobs Listing Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">Available Positions</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Showing {filteredJobs.length} part-time opportunities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
            
            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 mb-2">No jobs matching your search criteria</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-primary hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </section>
        
        {/* Info Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Why Work On Campus at USF?</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-base font-medium">Convenient Location</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Work right on campus between classes, eliminating commute time</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-base font-medium">Flexible Scheduling</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">On-campus employers understand academic priorities and exam schedules</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-base font-medium">Valuable Experience</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Gain practical skills and build your resume while earning money</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-base font-medium">Networking Opportunities</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Connect with faculty, staff, and peers who can provide references and mentorship</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  For more information about student employment at USF, visit the 
                  <a href="https://www.usf.edu/career-services/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    Career Services website
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default USFJobs;
