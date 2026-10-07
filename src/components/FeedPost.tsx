import React, { useState } from 'react';
import { MoreHorizontal, ThumbsUp, MessageSquare, Repeat2, Send } from 'lucide-react';
import { cn } from '../utils/utils';

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
  }
}

const FeedPost: React.FC<PostProps> = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <div className="bg-white dark:bg-[#1d2226] rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
      
      {/* Header */}
      <div className="p-3 sm:p-4 flex items-start gap-3">
        <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full object-cover cursor-pointer" />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm hover:text-brand-600 hover:underline cursor-pointer flex items-center gap-1">
                {post.author.name}
                <span className="text-gray-500 font-normal"> • 1st</span>
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">{post.author.headline}</p>
              <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-0.5">
                {post.timestamp} • 
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
            </div>
            <button className="text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 p-1 rounded transition-colors">
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-3 sm:px-4 pb-2">
        <p className="text-sm text-gray-900 dark:text-gray-100 whitespace-pre-wrap">{post.content}</p>
      </div>

      {post.image && (
        <div className="w-full mt-2">
          <img src={post.image} alt="Post content" className="w-full h-auto object-cover max-h-[500px]" />
        </div>
      )}

      {/* Stats */}
      <div className="px-3 sm:px-4 py-2 flex justify-between items-center border-b border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-1 cursor-pointer hover:text-brand-600">
          <div className="bg-brand-500 rounded-full p-[2px]">
            <ThumbsUp size={10} className="text-white fill-current" />
          </div>
          {likesCount}
        </div>
        <div className="flex gap-3">
          <span className="hover:text-brand-600 hover:underline cursor-pointer">{post.comments} comments</span>
          <span className="hover:text-brand-600 hover:underline cursor-pointer">{post.reposts} reposts</span>
        </div>
      </div>

      {/* Actions */}
      <div className="px-2 py-1 flex justify-between items-center gap-1">
        <button 
          onClick={handleLike}
          className={cn(
            "flex-1 flex items-center justify-center gap-1.5 py-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium text-sm",
            liked ? "text-brand-600" : "text-gray-500 dark:text-gray-400"
          )}
        >
          <ThumbsUp size={20} className={cn(liked && "fill-current transition-transform scale-110")} />
          <span className="hidden sm:inline">Like</span>
        </button>
        <button 
          onClick={() => setShowComments(!showComments)}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400 font-medium text-sm"
        >
          <MessageSquare size={20} />
          <span className="hidden sm:inline">Comment</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400 font-medium text-sm">
          <Repeat2 size={20} />
          <span className="hidden sm:inline">Repost</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400 font-medium text-sm">
          <Send size={20} />
          <span className="hidden sm:inline">Send</span>
        </button>
      </div>

      {/* Comments section (expandable) */}
      {showComments && (
        <div className="px-3 sm:px-4 py-3 bg-gray-50 dark:bg-[#1d2226] border-t border-gray-200 dark:border-gray-800 flex gap-3">
           <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-10 h-10 rounded-full" alt="Me" />
           <div className="flex-1 relative">
             <input type="text" placeholder="Add a comment..." className="w-full bg-white dark:bg-[#38434f] border border-gray-300 dark:border-gray-600 rounded-full py-2 pl-4 pr-10 outline-none focus:ring-1 focus:ring-brand-500 dark:text-white" />
             <button className="absolute right-3 top-2 text-gray-400 hover:text-brand-500">
               <Smile size={20} />
             </button>
           </div>
        </div>
      )}

    </div>
  );
};

export default FeedPost;
