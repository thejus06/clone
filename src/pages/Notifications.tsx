import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const Notifications: React.FC = () => {
  const notifs = [
    { type: 'reaction', text: 'Sarah Chen liked your post: "Just launched our new design system..."', time: '1h', read: false },
    { type: 'connection', text: 'Michael Davis accepted your connection request', time: '3h', read: true },
    { type: 'job', text: '5 new jobs matching "Frontend Engineer" in San Francisco', time: '5h', read: true },
    { type: 'mention', text: 'David Smith mentioned you in a comment', time: '1d', read: true },
    { type: 'trending', text: 'Trending: The future of React server components', time: '2d', read: true },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
      
      {/* Sidebar */}
      <div className="hidden md:block md:col-span-1">
        <div className="bg-white dark:bg-[#1d2226] rounded-lg border border-gray-200 dark:border-gray-800 p-4">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Manage your Notifications</h3>
          <p className="text-sm text-brand-600 font-semibold cursor-pointer hover:underline">View Settings</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-1 md:col-span-3 flex flex-col">
        <div className="bg-white dark:bg-[#1d2226] rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div className="flex gap-2 p-3 border-b border-gray-200 dark:border-gray-800">
            <button className="bg-brand-600 text-white px-3 py-1 rounded-full text-sm font-semibold">All</button>
            <button className="border border-gray-500 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800">Jobs</button>
            <button className="border border-gray-500 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800">My posts</button>
          </div>

          <div className="flex flex-col">
            {notifs.map((n, i) => (
              <div 
                key={i} 
                className={`flex gap-3 p-4 border-b border-gray-200 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer relative ${!n.read ? 'bg-[#eff6ff] dark:bg-brand-900/10' : ''}`}
              >
                {!n.read && (
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-brand-600"></div>
                )}
                
                <img src={`https://i.pravatar.cc/150?u=notif${i}`} className="w-12 h-12 rounded-full ml-2" alt="avatar" />
                
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-sm text-gray-900 dark:text-gray-100"><span className="font-semibold">{n.text.split(' ')[0]} {n.text.split(' ')[1]}</span> {n.text.split(' ').slice(2).join(' ')}</p>
                </div>
                
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs text-gray-500">{n.time}</span>
                  <button className="text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded-full">
                    <MoreHorizontal size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
