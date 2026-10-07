import React from 'react';

const Search: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
      {/* Sidebar Filters */}
      <div className="hidden md:block md:col-span-1">
        <div className="bg-white dark:bg-[#1d2226] rounded-lg border border-gray-200 dark:border-gray-800 p-4">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Filters</h3>
          
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Category</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-brand-600" /> People</label>
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-brand-600" /> Jobs</label>
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-brand-600" /> Posts</label>
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-brand-600" /> Companies</label>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-800 my-4" />

          <div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Location</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-brand-600" /> San Francisco Bay Area</label>
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-brand-600" /> New York City</label>
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-brand-600" /> Remote</label>
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="col-span-1 md:col-span-3 flex flex-col gap-4">
        
        {/* Results Header */}
        <div className="flex gap-2 mb-2 overflow-x-auto no-scrollbar pb-2">
          <button className="bg-brand-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap">People</button>
          <button className="border border-gray-500 text-gray-600 dark:text-gray-300 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 whitespace-nowrap">Jobs</button>
          <button className="border border-gray-500 text-gray-600 dark:text-gray-300 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 whitespace-nowrap">Posts</button>
          <button className="border border-gray-500 text-gray-600 dark:text-gray-300 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 whitespace-nowrap">Companies</button>
          <button className="border border-gray-500 text-gray-600 dark:text-gray-300 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 whitespace-nowrap">All filters</button>
        </div>

        <div className="bg-white dark:bg-[#1d2226] rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">People</h2>
          
          <div className="flex flex-col gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex gap-4 p-4 -mx-4 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b border-gray-200 dark:border-gray-800 last:border-0 items-center">
                <img src={`https://i.pravatar.cc/150?u=search${item}`} className="w-16 h-16 rounded-full object-cover" alt="Profile" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white hover:underline cursor-pointer text-lg">Search Result {item}</h3>
                  <p className="text-sm text-gray-900 dark:text-gray-200">Software Engineer at Tech Company</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">San Francisco, CA • 25 mutual connections</p>
                  <p className="text-xs text-gray-500 mt-1 bg-gray-100 dark:bg-gray-800 inline-block px-2 py-0.5 rounded">Talks about #react, #frontend</p>
                </div>
                <div>
                  <button className="border border-brand-600 text-brand-600 font-semibold rounded-full px-4 py-1.5 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors flex items-center justify-center gap-1">
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

export default Search;
