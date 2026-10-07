import React, { useState } from 'react';
import { currentUser } from '../data/mockData';
import PostModal from './PostModal';

const PhotoIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#378fe9" className={className}><path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-8-6 9V7a1 1 0 011-1h14a1 1 0 011 1v10z"></path></svg>;
const VideoIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#5f9b41" className={className}><path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path></svg>;
const EventIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#c37d16" className={className}><path d="M19 4h-2V2h-2v2H9V2H7v2H5a3 3 0 00-3 3v12a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zM5 6h14a1 1 0 011 1v2H4V7a1 1 0 011-1zm14 14H5a1 1 0 01-1-1v-8h16v8a1 1 0 01-1 1z"></path></svg>;
const ArticleIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#e16745" className={className}><path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h10v-2H3zM3 7h10v10H3z"></path></svg>;

interface PostComposerProps {
  onPost?: (content: string) => void;
}

const PostComposer: React.FC<PostComposerProps> = ({ onPost }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white dark:bg-[#1d2226] sm:rounded-lg border-y sm:border border-gray-200 dark:border-gray-800 p-3 sm:p-4 shadow-sm">
        <div className="flex gap-3 mb-3">
          <img 
            src={currentUser.avatar} 
            alt="Me" 
            className="w-12 h-12 rounded-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
          />
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex-1 text-left px-5 py-3 border border-gray-300 dark:border-gray-500 rounded-full text-sm font-semibold text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Start a post
          </button>
        </div>
        
        <div className="flex justify-between items-center px-1 sm:px-2 flex-wrap">
          <button className="flex items-center justify-center gap-2 px-2 sm:px-3 py-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300 flex-1 sm:flex-none">
            <PhotoIcon />
            <span className="text-sm font-semibold hidden sm:inline">Media</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-2 sm:px-3 py-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300 flex-1 sm:flex-none">
            <VideoIcon />
            <span className="text-sm font-semibold hidden sm:inline">Video</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-2 sm:px-3 py-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300 flex-1 sm:flex-none">
            <EventIcon />
            <span className="text-sm font-semibold hidden sm:inline">Event</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-2 sm:px-3 py-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300 flex-1 sm:flex-none">
            <ArticleIcon />
            <span className="text-sm font-semibold hidden sm:inline">Write article</span>
          </button>
        </div>
      </div>

      {isModalOpen && (
        <PostModal 
          onClose={() => setIsModalOpen(false)} 
          onPost={(content) => {
            if (onPost) onPost(content);
            setIsModalOpen(false);
          }}
        />
      )}
    </>
  );
};

export default PostComposer;
