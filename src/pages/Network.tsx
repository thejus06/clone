import React from 'react';

const Network: React.FC = () => {
  const connections = [
    { name: 'Elena Rodriguez', headline: 'UX Designer', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026021d' },
    { name: 'David Smith', headline: 'Product Manager', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026022d' },
    { name: 'Maria Garcia', headline: 'Software Engineer', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026023d' },
    { name: 'James Wilson', headline: 'Data Scientist', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026025d' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
      {/* Sidebar */}
      <div className="hidden md:block md:col-span-1">
        <div className="bg-white dark:bg-[#1d2226] rounded-lg border border-gray-200 dark:border-gray-800 p-4">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Manage my network</h3>
          <ul className="flex flex-col gap-4 text-gray-600 dark:text-gray-300">
            <li className="flex justify-between items-center cursor-pointer hover:text-brand-600">
              <span>Connections</span>
              <span>500</span>
            </li>
            <li className="flex justify-between items-center cursor-pointer hover:text-brand-600">
              <span>Following & followers</span>
              <span>124</span>
            </li>
            <li className="flex justify-between items-center cursor-pointer hover:text-brand-600">
              <span>Groups</span>
              <span>5</span>
            </li>
            <li className="flex justify-between items-center cursor-pointer hover:text-brand-600">
              <span>Events</span>
              <span>2</span>
            </li>
            <li className="flex justify-between items-center cursor-pointer hover:text-brand-600">
              <span>Pages</span>
              <span>12</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-1 md:col-span-3 flex flex-col gap-4">
        {/* Invitations */}
        <div className="bg-white dark:bg-[#1d2226] rounded-lg border border-gray-200 dark:border-gray-800 p-4 flex justify-between items-center">
          <h2 className="font-semibold text-gray-900 dark:text-white">Invitations</h2>
          <button className="text-gray-500 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-1 rounded">
            Manage
          </button>
        </div>

        {/* Suggestions */}
        <div className="bg-white dark:bg-[#1d2226] rounded-lg border border-gray-200 dark:border-gray-800 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-gray-900 dark:text-white">People you may know</h2>
            <button className="text-gray-500 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-1 rounded">
              See all
            </button>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {connections.map((person, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden flex flex-col relative">
                <button className="absolute top-2 right-2 text-gray-500 bg-black/30 rounded-full p-1 hover:bg-black/50 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                <div className="h-16 bg-gray-300 dark:bg-gray-700 w-full relative">
                  <img src={person.avatar} className="w-16 h-16 rounded-full border-2 border-white dark:border-[#1d2226] absolute -bottom-8 left-1/2 transform -translate-x-1/2 object-cover" alt={person.name} />
                </div>
                <div className="pt-10 pb-4 px-3 flex-1 flex flex-col text-center">
                  <h4 className="font-semibold text-gray-900 dark:text-white hover:underline cursor-pointer">{person.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 h-8">{person.headline}</p>
                  <p className="text-[11px] text-gray-400 mt-2 flex items-center justify-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    2 mutual connections
                  </p>
                </div>
                <div className="px-3 pb-3">
                  <button className="w-full border border-brand-600 text-brand-600 font-semibold rounded-full py-1 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors flex items-center justify-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5c-2.2 0-4 1.8-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                    Connect
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

export default Network;
