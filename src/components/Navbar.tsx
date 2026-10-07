import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Search, Home, Users, Briefcase, MessageSquare, Bell, Moon, Sun, Menu } from 'lucide-react';
import { cn } from '../utils/utils';
import { currentUser } from '../data/mockData';

interface NavbarProps {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Users, label: 'My Network', path: '/network' },
    { icon: Briefcase, label: 'Jobs', path: '/jobs' },
    { icon: MessageSquare, label: 'Messaging', path: '/messaging' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-[52px] bg-white dark:bg-[#1d2226] border-b border-gray-200 dark:border-gray-800 z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        
        {/* Left Section */}
        <div className="flex items-center gap-2 flex-1">
          <div className="w-[34px] h-[34px] bg-brand-600 rounded text-white flex items-center justify-center font-bold text-xl cursor-pointer">
            in
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-500 dark:text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search" 
              className="w-[280px] h-[34px] pl-9 pr-4 bg-[#eef3f8] dark:bg-[#38434f] text-sm text-gray-900 dark:text-gray-100 rounded focus:w-[320px] transition-all outline-none border-none placeholder-gray-500 dark:placeholder-gray-400 focus:ring-1 focus:ring-brand-500"
            />
          </div>
          <button className="md:hidden p-2 text-gray-600 dark:text-gray-300">
            <Search size={20} />
          </button>
        </div>

        {/* Center & Right Section */}
        <div className="flex items-center h-full gap-1 sm:gap-4 md:gap-8 overflow-x-auto no-scrollbar">
          <ul className="flex items-center h-full gap-2 sm:gap-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.label} className="h-full flex items-center">
                  <NavLink 
                    to={item.path} 
                    className={cn(
                      "flex flex-col items-center justify-center min-w-[50px] sm:min-w-[80px] h-[52px] text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative",
                      isActive && "text-gray-900 dark:text-white"
                    )}
                  >
                    <item.icon size={24} className={cn(isActive ? "fill-current" : "")} />
                    <span className="text-[12px] hidden sm:block mt-0.5 font-medium">{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900 dark:bg-white" />
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className="h-10 w-px bg-gray-200 dark:bg-gray-700 hidden lg:block mx-2"></div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <NavLink to="/profile" className="flex flex-col items-center justify-center cursor-pointer min-w-[50px]">
              <img 
                src={currentUser.avatar} 
                alt="Profile" 
                className="w-6 h-6 rounded-full border border-gray-200 dark:border-gray-700"
              />
              <span className="text-[12px] text-gray-500 dark:text-gray-400 hidden sm:flex items-center gap-1 font-medium mt-0.5">
                Me
              </span>
            </NavLink>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
