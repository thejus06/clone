import React, { useState } from 'react';
import { currentUser } from '../data/mockData';
import { Image, PlaySquare, Calendar, FileText } from 'lucide-react';
import PostModal from './PostModal';

const PostComposer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white dark:bg-[#1d2226] rounded-lg border border-gray-200 dark:border-gray-800 p-3 sm:p-4">
        <div className="flex gap-3 mb-3">
          <img 
            src={currentUser.avatar} 
            alt="Me" 
            className="w-12 h-12 rounded-full object-cover cursor-pointer"
          />
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex-1 text-left px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-full text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Start a post
          </button>
        </div>
        
        <div className="flex justify-between items-center px-1 sm:px-2">
          <button className="flex items-center gap-2 px-2 py-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300">
            <Image size={20} className="text-brand-500" />
            <span className="text-sm font-medium hidden sm:inline">Media</span>
          </button>
          <button className="flex items-center gap-2 px-2 py-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300">
            <PlaySquare size={20} className="text-yellow-600" />
            <span className="text-sm font-medium hidden sm:inline">Event</span>
          </button>
          <button className="flex items-center gap-2 px-2 py-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300">
            <Calendar size={20} className="text-orange-600" />
            <span className="text-sm font-medium hidden sm:inline">Write article</span>
          </button>
        </div>
      </div>

      {isModalOpen && <PostModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default PostComposer;
