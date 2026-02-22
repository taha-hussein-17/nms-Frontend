import { useTranslation } from "react-i18next";
import {
  useLocation,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { MainLayout } from "../../components/templates/MainLayout";
import { StudentDashboard } from "../../features/dashboard/components/StudentDashboard";
import { ParentDashboard } from "../../features/dashboard/components/ParentDashboard";
import { StudentCourses } from "../../features/dashboard/components/StudentCourses";
import { StudentExams } from "../../features/dashboard/components/StudentExams";
import { ParentExams } from "../../features/dashboard/components/ParentExams";
import { StudentCalendar } from "../../features/dashboard/components/StudentCalendar";
import { ParentCalendar } from "../../features/dashboard/components/ParentCalendar";
import { StudentReports } from "../../features/dashboard/components/StudentReports";
import { ParentMessages } from "../../features/dashboard/components/ParentMessages";
import { ParentReports } from "../../features/dashboard/components/ParentReports";
// import { PaymentStatus } from "../../pages/PaymentStatus";
import { StudentSettings } from "../../features/dashboard/components/StudentSettings";
import { StudentProfile } from "../../features/dashboard/components/StudentProfile";
import { useAppSelector } from "../../store";
import Sidebar from "../../components/organisms/Sidebar/Sidebar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { ROUTES } from "../../constants/routes";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  GraduationCap,
  Calendar as CalendarIcon,
  BarChart3,
  MessageSquare,
  Bell,
  Users as UsersIcon,
  DollarSign,
  User,
  Settings,
  ShoppingCart,
  Headphones,
  Award,
} from "lucide-react";
import DashboardHeader from "../../components/organisms/DashboardHeader";
import { StudentMessages } from "../../features/dashboard/components/StudentMessages";
import { StudentCertificates } from "../../features/dashboard/components/StudentCertificates";
import { StudentAssignments } from "../../features/dashboard/components/StudentAssignments";
import { CoursesContent } from "../Courses";
import { CartContent } from "../Cart";
import { InstructorsContent } from "../Instructors";
import { ContactContent } from "../Contact";
import ParentPayments from "../../features/dashboard/components/ParentPayments";
import NotificationsPage from "../../features/dashboard/components/NotificationsPage";

