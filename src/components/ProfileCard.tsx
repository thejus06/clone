import React from 'react';
import { currentUser } from '../data/mockData';

const ProfileCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#1d2226] rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden relative">
      <div 
        className="h-[60px] bg-gray-300 bg-cover bg-center"
        style={{ backgroundImage: `url(${currentUser.cover})` }}
      ></div>
      
      <div className="px-4 pb-4">
        <div className="relative -mt-9 flex justify-center mb-3">
          <img 
            src={currentUser.avatar} 
            alt={currentUser.name} 
            className="w-[72px] h-[72px] rounded-full border-2 border-white dark:border-[#1d2226] bg-white dark:bg-gray-800"
          />
        </div>
        
        <div className="text-center pb-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold text-gray-900 dark:text-white hover:underline cursor-pointer">
            {currentUser.name}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
            {currentUser.headline}
          </p>
        </div>

        <div className="py-3 border-b border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-center py-1 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 px-2 -mx-2 rounded transition-colors">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Profile viewers</span>
            <span className="text-xs font-semibold text-brand-600 dark:text-brand-400">{currentUser.views}</span>
          </div>
          <div className="flex justify-between items-center py-1 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 px-2 -mx-2 rounded transition-colors">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Post impressions</span>
            <span className="text-xs font-semibold text-brand-600 dark:text-brand-400">{currentUser.impressions}</span>
          </div>
        </div>

        <div className="pt-3 pb-1 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 px-2 -mx-2 rounded transition-colors">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-900 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
            Saved items
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
