import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store";
import { logout } from "../../store/slices/authSlice";
import { auth } from "../../lib/firebase";
import { signOut } from "firebase/auth";
import { ROUTES } from "../../constants/routes";
import Swal from "sweetalert2";
import { cn } from "../../utils/cn";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  GraduationCap,
  BarChart3,
  MessageSquare,
  Settings,
  User,
  Menu,
  Users as UsersIcon,
} from "lucide-react";
import { ThemeToggle } from "../atoms/ThemeToggle";
import { LanguageToggle } from "../atoms/LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../organisms/Sidebar/Sidebar";
import { useTheme } from "../../providers/ThemeContext";
import { THEME_CONFIGS } from "../../constants/themeRegistry";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const config =
    THEME_CONFIGS[theme as keyof typeof THEME_CONFIGS] || THEME_CONFIGS.default;
  const isKids = theme === "kids";
  const isCoders = theme === "programmers";
  const isAzhari = theme === "azhari";
  const isUni = theme === "uni";

  const isAr = i18n.language === "ar";
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: isAr ? "هل أنت متأكد؟" : "Are you sure?",
      text: isAr
        ? "سوف يتم تسجيل خروجك من النظام"
        : "You will be logged out of the system",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: isAr ? "نعم، اخرج" : "Yes, logout",
      cancelButtonText: isAr ? "إلغاء" : "Cancel",
    });

    if (result.isConfirmed) {
      try {
        await signOut(auth);
        dispatch(logout());
        navigate(ROUTES.HOME);
      } catch (error) {
        console.error("Logout Error:", error);
      }
    }
  };

  const studentMenuItems = [
    {
      title: t("dashboard.sidebar.dashboard"),
      icon: LayoutDashboard,
      path: ROUTES.DASHBOARD,
    },
    {
      title: t("dashboard.sidebar.courses"),
      icon: BookOpen,
      path: ROUTES.DASHBOARD_COURSES,
    },
    {
      title: t("dashboard.sidebar.assignments"),
      icon: FileText,
      path: ROUTES.DASHBOARD_ASSIGNMENTS,
    },
    {
      title: t("dashboard.sidebar.exams"),
      icon: GraduationCap,
      path: ROUTES.DASHBOARD_EXAMS,
    },
    {
      title: t("dashboard.sidebar.reports"),
      icon: BarChart3,
      path: ROUTES.DASHBOARD_REPORTS,
    },
    {
      title: t("dashboard.sidebar.messages"),
      icon: MessageSquare,
      path: ROUTES.DASHBOARD_MESSAGES,
    },
  ];

  const parentMenuItems = [
    {
      title: t("dashboard.sidebar.dashboard"),
      icon: LayoutDashboard,
      path: ROUTES.DASHBOARD,
    },
    {
      title: t("dashboard.children_progress"),
      icon: UsersIcon,
      path: ROUTES.DASHBOARD, // Or a dedicated children page
    },
    {
      title: t("dashboard.sidebar.reports"),
      icon: BarChart3,
      path: ROUTES.DASHBOARD_REPORTS,
    },

    {
      title: t("dashboard.sidebar.messages"),
      icon: MessageSquare,
      path: ROUTES.DASHBOARD_MESSAGES,
    },
  ];

  const menuItems =
    user?.role === "parent" ? parentMenuItems : studentMenuItems;

  const bottomMenuItems = [
    {
      title: t("dashboard.sidebar.profile"),
      icon: User,
      path: ROUTES.DASHBOARD_PROFILE,
    },
    {
      title: t("dashboard.sidebar.settings"),
      icon: Settings,
      path: ROUTES.DASHBOARD_SETTINGS,
    },
  ];
  return (
    <div
      className={cn(
        "min-h-screen transition-colors duration-500",
        isKids
          ? "bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-secondary/5 via-background to-background"
          : "bg-background",
        isCoders && "bg-black text-green-500 font-mono",
        isAzhari && "bg-primary/5",
        isUni && "bg-primary/10",
        isAr ? "font-vazirmatn" : "font-sans"
      )}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="flex h-screen overflow-hidden">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block h-full z-30">
          <Sidebar
            isOpen={isSidebarOpen}
            setIsOpen={setIsSidebarOpen}
            onLogout={handleLogout}
            menuItems={menuItems}
            bottomMenuItems={bottomMenuItems}
            user={user}
            isAr={isAr}
            location={location}
            t={t}
          />
        </aside>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 lg:hidden"
            >
              <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.aside
                initial={{ x: isAr ? 300 : -300 }}
                animate={{ x: 0 }}
                exit={{ x: isAr ? 300 : -300 }}
                className={cn(
                  "absolute top-0 bottom-0 w-72 h-full z-50",
                  isAr ? "right-0" : "left-0"
                )}
              >
                <Sidebar
                  isOpen={true}
                  // eslint-disable-next-line @typescript-eslint/no-empty-function
                  setIsOpen={() => {}}
                  onLogout={handleLogout}
                  menuItems={menuItems}
                  bottomMenuItems={bottomMenuItems}
                  user={user}
                  isAr={isAr}
                  location={location}
                  t={t}
                  isMobile={true}
                  onMobileClose={() => setIsMobileMenuOpen(false)}
                />
              </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
          {/* Header */}
          <header
            className={cn(
              "sticky top-0 z-20 glass border-b border-border/40 transition-all duration-500",
              config.navHeight,
              isKids && "border-b-4 border-secondary/20",
              isCoders && "bg-black border-b-2 border-green-500",
              isAzhari && "bg-primary/5 border-b-2 border-primary/20",
              isUni && "bg-primary/10 border-b-2 border-primary/30"
            )}
          >
            <div className="h-full px-4 sm:px-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className={cn(
                    "lg:hidden p-2 hover:bg-secondary/80 text-muted-foreground transition-colors",
                    config.buttonRadius
                  )}
                >
                  <Menu size={24} />
                </button>
                <h1
                  className={cn(
                    "text-xl font-black tracking-tight text-foreground truncate",
                    isKids && "text-2xl text-primary"
                  )}
                >
                  {location.pathname === ROUTES.DASHBOARD
                    ? t("dashboard.sidebar.dashboard")
                    : menuItems.find((item) =>
                        location.pathname.startsWith(item.path)
                      )?.title || t("dashboard.sidebar.dashboard")}
                </h1>
              </div>

              <div className="flex items-center gap-2 sm:gap-4">
                <div className="hidden sm:flex items-center gap-2">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>

                <div className="flex items-center gap-3 pl-4 border-l border-border/40">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-black text-foreground">
                      {user?.name || "User"}
                    </p>
                    <p className="text-xs text-muted-foreground font-bold">
                      {user?.role === "parent"
                        ? t("auth.parent")
                        : t("auth.student")}
                    </p>
                  </div>
                  <div
                    className={cn(
                      "w-10 h-10 bg-primary/10 flex items-center justify-center text-primary font-black shadow-sm",
                      config.borderRadius
                    )}
                  >
                    {user?.name?.charAt(0) || <User size={20} />}
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth">
            <div className={cn("mx-auto space-y-8", config.containerMaxWidth)}>
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
