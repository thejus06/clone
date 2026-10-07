import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { cn } from '../utils/utils';
import { currentUser } from '../data/mockData';

const HomeIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className}><path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path></svg>;
const NetworkIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className}><path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path></svg>;
const JobsIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className}><path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 15h2a2 2 0 012 2h6a2 2 0 012-2h2z"></path></svg>;
const MessagingIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className}><path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0024 11a7 7 0 00-8-7z"></path></svg>;
const NotificationsIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className}><path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 15h14z"></path></svg>;
const SearchIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className={className}><path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path></svg>;

interface NavbarProps {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { icon: HomeIcon, label: 'Home', path: '/' },
    { icon: NetworkIcon, label: 'My Network', path: '/network' },
    { icon: JobsIcon, label: 'Jobs', path: '/jobs' },
    { icon: MessagingIcon, label: 'Messaging', path: '/messaging' },
    { icon: NotificationsIcon, label: 'Notifications', path: '/notifications' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-[56px] bg-white dark:bg-[#1d2226] border-b border-gray-200 dark:border-gray-800 z-50 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-4 lg:px-8 h-full flex items-center justify-between">
          
          {/* Left Section */}
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <NavLink to="/" className="w-[34px] h-[34px] shrink-0 bg-[#0a66c2] rounded flex items-center justify-center font-bold text-[20px] text-white cursor-pointer transition-colors" aria-label="Home">
              in
            </NavLink>
            <div className="relative hidden md:block w-[280px] group focus-within:w-[380px] transition-all duration-200 ml-1">
              <div className="absolute inset-y-0 left-[14px] flex items-center pointer-events-none">
                <SearchIcon className="text-gray-500 dark:text-gray-400 group-focus-within:text-gray-900 dark:group-focus-within:text-white transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full h-[34px] pl-10 pr-4 bg-[#edf3f8] dark:bg-[#38434f] text-sm text-gray-900 dark:text-gray-100 rounded-full transition-colors outline-none border-2 border-transparent focus:border-gray-900 dark:focus:border-white focus:bg-white dark:focus:bg-[#1d2226] placeholder-gray-600 dark:placeholder-gray-400 font-normal"
              />
            </div>
            <button className="md:hidden p-2 text-gray-600 dark:text-gray-300 ml-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Search">
              <SearchIcon />
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
                      <item.icon className="mb-0.5" />
                      <span className="text-[12px] font-medium hidden md:block">{item.label}</span>
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
