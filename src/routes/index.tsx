import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "../App";
import { LoadingScreen } from "../components/atoms/LoadingScreen";
import { ROUTES } from "../constants/routes";
import { ProtectedRoute, PublicRoute } from "../components/atoms/AuthRoutes";

// Lazy load page components
// ... (existing lazy imports)
const Home = lazy(() => import("../pages/Home"));
const LoginPage = lazy(() => import("../pages/Login"));
const RegisterPage = lazy(() => import("../pages/Register"));
const ForgotPasswordPage = lazy(() => import("../pages/Login/ForgotPassword"));
const ResetPasswordPage = lazy(() => import("../pages/Login/ResetPassword"));
const VerifyEmailPage = lazy(() => import("../pages/Login/EmailVerification"));
const Courses = lazy(() => import("../pages/Courses"));
const Instructors = lazy(() => import("../pages/Instructors"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Exams = lazy(() => import("../pages/Exams"));
const TakeExam = lazy(() => import("../pages/Exams/TakeExam"));
const Calendar = lazy(() => import("../pages/Calendar"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Terms = lazy(() => import("../pages/Terms"));
const Privacy = lazy(() => import("../pages/Privacy"));
const Services = lazy(() => import("../pages/Services"));
const FAQ = lazy(() => import("../pages/FAQ"));
const BecomeInstructor = lazy(() => import("../pages/BecomeInstructor"));
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/Checkout"));
const OrderSuccess = lazy(() => import("../pages/OrderSuccess"));
const CourseDetails = lazy(() => import("../pages/CourseDetails"));
const Lesson = lazy(() => import("../pages/Lesson"));
const InstructorDetails = lazy(() => import("../pages/InstructorDetails"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Unauthorized = lazy(() => import("../pages/NotFound/Unauthorized"));
const PaymentStatus = lazy(() => import("../pages/PaymentStatus"));

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTES.LOGIN,
        element: (
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTES.REGISTER,
        element: (
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTES.FORGOT_PASSWORD,
        element: (
          <PublicRoute>
            <ForgotPasswordPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTES.RESET_PASSWORD,
        element: (
          <PublicRoute>
            <ResetPasswordPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTES.VERIFY_EMAIL,
        element: <VerifyEmailPage />,
      },
      {
        path: ROUTES.COURSES,
        element: <Courses />,
      },
      {
        path: ROUTES.INSTRUCTORS,
        element: <Instructors />,
      },
      {
        path: ROUTES.ABOUT,
        element: <About />,
      },
      {
        path: ROUTES.CONTACT,
        element: <Contact />,
      },
      {
        path: ROUTES.EXAMS,
        element: <Exams />,
      },
      {
        path: ROUTES.TAKE_EXAM,
        element: (
          <ProtectedRoute allowedRoles={["student"]}>
            <TakeExam />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.CALENDAR,
        element: <Calendar />,
      },
      {
        path: ROUTES.DASHBOARD + "/*",
        element: (
          <ProtectedRoute allowedRoles={["student", "parent"]}>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.TERMS,
        element: <Terms />,
      },
      {
        path: ROUTES.PRIVACY,
        element: <Privacy />,
      },
      {
        path: ROUTES.SERVICES,
        element: <Services />,
      },
      {
        path: ROUTES.FAQ,
        element: <FAQ />,
      },
      {
        path: ROUTES.BECOME_INSTRUCTOR,
        element: <BecomeInstructor />,
      },
      {
        path: ROUTES.CART,
        element: <Cart />,
      },
      {
        path: ROUTES.CHECKOUT,
        element: <Checkout />,
      },
      {
        path: ROUTES.ORDER_SUCCESS,
        element: <OrderSuccess />,
      },
      {
        path: ROUTES.PAYMENT_STATUS,
        element: <PaymentStatus />,
      },
      {
        path: ROUTES.COURSE_DETAILS,
        element: <CourseDetails />,
      },
      {
        path: ROUTES.LESSON,
        element: (
          <ProtectedRoute>
            <Lesson />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.INSTRUCTOR_DETAILS,
        element: <InstructorDetails />,
      },
      {
        path: ROUTES.UNAUTHORIZED,
        element: <Unauthorized />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