const Dashboard = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isAr = i18n.language === "ar";
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!user) return <Navigate to="/" />;

  const isStudentOrParent = user.role === "student" || user.role === "parent";

  const renderContent = () => {
    const path = location.pathname.split("/").pop();

    if (user.role === "parent") {
      switch (path) {
        case "dashboard":
          return <ParentDashboard user={user} />;

        case "calendar":
          return <ParentCalendar />;
        case "exams":
          return <ParentExams />;
        case "messages":
          return <ParentMessages />;
        case "reports":
          return <ParentReports />;
        case "payments":
          return <ParentPayments />;
        case "notifications":
          return <NotificationsPage />;
        case "settings":
          return <StudentSettings />; // Assuming parents also use StudentSettings
        case "profile":
          return <StudentProfile />;
        case "support":
          return <ContactContent />; // Assuming parents also use StudentProfile
        default:
          return <ParentDashboard user={user} />;
      }
    } else if (isStudentOrParent) {
      switch (path) {
        case "dashboard":
          return <StudentDashboard user={user} />;
        case "courses":
          return <StudentCourses />;
        case "buy-courses":
          return <CoursesContent withHero={false} />;
        case "cart":
          return <CartContent isDashboard={true} />;
        case "instructors":
          return <InstructorsContent />;
        case "assignments":
          return <StudentAssignments />;
        case "calendar":
          return <StudentCalendar />;
        case "exams":
          return <StudentExams />;
        case "reports":
          return <StudentReports />;
        case "certificates":
          return <StudentCertificates />;
        case "messages":
          return <StudentMessages />;
        case "notifications":
          return <NotificationsPage />;
        case "settings":
          return <StudentSettings />;
        case "profile":
          return <StudentProfile />;
        case "support":
          return <ContactContent />;
        default:
          return <StudentDashboard user={user} />;
      }
    } else {
      // If not a student or parent, redirect to home or show an unauthorized message
      return <Navigate to="/" />;
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate(ROUTES.HOME);
  };

  const studentMenuItems = [
    {
      title: "dashboard.sidebar.dashboard",
      icon: LayoutDashboard,
      path: ROUTES.DASHBOARD,
    },
    {
      title: "dashboard.sidebar.courses",
      icon: BookOpen,
      path: ROUTES.DASHBOARD_COURSES,
      children: [
        {
          title: "dashboard.sidebar.my_courses",
          icon: BookOpen,
          path: ROUTES.DASHBOARD_COURSES,
        },
        {
          title: "dashboard.sidebar.buy_course",
          icon: ShoppingCart,
          path: ROUTES.DASHBOARD_BUY_COURSES,
        },
      ],
    },
    {
      title: "dashboard.sidebar.cart",
      icon: ShoppingCart,
      path: ROUTES.DASHBOARD_CART,
    },
    {
      title: "dashboard.sidebar.instructors",
      icon: UsersIcon,
      path: ROUTES.DASHBOARD_INSTRUCTORS,
    },
    {
      title: "dashboard.sidebar.assignments",
      icon: FileText,
      path: ROUTES.DASHBOARD_ASSIGNMENTS,
    },
    {
      title: "dashboard.sidebar.calendar",
      icon: CalendarIcon,
      path: ROUTES.DASHBOARD_CALENDAR,
    },
    {
      title: "dashboard.sidebar.exams",
      icon: GraduationCap,
      path: ROUTES.DASHBOARD_EXAMS,
    },
    {
      title: "dashboard.sidebar.reports",
      icon: BarChart3,
      path: ROUTES.DASHBOARD_REPORTS,
    },
    {
      title: "dashboard.sidebar.certificates",
      icon: Award,
      path: ROUTES.DASHBOARD_CERTIFICATES,
    },
    {
      title: "dashboard.sidebar.messages",
      icon: MessageSquare,
      path: ROUTES.DASHBOARD_MESSAGES,
    },
    {
      title: "dashboard.sidebar.notifications",
      icon: Bell,
      path: ROUTES.DASHBOARD_NOTIFICATIONS,
    },
  ];

  const parentMenuItems = [
    {
      title: "dashboard.sidebar.dashboard",
      icon: LayoutDashboard,
      path: ROUTES.DASHBOARD,
    },
    {
      title: "dashboard.sidebar.children",
      icon: UsersIcon,
      path: ROUTES.DASHBOARD,
    },
    {
      title: "dashboard.sidebar.calendar",
      icon: CalendarIcon,
      path: ROUTES.DASHBOARD_CALENDAR,
    },
    {
      title: "dashboard.sidebar.exams",
      icon: GraduationCap,
      path: ROUTES.DASHBOARD_EXAMS,
    },
    {
      title: "dashboard.sidebar.reports",
      icon: BarChart3,
      path: ROUTES.DASHBOARD_REPORTS,
    },
    {
      title: "dashboard.sidebar.payments",
      icon: DollarSign,
      path: ROUTES.DASHBOARD_PAYMENTS,
    },
    {
      title: "dashboard.sidebar.messages",
      icon: MessageSquare,
      path: ROUTES.DASHBOARD_MESSAGES,
    },
    {
      title: "dashboard.sidebar.notifications",
      icon: Bell,
      path: ROUTES.DASHBOARD_NOTIFICATIONS,
    },
  ];

  const menuItems =
    user?.role === "parent" ? parentMenuItems : studentMenuItems;

  const bottomMenuItems = [
    {
      title: "dashboard.sidebar.profile",
      icon: User,
      path: ROUTES.DASHBOARD_PROFILE,
    },
    {
      title: "dashboard.sidebar.settings",
      icon: Settings,
      path: ROUTES.DASHBOARD_SETTINGS,
    },
    {
      title: "dashboard.sidebar.support",
      icon: Headphones,
      path: ROUTES.DASHBOARD_SUPPORT,
    },
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-background" dir={isAr ? "rtl" : "ltr"}>
        <div className="flex h-screen overflow-hidden">
          {/* Desktop Sidebar in flow for consistent spacing */}
          <aside
            className={`${isSidebarOpen ? "w-72" : "w-24"} hidden md:block bg-card border-r border-secondary`}
          >
            <Sidebar
              isOpen={isSidebarOpen}
              setIsOpen={setIsSidebarOpen}
              isMobile={false}
              onMobileClose={() => {
                /* empty */
              }}
              onLogout={handleLogout}
              menuItems={menuItems}
              bottomMenuItems={bottomMenuItems}
              user={user}
              isAr={isAr}
              location={location}
              t={t}
            />
          </aside>

          {/* Mobile sliding sidebar */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 md:hidden flex">
              <div
                className="fixed inset-0 bg-black/40"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <div className="relative w-72 bg-card border-r border-secondary">
                <Sidebar
                  isOpen={true}
                  setIsOpen={() => setIsMobileMenuOpen(false)}
                  isMobile={true}
                  onMobileClose={() => setIsMobileMenuOpen(false)}
                  onLogout={handleLogout}
                  menuItems={menuItems}
                  bottomMenuItems={bottomMenuItems}
                  user={user}
                  isAr={isAr}
                  location={location}
                  t={t}
                />
              </div>
            </div>
          )}

          <main className="flex-1 overflow-y-auto  dark:bg-slate-900/10 p-4 md:p-8">
            <div className="max-w-[1400px] mx-auto w-full">
              <DashboardHeader
                title={undefined}
                isAr={isAr}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                user={user}
              />

              <div className="mt-4">
                <Routes>
                  <Route path="*" element={renderContent()} />
                </Routes>
              </div>
            </div>
          </main>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
