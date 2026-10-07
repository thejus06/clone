import React, { useState } from 'react';
import { X, Image, PlaySquare, FileText, Briefcase, Smile, MoreHorizontal } from 'lucide-react';
import { currentUser } from '../data/mockData';
import { cn } from '../utils/utils';

interface PostModalProps {
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ onClose }) => {
  const [content, setContent] = useState('');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-[#1d2226] w-full max-w-[744px] rounded-lg shadow-xl m-4 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <img src={currentUser.avatar} alt="Me" className="w-12 h-12 rounded-full" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{currentUser.name}</h3>
              <button className="flex items-center gap-1 border border-gray-500 rounded-full px-2 py-0.5 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                Anyone
              </button>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500">
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 flex-1 overflow-y-auto">
          <textarea
            className="w-full h-32 sm:h-48 resize-none outline-none text-lg text-gray-900 dark:text-white bg-transparent placeholder-gray-500"
            placeholder="What do you want to talk about?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            autoFocus
          ></textarea>
          
          <button className="text-brand-600 font-semibold hover:bg-brand-50 dark:hover:bg-brand-900/20 px-2 py-1 rounded">
            Add hashtag
          </button>
        </div>

        {/* Footer */}
        <div className="p-4 flex flex-col gap-3">
          <div className="flex gap-2 text-gray-500 dark:text-gray-400">
            <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><Image size={20} /></button>
            <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><PlaySquare size={20} /></button>
            <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><FileText size={20} /></button>
            <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><Briefcase size={20} /></button>
            <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><Smile size={20} /></button>
            <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><MoreHorizontal size={20} /></button>
          </div>
          <div className="flex justify-end gap-2 border-t border-gray-200 dark:border-gray-800 pt-3">
            <button 
              className={cn(
                "px-4 py-1.5 rounded-full font-semibold transition-colors",
                content.trim().length > 0 
                  ? "bg-brand-600 text-white hover:bg-brand-700 cursor-pointer" 
                  : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed"
              )}
              disabled={content.trim().length === 0}
              onClick={() => {
                if(content.trim().length > 0) onClose();
              }}
            >
              Post
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PostModal;
