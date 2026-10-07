import React, { useState } from 'react';
import { Bookmark, Settings, CheckCircle2, AlertTriangle, Briefcase, Filter, Search } from 'lucide-react';
import { cn } from '../utils/utils';
import { useLocalStorage } from '../hooks/useLocalStorage';

type AppStatus = 'Saved' | 'Applied' | 'Screening' | 'Interview' | 'Offer' | 'Rejected' | null;

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  easyApply: boolean;
  matchScore: number;
  matchingSkills: string[];
  missingSkills: string[];
}

const initialJobs: Job[] = [
  { id: 'j1', title: 'Senior React Developer', company: 'TechCorp', location: 'San Francisco, CA (Hybrid)', type: 'Full-time', salary: '$140K - $180K', posted: '2 days ago', easyApply: true, matchScore: 92, matchingSkills: ['React', 'TypeScript', 'CSS'], missingSkills: ['GraphQL'] },
  { id: 'j2', title: 'Frontend Engineer (TypeScript)', company: 'InnovateIO', location: 'Remote', type: 'Contract', salary: '$70 - $90/hr', posted: '4 hours ago', easyApply: false, matchScore: 87, matchingSkills: ['TypeScript', 'React', 'Tailwind'], missingSkills: ['Docker', 'AWS'] },
  { id: 'j3', title: 'UI/UX Designer', company: 'DesignStudio', location: 'New York, NY', type: 'Full-time', salary: '$110K - $150K', posted: '1 week ago', easyApply: true, matchScore: 45, matchingSkills: ['Figma'], missingSkills: ['Prototyping', 'User Research'] },
  { id: 'j4', title: 'Full Stack Engineer', company: 'StartupX', location: 'London, UK (Remote)', type: 'Full-time', salary: '£80K - £110K', posted: 'Just now', easyApply: false, matchScore: 78, matchingSkills: ['React', 'Node.js'], missingSkills: ['PostgreSQL', 'Redis'] },
];

