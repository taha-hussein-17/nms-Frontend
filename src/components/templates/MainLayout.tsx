import { type ReactNode, useState, memo } from "react";
import { ThemeToggle } from "../atoms/ThemeToggle";
import { LanguageToggle } from "../atoms/LanguageToggle";
import { Notifications } from "../organisms/Notifications";
import { Footer } from "../organisms/Footer";
import { useTranslation } from "react-i18next";
import {
  BookOpen,
  Search,
  Menu,
  X,
  User,
  GraduationCap,
  Layout as LayoutIcon,
  Users,
  Info,
  Phone,
  ShoppingBag,
  Calendar,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ROUTES } from "../../constants/routes";
import { cn } from "../../utils/cn";
import { Button } from "../atoms/Button";
import { useAppSelector } from "../../store";
import { useTheme } from "../../providers/ThemeContext";
import { THEME_CONFIGS } from "../../constants/themeRegistry";

interface MainLayoutProps {
  children: ReactNode;
}

const MemoizedFooter = memo(Footer);

export const MainLayout = memo(({ children }: MainLayoutProps) => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const config =
    THEME_CONFIGS[theme as keyof typeof THEME_CONFIGS] || THEME_CONFIGS.default;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const { items } = useAppSelector((state) => state.cart);
  const shouldReduceMotion = useReducedMotion();

  const isKids = theme === "kids";
  const isCoders = theme === "programmers";
  const isAzhari = theme === "azhari";
  const isUni = theme === "uni";

  const navigation = [
    { name: t("nav.home"), href: ROUTES.HOME, icon: LayoutIcon },
    { name: t("nav.courses"), href: ROUTES.COURSES, icon: BookOpen },
    { name: t("nav.exams"), href: ROUTES.EXAMS, icon: GraduationCap },
    { name: t("nav.calendar"), href: ROUTES.CALENDAR, icon: Calendar },
    { name: t("nav.instructors"), href: ROUTES.INSTRUCTORS, icon: Users },
    { name: t("nav.about"), href: ROUTES.ABOUT, icon: Info },
    { name: t("nav.contact"), href: ROUTES.CONTACT, icon: Phone },
  ];

  const bottomNavItems = [
    { name: t("nav.home"), href: ROUTES.HOME, icon: LayoutIcon },
    { name: t("nav.courses"), href: ROUTES.COURSES, icon: BookOpen },
    { name: t("nav.dashboard"), href: ROUTES.DASHBOARD, icon: User },
    { name: t("nav.cart"), href: ROUTES.CART, icon: ShoppingBag },
  ];

  return (
    <div
      className={cn(
        "min-h-screen bg-background transition-colors duration-300 flex flex-col font-sans",
        i18n.language === "ar" ? "font-vazirmatn" : "font-sans",
        isKids &&
          "bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-secondary/5 via-background to-background"
      )}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      {/* Navigation Bar */}
      <nav
        className={cn(
          "sticky top-0 z-50 w-full glass border-b border-border/40 transition-all duration-500",
          config.navHeight,
          isKids && "border-b-4 border-secondary/20 shadow-lg",
          isCoders && "bg-black border-b-2 border-green-500",
          isAzhari && "bg-primary/5 border-b-2 border-primary/20",
          isUni && "bg-primary/10 border-b-2 border-primary/30"
        )}
      >
        <div
          className={cn(
            "mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center",
            config.containerMaxWidth
          )}
        >
          <div className="flex justify-between w-full items-center gap-4">
            {/* Logo & Desktop Nav */}
            <div className="flex items-center gap-10 h-full">
              <Link to="/" className="flex items-center gap-2.5 group shrink-0">
                <div
                  className={cn(
                    "bg-primary p-1.5 text-primary-foreground shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform",
                    config.borderRadius,
                    isCoders && "bg-green-500 text-black shadow-green-500/50",
                    isAzhari && "bg-primary shadow-primary/20",
                    isUni && "bg-primary shadow-primary/20"
                  )}
                >
                  <GraduationCap className="w-5.5 h-5.5 md:w-6 h-6" />
                </div>
                <span
                  className={cn(
                    "text-lg md:text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-l from-primary to-blue-600",
                    isKids && "text-xl md:text-2xl",
                    isCoders &&
                      "font-mono text-green-500 tracking-normal bg-none",
                    isAzhari && "font-serif tracking-tight"
                  )}
                >
                  Wakp
                  <span
                    className={cn("text-primary", isCoders && "text-green-500")}
                  ></span>
                </span>
              </Link>

              <div className="hidden lg:flex items-center gap-1 h-full">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "p-5 h-10 flex items-center  text-[15px] font-bold transition-all relative group",
                        config.buttonRadius,
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                        isKids && "text-sm px-4 h-11"
                      )}
                    >
                      {item.name}
                      {isActive && !shouldReduceMotion && (
                        <motion.div
                          layoutId="nav-active"
                          className={cn(
                            "absolute inset-y-1.5 inset-x-1 bg-primary/10 -z-10 top-0",
                            config.buttonRadius
                          )}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Search - Hidden for now */}
            <div className="hidden md:flex flex-1 max-w-sm mx-4 invisible">
              <div className="relative w-full group">
                <Search
                  className={cn(
                    "absolute top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors",
                    i18n.language === "ar" ? "right-4" : "left-4"
                  )}
                />
                <input
                  type="text"
                  placeholder={t("common.search")}
                  className={cn(
                    "w-full bg-secondary/50 border-2 border-transparent rounded-2xl py-2 text-sm outline-none transition-all focus:bg-background focus:border-primary focus:shadow-lg focus:shadow-primary/5",
                    i18n.language === "ar" ? "pr-11 pl-4" : "pl-11 pr-4"
                  )}
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 border-r pr-3 dark:border-gray-800 rtl:border-r-0 rtl:border-l rtl:pr-0 rtl:pl-3 h-8">
                <Notifications />
                <Link to={ROUTES.CART} className="relative group">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-xl w-9 h-9"
                  >
                    <ShoppingBag className="w-4.5 h-4.5" />
                    {items.length > 0 && (
                      <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-background animate-in zoom-in">
                        {items.length}
                      </span>
                    )}
                  </Button>
                </Link>
                <ThemeToggle />
              </div>

              <div className="flex items-center gap-2">
                <LanguageToggle />

                <div className="hidden sm:block">
                  {isAuthenticated ? (
                    <Link
                      to={ROUTES.DASHBOARD}
                      className="flex items-center gap-2.5 group px-2 py-1.5 rounded-xl hover:bg-primary/5 transition-all border border-transparent hover:border-primary/10"
                    >
                      <div className="text-right hidden md:block">
                        <p className="text-[13px] font-black text-foreground leading-none">
                          {user?.name}
                        </p>
                        <p className="text-[9px] font-bold text-primary uppercase tracking-widest mt-1 opacity-80">
                          {t(`auth.${user?.role}`)}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black border-2 border-primary/20 overflow-hidden group-hover:border-primary/40 transition-all shadow-sm">
                        {user?.avatar ? (
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          user?.name?.[0] || "U"
                        )}
                      </div>
                    </Link>
                  ) : (
                    <Link to={ROUTES.LOGIN}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-primary text-white hover:bg-primary/90 hover:text-white gap-2 px-5 h-11 rounded-xl text-[14px] font-bold shadow-sm shadow-primary/20 transition-all hover:scale-105 active:scale-95"
                      >
                        <div className="flex items-center gap-2 pt-1">
                          <User className="w-4.5 h-4.5 text-white" />
                          {t("common.login")}
                        </div>
                      </Button>
                    </Link>
                  )}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden rounded-xl w-9 h-9"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, height: "auto" }
              }
              exit={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }
              }
              className="lg:hidden absolute top-16 inset-x-0 bg-card border-b overflow-hidden"
            >
              <div className="px-6 py-8 space-y-3">
                {isAuthenticated && (
                  <div className="flex items-center gap-4 px-4 py-4 mb-6 bg-primary/5 rounded-2xl border border-primary/10">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black border-2 border-primary/20 overflow-hidden">
                      {user?.avatar ? (
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        user?.name?.[0] || "U"
                      )}
                    </div>
                    <div>
                      <p className="text-base font-black text-foreground">
                        {user?.name}
                      </p>
                      <p className="text-xs font-bold text-primary uppercase tracking-widest mt-0.5">
                        {t(`auth.${user?.role}`)}
                      </p>
                    </div>
                  </div>
                )}

                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center gap-4 px-4 py-3.5 text-base font-bold rounded-2xl hover:bg-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    {item.name}
                  </Link>
                ))}

                <div className="pt-6 border-t mt-6 space-y-4">
                  <div className="flex items-center justify-between px-4 py-3 bg-secondary/30 rounded-2xl">
                    <span className="text-sm font-bold text-muted-foreground">
                      {t("common.settings") || "Settings"}
                    </span>
                    <div className="flex items-center gap-3">
                      <Notifications />
                      <LanguageToggle />
                      <ThemeToggle />
                    </div>
                  </div>

                  {!isAuthenticated ? (
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        to={ROUTES.LOGIN}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Button
                          variant="outline"
                          className="w-full rounded-2xl h-12 font-bold"
                        >
                          {t("common.login")}
                        </Button>
                      </Link>
                      <Link
                        to={ROUTES.REGISTER}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Button className="w-full rounded-2xl h-12 font-bold">
                          {t("common.start_learning")}
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <Link
                      to={ROUTES.DASHBOARD}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button className="w-full rounded-2xl h-12 font-bold gap-3">
                        <LayoutIcon className="w-5 h-5" />
                        {t("nav.dashboard")}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-1 w-full">{children}</main>

      {/* Bottom Mobile Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-t border-border/40 px-6 py-3 pb-safe-area-inset-bottom">
        <div className="flex items-center justify-between">
          {bottomNavItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex flex-col items-center gap-1.5 group relative",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                <div
                  className={cn(
                    "p-2 rounded-xl transition-all duration-300",
                    isActive ? "bg-primary/10" : "group-hover:bg-secondary"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-tighter">
                  {item.name}
                </span>
                {item.href === ROUTES.CART && items.length > 0 && (
                  <span className="absolute top-0 right-1/2 translate-x-3 -translate-y-1 bg-primary text-primary-foreground text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-background">
                    {items.length}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      <MemoizedFooter />
    </div>
  );
});

export default MainLayout;
