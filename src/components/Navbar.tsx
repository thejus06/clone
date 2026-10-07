import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Search, Home, Users, Briefcase, MessageSquare, Bell, Moon, Sun, Menu, X } from 'lucide-react';
import { cn } from '../utils/utils';
import { currentUser } from '../data/mockData';

interface NavbarProps {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Users, label: 'My Network', path: '/network' },
    { icon: Briefcase, label: 'Jobs', path: '/jobs' },
    { icon: MessageSquare, label: 'Messaging', path: '/messaging' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-[56px] bg-white dark:bg-[#1d2226] border-b border-gray-200 dark:border-gray-800 z-50 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-4 lg:px-8 h-full flex items-center justify-between">
          
          {/* Left Section */}
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <NavLink to="/" className="w-[34px] h-[34px] shrink-0 bg-brand-600 rounded flex items-center justify-center font-bold text-xl text-white cursor-pointer hover:bg-brand-700 transition-colors" aria-label="Home">
              in
            </NavLink>
            <div className="relative hidden md:block max-w-[280px] w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-500 dark:text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full h-[34px] pl-9 pr-4 bg-[#eef3f8] dark:bg-[#38434f] text-sm text-gray-900 dark:text-gray-100 rounded focus:w-full lg:focus:w-[320px] transition-all outline-none border border-transparent focus:border-brand-500 focus:bg-white dark:focus:bg-[#1d2226] placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <button className="md:hidden p-2 text-gray-600 dark:text-gray-300 ml-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Search">
              <Search size={20} />
            </button>
          </div>

          {/* Center & Right Section (Desktop) */}
          <div className="hidden sm:flex items-center h-full gap-4 lg:gap-8">
            <ul className="flex items-center h-full gap-2 lg:gap-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.label} className="h-full flex items-center">
                    <NavLink 
                      to={item.path} 
                      className={cn(
                        "flex flex-col items-center justify-center min-w-[70px] h-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative",
                        isActive && "text-gray-900 dark:text-white"
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <item.icon size={24} className={cn(isActive ? "fill-current" : "")} />
                      <span className="text-[12px] mt-0.5 font-medium hidden md:block">{item.label}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900 dark:bg-white" />
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            <div className="h-10 w-px bg-gray-200 dark:bg-gray-700 hidden lg:block mx-1"></div>

            <div className="flex items-center gap-3">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <NavLink to="/profile" className="flex flex-col items-center justify-center cursor-pointer min-w-[50px] group">
                <img 
                  src={currentUser.avatar} 
                  alt={currentUser.name} 
                  className="w-6 h-6 rounded-full border border-transparent group-hover:border-brand-600 transition-colors object-cover"
                />
                <span className="text-[12px] text-gray-500 dark:text-gray-400 flex items-center gap-1 font-medium mt-0.5 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  Me <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </span>
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-3">
             <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            <button 
              className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Bottom Mobile Navigation (mimicking native apps) */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 h-[56px] bg-white dark:bg-[#1d2226] border-t border-gray-200 dark:border-gray-800 z-50 flex justify-around items-center px-2 pb-safe transition-colors">
         {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink 
                key={item.label}
                to={item.path} 
                className={cn(
                  "flex flex-col items-center justify-center w-full h-full text-gray-500 dark:text-gray-400 relative",
                  isActive && "text-gray-900 dark:text-white"
                )}
              >
                <item.icon size={22} className={cn(isActive ? "fill-current" : "")} />
                <span className="text-[10px] mt-1 font-medium">{item.label}</span>
                {isActive && <span className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gray-900 dark:bg-white" />}
              </NavLink>
            );
          })}
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 z-40 bg-black/50 mt-[56px]" onClick={() => setMobileMenuOpen(false)}>
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-white dark:bg-[#1d2226] shadow-xl p-4 flex flex-col" onClick={e => e.stopPropagation()}>
             <NavLink to="/profile" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 mb-4 border-b border-gray-200 dark:border-gray-800 pb-4">
                <img src={currentUser.avatar} alt="Profile" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">{currentUser.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5 font-medium">View Profile</p>
                </div>
             </NavLink>
             <NavLink to="/search" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
               <Search size={20} /> Search
             </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
