import React from 'react';
import ProfileCard from '../components/ProfileCard';
import PostComposer from '../components/PostComposer';
import FeedPost from '../components/FeedPost';
import RightSidebar from '../components/RightSidebar';
import { posts as initialPosts } from '../data/mockData';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Home: React.FC = () => {
  const [posts, setPosts] = useLocalStorage('posts', initialPosts);

  const handleCreatePost = (content: string) => {
    const newPost = {
      id: `p${Date.now()}`,
      author: {
        name: 'Alex Johnson',
        headline: 'Senior Frontend Engineer | UI/UX Enthusiast',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
      },
      timestamp: 'Just now',
      content,
      likes: 0,
      comments: 0,
      reposts: 0,
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      
      {/* Left Column (Profile & Links) */}
      <div className="hidden md:block md:col-span-1">
        <ProfileCard />
        
        <div className="bg-white dark:bg-[#1d2226] rounded-lg border border-gray-200 dark:border-gray-800 mt-4 sticky top-[76px] overflow-hidden shadow-sm">
          <div className="p-4">
            <p className="text-xs font-semibold text-brand-600 hover:underline cursor-pointer mb-3">Groups</p>
            <div className="flex justify-between items-center mb-3">
               <p className="text-xs font-semibold text-brand-600 hover:underline cursor-pointer">Events</p>
               <button className="text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 p-1 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>
            </div>
            <p className="text-xs font-semibold text-brand-600 hover:underline cursor-pointer">Followed Hashtags</p>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors text-center">
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Discover more</span>
          </div>
        </div>
      </div>

      {/* Center Column (Feed) */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-2 sm:gap-4 pb-4">
        <PostComposer onPost={handleCreatePost} />
        
        <div className="flex items-center gap-2 mb-1 px-4 sm:px-0">
          <div className="h-[1px] bg-gray-300 dark:bg-gray-700 flex-1"></div>
          <span className="text-[12px] text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1">
            Sort by: <strong className="text-gray-900 dark:text-white cursor-pointer hover:underline flex items-center">Top <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg></strong>
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
