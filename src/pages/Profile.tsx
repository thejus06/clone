import React from 'react';
import { currentUser, posts } from '../data/mockData';
import FeedPost from '../components/FeedPost';
import { Edit2, Plus, ArrowRight } from 'lucide-react';
import { cn } from '../utils/utils';

const Profile: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 mt-4">
      {/* Main Profile Content */}
      <div className="col-span-1 lg:col-span-3 flex flex-col gap-4">
        
        {/* Profile Header */}
        <section className="bg-white dark:bg-[#1d2226] sm:rounded-lg border-y sm:border border-gray-200 dark:border-gray-800 overflow-hidden relative shadow-sm">
          <div 
            className="h-[150px] sm:h-[200px] bg-gray-300 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentUser.cover})` }}
          >
            <button className="absolute top-4 right-4 bg-white/80 dark:bg-black/50 p-2 rounded-full hover:bg-white dark:hover:bg-black/70 transition-colors shadow-sm" aria-label="Edit cover photo">
              <Edit2 size={16} className="text-gray-700 dark:text-gray-200" />
            </button>
          </div>
          
          <div className="px-4 sm:px-6 pb-6 relative">
            <div className="absolute -top-[50px] sm:-top-[76px] left-4 sm:left-6">
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name} 
                className="w-[100px] h-[100px] sm:w-[152px] sm:h-[152px] rounded-full border-4 border-white dark:border-[#1d2226] bg-white dark:bg-gray-800 object-cover cursor-pointer hover:opacity-90 transition-opacity"
              />
            </div>
            
            <div className="flex justify-end pt-4 gap-2 flex-wrap">
              <button className="bg-brand-600 text-white font-semibold px-4 py-1.5 rounded-full hover:bg-brand-700 transition-colors text-sm sm:text-base">
                Open to
              </button>
              <button className="border border-brand-600 text-brand-600 font-semibold px-4 py-1.5 rounded-full hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors text-sm sm:text-base">
                Add profile section
              </button>
              <button className="border border-gray-500 text-gray-600 dark:text-gray-300 font-semibold px-4 py-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm sm:text-base">
                More
              </button>
            </div>

            <div className="mt-8 sm:mt-2">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                {currentUser.name}
                <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              </h1>
              <p className="text-base text-gray-900 dark:text-gray-100 mt-1 max-w-xl leading-relaxed">{currentUser.headline}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{currentUser.location} • <span className="text-brand-600 font-semibold hover:underline cursor-pointer">Contact info</span></p>
              
              <div className="mt-2 text-sm font-semibold text-brand-600 hover:underline cursor-pointer inline-block">
                {currentUser.connections}+ connections
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="bg-white dark:bg-[#1d2226] sm:rounded-lg border-y sm:border border-gray-200 dark:border-gray-800 p-4 sm:p-6 relative shadow-sm">
          <button className="absolute top-4 right-4 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full transition-colors" aria-label="Edit About">
            <Edit2 size={20} className="text-gray-500" />
          </button>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About</h2>
          <p className="text-sm text-gray-900 dark:text-gray-100 leading-relaxed whitespace-pre-wrap">
            Passionate Frontend Engineer with over 8 years of experience building scalable web applications. 
            I specialize in React, TypeScript, and modern CSS frameworks. I love creating beautiful, intuitive 
            user interfaces and optimizing performance. Always eager to learn new technologies and collaborate 
            with talented teams.
          </p>
        </section>

        {/* Experience */}
        <section className="bg-white dark:bg-[#1d2226] sm:rounded-lg border-y sm:border border-gray-200 dark:border-gray-800 p-4 sm:p-6 relative shadow-sm">
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full transition-colors" aria-label="Add experience">
              <Plus size={24} className="text-gray-500" />
            </button>
            <button className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full transition-colors" aria-label="Edit experience">
              <Edit2 size={20} className="text-gray-500" />
            </button>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Experience</h2>
          
          <div className="flex gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-800">
            <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900 rounded flex items-center justify-center font-bold text-brand-600 shrink-0 text-xl">T</div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Senior Frontend Engineer</h3>
              <p className="text-sm text-gray-900 dark:text-gray-200">TechCorp · Full-time</p>
              <p className="text-sm text-gray-500 mt-1">Jan 2024 - Present · 2 yrs 10 mos</p>
              <p className="text-sm text-gray-500 mt-1">San Francisco, CA</p>
              <p className="text-sm text-gray-900 dark:text-gray-100 mt-3 leading-relaxed">Leading the frontend architecture for the core product. Improved rendering performance by 40% and established a comprehensive design system.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center font-bold text-gray-600 shrink-0 text-xl">S</div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Frontend Developer</h3>
              <p className="text-sm text-gray-900 dark:text-gray-200">StartupX · Full-time</p>
              <p className="text-sm text-gray-500 mt-1">Mar 2021 - Dec 2023 · 2 yrs 10 mos</p>
              <p className="text-sm text-gray-500 mt-1">Remote</p>
              <p className="text-sm text-gray-900 dark:text-gray-100 mt-3 leading-relaxed">Developed highly interactive React applications. Mentored junior developers and introduced TypeScript to the codebase.</p>
            </div>
          </div>
        </section>

        {/* Activity */}
        <section className="bg-white dark:bg-[#1d2226] sm:rounded-lg border-y sm:border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
          <div className="p-4 sm:p-6 pb-2">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Activity</h2>
                <p className="text-sm text-brand-600 font-semibold mt-1 hover:underline cursor-pointer inline-block">1,245 followers</p>
              </div>
              <button className="border border-brand-600 text-brand-600 font-semibold px-4 py-1.5 rounded-full hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors hidden sm:block">
                Create a post
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-800">
            <FeedPost post={posts[0]} />
          </div>
          
          <button className="w-full py-3 text-center border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex justify-center items-center gap-1">
            Show all activity <ArrowRight size={16} />
          </button>
        </section>

      </div>

      {/* Right Sidebar (Optional for profile) */}
      <aside className="hidden lg:block lg:col-span-1">
        <div className="bg-white dark:bg-[#1d2226] rounded-lg border border-gray-200 dark:border-gray-800 p-4 sticky top-[76px] shadow-sm">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">People also viewed</h3>
          
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex gap-3 items-start">
                <img src={`https://i.pravatar.cc/150?u=p${item}`} className="w-12 h-12 rounded-full object-cover" alt="Profile" />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-white hover:underline cursor-pointer">Emily Walker</h4>
                  <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">Product Designer | UI/UX</p>
                  <button className="border border-gray-500 text-gray-600 dark:text-gray-300 font-semibold rounded-full px-3 py-1 mt-2 text-xs hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5c-2.2 0-4 1.8-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Profile;
