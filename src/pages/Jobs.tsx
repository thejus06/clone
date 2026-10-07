import React from 'react';
import { Bookmark, Settings } from 'lucide-react';

const Jobs: React.FC = () => {
  const jobs = [
    { title: 'Senior React Developer', company: 'TechCorp', location: 'San Francisco, CA (Hybrid)', posted: '2 days ago', easyApply: true },
    { title: 'Frontend Engineer (TypeScript)', company: 'InnovateIO', location: 'Remote', posted: '4 hours ago', easyApply: false },
    { title: 'UI/UX Designer', company: 'DesignStudio', location: 'New York, NY', posted: '1 week ago', easyApply: true },
    { title: 'Full Stack Engineer', company: 'StartupX', location: 'London, UK (Remote)', posted: 'Just now', easyApply: false },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
      {/* Sidebar */}
      <div className="hidden md:block md:col-span-1">
        <div className="bg-white dark:bg-[#1d2226] rounded-lg border border-gray-200 dark:border-gray-800 p-4">
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded transition-colors text-gray-900 dark:text-gray-100 font-semibold">
              <Bookmark size={20} className="text-gray-500" />
              My jobs
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded transition-colors text-gray-900 dark:text-gray-100 font-semibold">
              <Settings size={20} className="text-gray-500" />
              Application settings
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-1 md:col-span-3 flex flex-col gap-4">
        
        <div className="bg-white dark:bg-[#1d2226] rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Recommended for you</h2>
          
          <div className="flex flex-col gap-4">
            {jobs.map((job, i) => (
              <div key={i} className="flex gap-4 p-4 -mx-4 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b border-gray-200 dark:border-gray-800 last:border-0 relative group">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded shadow flex items-center justify-center font-bold text-xl text-gray-500">
                  {job.company[0]}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-brand-600 hover:underline cursor-pointer text-lg">{job.title}</h3>
                  <p className="text-sm text-gray-900 dark:text-white">{job.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{job.location}</p>
                  <div className="flex items-center gap-2 mt-2">
                    {job.easyApply && (
                      <span className="text-xs flex items-center gap-1 text-gray-900 dark:text-white font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#0a66c2" stroke="#0a66c2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        Easy Apply
                      </span>
                    )}
                    <span className="text-xs text-gray-400">{job.posted}</span>
                  </div>
                </div>
                <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 dark:hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Bookmark size={24} />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Jobs;
