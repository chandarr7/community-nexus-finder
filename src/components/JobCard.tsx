
import React from 'react';
import { BriefcaseIcon, ClockIcon, CalendarIcon, DollarSignIcon, MapPinIcon } from 'lucide-react';
import { Job } from '@/types';
import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const postedDate = new Date(job.postedDate);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-primary">{job.title}</h3>
          <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
            {job.isOnCampus ? 'On Campus' : 'Off Campus'}
          </span>
        </div>
        
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">{job.department}</div>
        
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
          <MapPinIcon className="h-4 w-4 mr-2" />
          <span>{job.location}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <ClockIcon className="h-4 w-4 mr-2" />
            <span>{job.hoursPerWeek} hrs/week</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <DollarSignIcon className="h-4 w-4 mr-2" />
            <span>{job.pay}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
          {job.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Posted {formatDistanceToNow(postedDate, { addSuffix: true })}
          </span>
          
          <Link
            to={`/usf-jobs/${job.id}`}
            className="text-primary hover:text-primary/80 text-sm font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
