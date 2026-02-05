import React from "react";

import { Menu, Search } from "lucide-react";
// import { Button } from "../atoms/Button";

interface Props {
  title?: string;
  isAr?: boolean;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (v: boolean) => void;
  setIsMobileMenuOpen: (v: boolean) => void;
  user?: { name?: string } | null;
}

export const DashboardHeader: React.FC<Props> = ({
  title,
  isAr,
  isSidebarOpen,
  setIsSidebarOpen,
  setIsMobileMenuOpen,
  user,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-background/70 backdrop-blur-md border-b border-secondary px-4 md:px-6 py-3 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <button
          className="md:hidden p-2 rounded-lg hover:bg-secondary/80 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <button
          className="hidden md:inline-flex p-2 rounded-lg hover:bg-secondary/80 cursor-pointer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <h1 className="text-lg font-extrabold">
            {title || (isAr ? "لوحة التحكم" : "Dashboard")}
          </h1>
          <p className="text-xs text-muted-foreground">{user?.name}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 bg-secondary/5 rounded-full px-3 py-1">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            placeholder={isAr ? "ابحث" : "Search"}
            className="bg-transparent outline-none text-sm"
          />
        </div>
        {/* container for notification & languge toggle and theme toggle */}
        {/* <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
          <button className="p-2 rounded-full hover:bg-secondary/80">
            <Bell className="w-5 h-5" />
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default DashboardHeader;