const Jobs: React.FC = () => {
  const [trackedJobs, setTrackedJobs] = useLocalStorage<Record<string, AppStatus>>('trackedJobs', {});
  const [activeTab, setActiveTab] = useState<'search' | 'tracker'>('search');
  const [searchQuery, setSearchQuery] = useState('');

  const handleUpdateStatus = (jobId: string, status: AppStatus) => {
    setTrackedJobs(prev => {
      const updated = { ...prev };
      if (status === null) {
        delete updated[jobId];
      } else {
        updated[jobId] = status;
      }
      return updated;
    });
  };

  const getStatusColor = (status: AppStatus) => {
    switch (status) {
      case 'Saved': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Applied': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      case 'Screening': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'Interview': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Offer': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Rejected': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const renderJobCard = (job: Job, isTracker = false) => {
    const currentStatus = trackedJobs[job.id] || null;

    return (
      <div key={job.id} className="flex flex-col gap-3 p-4 -mx-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b border-gray-200 dark:border-gray-800 last:border-0 relative">
        <div className="flex gap-4">
          <div className="w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded shadow-sm flex items-center justify-center font-bold text-2xl text-gray-400 shrink-0">
            {job.company[0]}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-brand-600 hover:underline cursor-pointer text-lg truncate pr-8">{job.title}</h3>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{job.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{job.location} • {job.type}</p>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-1">{job.salary}</p>
            
            {!isTracker && (
              <div className="mt-3 bg-brand-50/50 dark:bg-brand-900/10 border border-brand-100 dark:border-brand-900/30 rounded p-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className={cn(
                    "text-xs font-bold px-2 py-0.5 rounded",
                    job.matchScore >= 80 ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                    job.matchScore >= 60 ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
                    "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                  )}>
                    {job.matchScore}% Match
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Career Match Analysis</span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                  {job.matchingSkills.map(s => (
                    <span key={s} className="text-xs flex items-center gap-1 text-gray-600 dark:text-gray-300">
                      <CheckCircle2 size={12} className="text-green-600 dark:text-green-500" /> {s}
                    </span>
                  ))}
                  {job.missingSkills.map(s => (
                    <span key={s} className="text-xs flex items-center gap-1 text-gray-500 dark:text-gray-500">
                      <AlertTriangle size={12} className="text-yellow-600 dark:text-yellow-500" /> {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex items-center justify-between gap-2 mt-4">
              <div className="flex items-center gap-3">
                {job.easyApply && (
                  <span className="text-xs flex items-center gap-1 text-brand-600 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    Easy Apply
                  </span>
                )}
                <span className="text-xs text-gray-400 font-medium">{job.posted}</span>
              </div>
              
              {isTracker ? (
                <select 
                  className={cn("text-xs font-semibold py-1 px-2 rounded outline-none border cursor-pointer", getStatusColor(currentStatus), "border-transparent")}
                  value={currentStatus || ''}
                  onChange={(e) => handleUpdateStatus(job.id, (e.target.value || null) as AppStatus)}
                  aria-label="Update application status"
                >
                  <option value="">Remove</option>
                  <option value="Saved">Saved</option>
                  <option value="Applied">Applied</option>
                  <option value="Screening">Screening</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
              ) : (
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleUpdateStatus(job.id, 'Saved')}
                    className="text-brand-600 border border-brand-600 font-semibold rounded-full px-4 py-1 hover:bg-brand-50 dark:hover:bg-brand-900/20 text-sm transition-colors"
                  >
                    Save
                  </button>
                  <button 
                    onClick={() => handleUpdateStatus(job.id, 'Applied')}
                    className="bg-brand-600 text-white font-semibold rounded-full px-4 py-1 hover:bg-brand-700 text-sm transition-colors"
                  >
                    Apply
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {!isTracker && (
            <button 
              onClick={() => handleUpdateStatus(job.id, currentStatus === 'Saved' ? null : 'Saved')}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={currentStatus === 'Saved' ? 'Unsave job' : 'Save job'}
            >
              <Bookmark size={20} className={cn(currentStatus === 'Saved' && "fill-current text-brand-600")} />
            </button>
          )}
        </div>
      </div>
    );
  };

  const trackedJobList = initialJobs.filter(j => trackedJobs[j.id]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
      {/* Sidebar */}
      <div className="hidden md:block md:col-span-1">
        <div className="bg-white dark:bg-[#1d2226] rounded-lg border border-gray-200 dark:border-gray-800 p-4 sticky top-[76px]">
          <ul className="flex flex-col gap-1">
            <li>
              <button 
                onClick={() => setActiveTab('search')}
                className={cn("w-full flex items-center gap-3 p-2 rounded transition-colors text-left font-semibold", activeTab === 'search' ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800")}
              >
                <Search size={20} /> Search Jobs
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('tracker')}
                className={cn("w-full flex items-center justify-between p-2 rounded transition-colors text-left font-semibold", activeTab === 'tracker' ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800")}
              >
                <div className="flex items-center gap-3"><Briefcase size={20} /> Tracker</div>
                {trackedJobList.length > 0 && <span className="bg-brand-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">{trackedJobList.length}</span>}
              </button>
            </li>
            <li>
              <button className="w-full flex items-center gap-3 p-2 rounded transition-colors text-left font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800">
                <Settings size={20} /> Settings
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-1 md:col-span-3 flex flex-col gap-4">
        
        {activeTab === 'search' ? (
          <>
            {/* Search and Filters */}
            <div className="bg-white dark:bg-[#1d2226] rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input 
                    type="text" 
                    placeholder="Search by title, skill, or company" 
                    className="w-full pl-10 pr-4 py-2 bg-[#eef3f8] dark:bg-[#38434f] text-sm text-gray-900 dark:text-gray-100 rounded outline-none border border-transparent focus:border-brand-500 transition-colors"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-500 rounded text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Filter size={18} /> Filters
                </button>
              </div>
              <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar pb-1">
                {['Remote', 'Hybrid', 'Full-time', 'Entry level', '$100K+', 'Past 24 hours'].map(f => (
                  <button key={f} className="whitespace-nowrap px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-[#1d2226] rounded-lg border border-gray-200 dark:border-gray-800 p-4 sm:p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Top job picks for you</h2>
              <div className="flex flex-col">
                {initialJobs.filter(j => j.title.toLowerCase().includes(searchQuery.toLowerCase())).map(job => renderJobCard(job, false))}
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white dark:bg-[#1d2226] rounded-lg border border-gray-200 dark:border-gray-800 p-4 sm:p-6 min-h-[60vh]">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Application Tracker</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Manage your saved jobs and active applications.</p>
            
            {trackedJobList.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Bookmark size={48} className="text-gray-300 dark:text-gray-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No tracked jobs</h3>
                <p className="text-sm text-gray-500 max-w-sm">Jobs you save or apply to will appear here so you can track your progress.</p>
                <button 
                  onClick={() => setActiveTab('search')}
                  className="mt-6 bg-brand-600 text-white font-semibold rounded-full px-6 py-2 hover:bg-brand-700 transition-colors"
                >
                  Search Jobs
                </button>
              </div>
            ) : (
              <div className="flex flex-col">
                {trackedJobList.map(job => renderJobCard(job, true))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default Jobs;
