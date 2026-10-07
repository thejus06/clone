import React from 'react';
import { trendingTopics } from '../data/mockData';
import { Info } from 'lucide-react';

const RightSidebar: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* News Card */}
      <div className="bg-white dark:bg-[#1d2226] rounded-lg border border-gray-200 dark:border-gray-800 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-900 dark:text-white">ProNetwork News</h2>
          <button className="text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 p-1 rounded">
            <Info size={16} />
          </button>
        </div>
        
        <ul className="flex flex-col gap-3">
          {trendingTopics.map((topic, i) => (
            <li key={i} className="group cursor-pointer">
              <div className="flex items-start gap-2">
                <span className="text-gray-900 dark:text-gray-400 font-bold mt-0.5">•</span>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-brand-600 group-hover:underline line-clamp-2">
                    {topic.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{topic.readers} readers</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        
        <button className="text-gray-500 dark:text-gray-400 font-semibold text-sm hover:bg-gray-100 dark:hover:bg-gray-800 px-2 py-1 mt-4 rounded transition-colors inline-flex items-center gap-1">
          Show more
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
      </div>

      {/* Ad/Promo Card */}
      <div className="bg-white dark:bg-[#1d2226] rounded-lg border border-gray-200 dark:border-gray-800 p-4 text-center sticky top-[76px]">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Ad • • •</p>
        <p className="text-sm text-gray-600 dark:text-gray-300 font-medium mb-4">Master React and TypeScript in 2026</p>
        <div className="flex justify-center gap-4 mb-4">
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-16 h-16 rounded-full" alt="Me" />
          <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop" className="w-16 h-16 rounded-md object-cover" alt="React Logo" />
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">Alex, explore new opportunities with Advanced React skills.</p>
        <button className="border border-brand-600 text-brand-600 font-semibold rounded-full px-4 py-1.5 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors">
          Learn More
        </button>
      </div>

    </div>
  );
};

export default RightSidebar;
