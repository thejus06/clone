import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

interface MainLayoutProps {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

const MainLayout: React.FC<MainLayoutProps> = ({ toggleTheme, theme }) => {
  return (
    <div className="min-h-screen bg-[#f3f2ef] dark:bg-black text-gray-900 dark:text-gray-100 font-sans pt-[56px] pb-[56px] sm:pb-0 transition-colors">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main className="max-w-6xl mx-auto px-0 sm:px-4 lg:px-8 py-5">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
