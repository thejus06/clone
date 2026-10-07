import React, { useState } from 'react';
import { currentUser } from '../data/mockData';
import { Image, PlaySquare, Calendar, FileText } from 'lucide-react';
import PostModal from './PostModal';

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
            <Image size={24} className="text-[#378fe9]" />
            <span className="text-sm font-semibold hidden sm:inline">Media</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-2 sm:px-3 py-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300 flex-1 sm:flex-none">
            <PlaySquare size={24} className="text-[#5f9b41]" />
            <span className="text-sm font-semibold hidden sm:inline">Event</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-2 sm:px-3 py-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300 flex-1 sm:flex-none">
            <Calendar size={24} className="text-[#c37d16]" />
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
