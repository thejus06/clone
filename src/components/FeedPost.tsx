import React, { useState, useEffect, useRef } from 'react';
import { MoreHorizontal, Smile, Trash2, ThumbsUp, MessageSquare, Repeat2, Send } from 'lucide-react';
import { cn } from '../utils/utils';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { currentUser } from '../data/mockData';

interface PostProps {
  post: {
    id: string;
    author: {
      name: string;
      headline: string;
      avatar: string;
    };
    timestamp: string;
    content: string;
    image?: string;
    likes: number;
    comments: number;
    reposts: number;
  };
  onDelete?: (id: string) => void;
}

const FeedPost: React.FC<PostProps> = ({ post, onDelete }) => {
  const [likedPosts, setLikedPosts] = useLocalStorage<Record<string, boolean>>('likedPosts', {});
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const liked = !!likedPosts[post.id];
  const likesCount = post.likes + (liked ? 1 : 0);

  const handleLike = () => {
    setLikedPosts(prev => ({
      ...prev,
      [post.id]: !prev[post.id]
    }));
  };

  return (
    <div className="bg-white dark:bg-[#1d2226] sm:rounded-lg border-y sm:border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm mb-2 sm:mb-0">
      
      {/* Header */}
      <div className="p-3 sm:p-4 flex items-start gap-3">
        <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full object-cover cursor-pointer hover:opacity-90 transition-opacity" />
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <div className="truncate">
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm hover:text-brand-600 hover:underline cursor-pointer flex items-center gap-1 truncate">
                {post.author.name}
                <span className="text-gray-500 font-normal"> • 1st</span>
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{post.author.headline}</p>
              <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-0.5">
                {post.timestamp} • 
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
            </div>
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setShowDropdown(!showDropdown)} 
                className="text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full transition-colors ml-2" 
                aria-label="More options"
              >
                <MoreHorizontal size={20} />
              </button>
              
              {showDropdown && (
                <div className="absolute right-0 mt-1 w-48 bg-white dark:bg-[#1d2226] border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-10 py-1">
                  <button 
                    onClick={() => {
                      if (onDelete) onDelete(post.id);
                      setShowDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2 font-medium"
                  >
                    <Trash2 size={16} /> Delete Post
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-3 sm:px-4 pb-2">
        <p className="text-sm text-gray-900 dark:text-gray-100 whitespace-pre-wrap break-words leading-relaxed">{post.content}</p>
      </div>

      {post.image && (
        <div className="w-full mt-2 bg-gray-100 dark:bg-black">
          <img src={post.image} alt="Post content" className="w-full h-auto object-contain max-h-[500px]" loading="lazy" />
        </div>
      )}

      {/* Stats */}
      <div className="px-3 sm:px-4 py-2 flex justify-between items-center border-b border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-1 cursor-pointer hover:text-brand-600 hover:underline">
          <div className="bg-brand-500 rounded-full p-[3px]">
            <ThumbsUp size={10} className="text-white fill-current" />
          </div>
          <span className="ml-1">{likesCount}</span>
        </div>
        <div className="flex gap-3">
          <span className="hover:text-brand-600 hover:underline cursor-pointer">{post.comments} comments</span>
          <span className="hover:text-brand-600 hover:underline cursor-pointer">{post.reposts} reposts</span>
        </div>
      </div>

      {/* Actions */}
      <div className="px-1 sm:px-2 py-1 flex justify-between items-center gap-1 sm:gap-2">
        <button 
          onClick={handleLike}
          className={cn(
            "flex-1 flex items-center justify-center gap-1.5 py-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-semibold text-sm",
            liked ? "text-[#0a66c2]" : "text-gray-500 dark:text-gray-400"
          )}
        >
          <ThumbsUp size={24} className={cn(liked && "fill-current transition-transform scale-110")} />
          <span className="hidden sm:inline">Like</span>
        </button>
        <button 
          onClick={() => setShowComments(!showComments)}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400 font-semibold text-sm"
        >
          <MessageSquare size={24} />
          <span className="hidden sm:inline">Comment</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400 font-semibold text-sm">
          <Repeat2 size={24} />
          <span className="hidden sm:inline">Repost</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400 font-semibold text-sm">
          <Send size={24} />
          <span className="hidden sm:inline">Send</span>
        </button>
      </div>

      {/* Comments section */}
      {showComments && (
        <div className="px-3 sm:px-4 py-3 bg-gray-50 dark:bg-[#1d2226] border-t border-gray-200 dark:border-gray-800 flex gap-3">
           <img src={currentUser.avatar} className="w-10 h-10 rounded-full object-cover" alt="Me" />
           <div className="flex-1 relative flex items-center bg-white dark:bg-[#38434f] border border-gray-300 dark:border-gray-600 rounded-full focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-brand-500 transition-all">
             <input 
               type="text" 
               placeholder="Add a comment..." 
               className="w-full bg-transparent py-2 pl-4 pr-10 outline-none dark:text-white text-sm"
               value={commentText}
               onChange={(e) => setCommentText(e.target.value)}
             />
             <button className="absolute right-3 text-gray-400 hover:text-brand-500 transition-colors">
               <Smile size={20} />
             </button>
           </div>
        </div>
      )}

    </div>
  );
};

export default FeedPost;
