"use client"

import { useRef, useEffect } from 'react';
import { SidebarProvider, SidebarInset, useSidebar } from '@/shared/ui/Sidebar';
import Navbar from '@/shared/Navbar';
import AppSidebar from '@/shared/AppSidebar';

function DashboardContent({ children }: { children: React.ReactNode }) {
  const { openMobile, setOpenMobile, isMobile } = useSidebar();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile && openMobile && overlayRef.current) {
        const target = event.target as Element;
        if (!target.closest('[data-sidebar="sidebar"]') && !target.closest('[data-sidebar="trigger"]')) {
          setOpenMobile(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile, openMobile, setOpenMobile]);

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && openMobile && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setOpenMobile(false)}
        />
      )}
      
      {/* Navbar */}
      <Navbar />
      
      {/* Sidebar */}
      <AppSidebar />
      
      {/* Main Content Area */}
      <SidebarInset>
        <main className="pt-16 min-h-screen">
          <div className="p-4 md:p-6">
            {children}
          </div>
        </main>
      </SidebarInset>
    </>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0f1117]">
      <SidebarProvider defaultOpen={true}>
        <DashboardContent>
          {children}
        </DashboardContent>
      </SidebarProvider>
    </div>
  );
}