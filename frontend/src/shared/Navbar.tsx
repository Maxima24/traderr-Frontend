"use client"

import React from 'react';
import { Search, Bell, Settings, Menu } from 'lucide-react';
import Link from 'next/link';
import { SidebarTrigger, useSidebar } from '@/shared/ui/Sidebar';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const [searchValue, setSearchValue] = React.useState("");
  const { isMobile } = useSidebar();

  return (
    <nav className={`fixed top-0 left-0 right-0 h-16 bg-[#1a1d29] border-b border-gray-800 z-50 ${className}`}>
      <div className="h-full px-4 flex items-center justify-between">
        {/* Mobile Menu + Logo */}
        <div className="flex items-center gap-3">
          {/* Mobile Sidebar Trigger */}
          {isMobile && (
            <SidebarTrigger className="p-2 hover:bg-[#252836] rounded-lg transition-colors text-gray-400 lg:hidden">
              <Menu className="h-5 w-5" />
            </SidebarTrigger>
          )}
          
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-white font-semibold text-lg hidden sm:block">Traderr</span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full bg-[#252836] text-gray-300 placeholder-gray-500 pl-10 pr-4 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm border border-transparent hover:border-gray-700"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button 
            type='button' 
            title='Notifications' 
            className="relative p-2 hover:bg-[#252836] rounded-lg transition-colors"
          >
            <Bell className="h-5 w-5 text-gray-400" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full flex items-center justify-center">
              <span className="h-1.5 w-1.5 bg-white rounded-full"></span>
            </span>
          </button>

          {/* Settings */}
          <button 
            type='button' 
            title='Settings' 
            className="p-2 hover:bg-[#252836] rounded-lg transition-colors"
          >
            <Settings className="h-5 w-5 text-gray-400" />
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-3 border-l border-gray-700">
            <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">D</span>
            </div>
            <div className="hidden md:block">
              <p className="text-white text-sm font-medium">Daniel</p>
              <p className="text-gray-400 text-xs">Investor</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;