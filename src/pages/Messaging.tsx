import React from 'react';
import { MoreHorizontal, Paperclip, Image as ImageIcon, Smile, Send } from 'lucide-react';
import { cn } from '../utils/utils';
import EmptyState from '../components/EmptyState';

const Messaging: React.FC = () => {
  const conversations = [
    { id: 1, name: 'Sarah Chen', message: 'That sounds great, let\'s talk tomorrow!', time: '10:30 AM', active: true, avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d', unread: true },
    { id: 2, name: 'Michael Davis', message: 'Did you see the new PR?', time: 'Yesterday', active: false, avatar: 'https://i.pravatar.cc/150?u=a04258a2462d826712d', unread: false },
    { id: 3, name: 'Recruiter Jane', message: 'Are you open to new opportunities?', time: 'Oct 5', active: false, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026021d', unread: false },
  ];

  const [activeChat, setActiveChat] = React.useState(conversations[0]);
  const [inputText, setInputText] = React.useState('');

  return (
    <div className="bg-white dark:bg-[#1d2226] sm:rounded-lg border-y sm:border border-gray-200 dark:border-gray-800 overflow-hidden h-[calc(100vh-120px)] sm:h-[calc(100vh-100px)] mt-0 sm:mt-4 flex shadow-sm">
      
      {/* Left - Conversation List */}
      <aside className="w-1/3 md:w-[320px] border-r border-gray-200 dark:border-gray-800 flex flex-col shrink-0">
        <header className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-white dark:bg-[#1d2226]">
          <h2 className="font-semibold text-gray-900 dark:text-white">Messaging</h2>
          <button className="text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 p-1.5 rounded-full transition-colors" aria-label="Messaging options">
            <MoreHorizontal size={20} />
          </button>
        </header>
        
        <div className="p-2 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1d2226]">
          <input 
            type="text" 
            placeholder="Search messages" 
            className="w-full bg-[#eef3f8] dark:bg-[#38434f] text-sm text-gray-900 dark:text-gray-100 rounded px-3 py-1.5 outline-none border border-transparent focus:border-brand-500 transition-colors placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>

        <div className="flex-1 overflow-y-auto bg-white dark:bg-[#1d2226]">
          {conversations.map(conv => (
            <div 
              key={conv.id} 
              onClick={() => setActiveChat(conv)}
              className={cn(
                "flex items-start gap-3 p-3 cursor-pointer transition-colors border-l-4",
                conv.id === activeChat.id 
                  ? "bg-brand-50 dark:bg-brand-900/20 border-brand-600" 
                  : "border-transparent hover:bg-gray-50 dark:hover:bg-gray-800"
              )}
            >
              <img src={conv.avatar} className="w-12 h-12 rounded-full object-cover shrink-0" alt={conv.name} />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h4 className={cn("text-sm truncate", conv.unread ? "font-bold text-gray-900 dark:text-white" : "font-semibold text-gray-800 dark:text-gray-200")}>{conv.name}</h4>
                  <span className={cn("text-xs", conv.unread ? "font-bold text-brand-600 dark:text-brand-400" : "text-gray-500")}>{conv.time}</span>
                </div>
                <p className={cn("text-sm truncate mt-0.5", conv.unread ? "font-semibold text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400")}>{conv.message}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Right - Chat Window */}
      {activeChat ? (
        <section className="flex-1 flex flex-col min-w-0 bg-white dark:bg-[#1d2226]">
          <header className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-white dark:bg-[#1d2226]">
            <div className="flex items-center gap-3">
              <h3 className="font-semibold text-gray-900 dark:text-white hover:underline cursor-pointer">{activeChat.name}</h3>
            </div>
            <div className="flex gap-2 text-gray-500">
              <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"><MoreHorizontal size={20} /></button>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-4 bg-[#f3f2ef] dark:bg-black flex flex-col gap-4">
            {/* Mock messages */}
            <div className="flex justify-center">
              <span className="text-[11px] font-bold text-gray-500 bg-white dark:bg-gray-800 px-2 py-0.5 rounded shadow-sm">TODAY</span>
            </div>
            
            <div className="flex items-start gap-3 max-w-[85%]">
              <img src={activeChat.avatar} className="w-10 h-10 rounded-full mt-1 shrink-0" alt={activeChat.name} />
              <div>
                <div className="flex items-baseline gap-2">
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100">{activeChat.name}</h4>
                  <span className="text-xs text-gray-500">10:28 AM</span>
                </div>
                <div className="bg-white dark:bg-[#1d2226] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm mt-1 inline-block break-words">
                  Hey, are you free to chat about the new project?
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 flex-row-reverse max-w-[85%] self-end">
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-10 h-10 rounded-full mt-1 shrink-0" alt="Me" />
              <div className="flex flex-col items-end">
                <div className="flex items-baseline gap-2 flex-row-reverse">
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100">You</h4>
                  <span className="text-xs text-gray-500">10:30 AM</span>
                </div>
                <div className="bg-brand-600 text-white p-3 rounded-lg rounded-tr-none shadow-sm text-sm mt-1 inline-block break-words">
                  {activeChat.message}
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 sm:p-4 bg-white dark:bg-[#1d2226] border-t border-gray-200 dark:border-gray-800">
            <div className="bg-[#f3f2ef] dark:bg-[#38434f] rounded-lg border border-gray-300 dark:border-gray-600 p-2 flex flex-col transition-colors focus-within:border-gray-500">
              <textarea 
                className="w-full bg-transparent resize-none outline-none text-sm p-2 text-gray-900 dark:text-white placeholder-gray-500 h-16 sm:h-20"
                placeholder="Write a message..."
                value={inputText}
                onChange={e => setInputText(e.target.value)}
              ></textarea>
              <div className="flex justify-between items-center pt-2 border-t border-gray-300 dark:border-gray-700">
                <div className="flex gap-1 text-gray-500 dark:text-gray-400">
                  <button className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"><ImageIcon size={18} /></button>
                  <button className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"><Paperclip size={18} /></button>
                  <button className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"><Smile size={18} /></button>
                </div>
                <button 
                  className={cn(
                    "px-4 py-1 rounded-full font-semibold text-sm transition-colors",
                    inputText.trim().length > 0 
                      ? "bg-brand-600 text-white hover:bg-brand-700" 
                      : "bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                  )}
                  disabled={inputText.trim().length === 0}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="flex-1 bg-[#f3f2ef] dark:bg-black flex items-center justify-center">
          <EmptyState icon={MessageSquare} title="No message selected" description="Select a conversation on the left to start messaging." />
        </div>
      )}
    </div>
  );
};

export default Messaging;
