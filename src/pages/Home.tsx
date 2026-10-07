import React from 'react';
import ProfileCard from '../components/ProfileCard';
import PostComposer from '../components/PostComposer';
import FeedPost from '../components/FeedPost';
import RightSidebar from '../components/RightSidebar';
import { posts } from '../data/mockData';

const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
      
      {/* Left Column (Profile & Links) */}
      <div className="hidden md:block md:col-span-1">
        <ProfileCard />
        
        <div className="bg-white dark:bg-[#1d2226] rounded-lg border border-gray-200 dark:border-gray-800 mt-4 sticky top-[76px] overflow-hidden">
          <div className="p-3">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-brand-600 cursor-pointer mb-2">Groups</p>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-brand-600 cursor-pointer mb-2">Events</p>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-brand-600 cursor-pointer">Followed Hashtags</p>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors text-center">
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Discover more</span>
          </div>
        </div>
      </div>

      {/* Center Column (Feed) */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-4">
        <PostComposer />
        <div className="flex items-center gap-2 mb-2">
          <div className="h-px bg-gray-300 dark:bg-gray-700 flex-1"></div>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1">
            Sort by: <strong className="text-gray-900 dark:text-white cursor-pointer hover:underline">Top</strong>
          </span>
        </div>
        {posts.map(post => (
          <FeedPost key={post.id} post={post} />
        ))}
      </div>

      {/* Right Column (Widgets) */}
      <div className="hidden lg:block lg:col-span-1">
        <RightSidebar />
      </div>

    </div>
  );
};

export default Home;
