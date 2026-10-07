import React, { useState } from 'react';
import { X, Image, PlaySquare, FileText, Briefcase, Smile, MoreHorizontal } from 'lucide-react';
import { currentUser } from '../data/mockData';
import { cn } from '../utils/utils';

interface PostModalProps {
  onClose: () => void;
  onPost: (content: string) => void;
}

const PostModal: React.FC<PostModalProps> = ({ onClose, onPost }) => {
  const [content, setContent] = useState('');

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 sm:p-0">
      <div 
        className="bg-white dark:bg-[#1d2226] w-full max-w-[744px] rounded-lg shadow-xl flex flex-col max-h-[90vh] sm:max-h-[80vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <img src={currentUser.avatar} alt="Me" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h3 id="modal-title" className="font-semibold text-gray-900 dark:text-white">{currentUser.name}</h3>
              <button className="flex items-center gap-1 border border-gray-500 rounded-full px-3 py-0.5 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 mt-1 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                Anyone
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 transition-colors" aria-label="Close">
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 flex-1 overflow-y-auto">
          <textarea
            className="w-full h-40 sm:h-64 resize-none outline-none text-lg text-gray-900 dark:text-white bg-transparent placeholder-gray-500"
            placeholder="What do you want to talk about?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            autoFocus
          ></textarea>
          
          <button className="text-brand-600 font-semibold hover:bg-brand-50 dark:hover:bg-brand-900/20 px-2 py-1 rounded transition-colors text-sm">
            Add hashtag
          </button>
        </div>

        {/* Footer */}
        <div className="p-4 flex flex-col gap-3">
          <div className="flex gap-2 text-gray-500 dark:text-gray-400 flex-wrap">
            <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"><Image size={24} /></button>
            <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"><PlaySquare size={24} /></button>
            <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hidden sm:block"><FileText size={24} /></button>
            <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hidden sm:block"><Briefcase size={24} /></button>
            <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hidden sm:block"><Smile size={24} /></button>
            <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"><MoreHorizontal size={24} /></button>
          </div>
          <div className="flex justify-end gap-2 border-t border-gray-200 dark:border-gray-800 pt-3">
            <button 
              className={cn(
                "px-5 py-1.5 rounded-full font-semibold transition-colors shadow-sm",
                content.trim().length > 0 
                  ? "bg-brand-600 text-white hover:bg-brand-700 cursor-pointer" 
                  : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed"
              )}
              disabled={content.trim().length === 0}
              onClick={() => {
                if(content.trim().length > 0) onPost(content);
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
