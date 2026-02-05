import { memo } from "react";
import {
  Star,
  Users,
  ShoppingCart,
  Check,
  Clock,
  BookOpen,
  PlayCircle,
  Heart,
  GraduationCap,
  Library,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { cn } from "../../utils/cn";
import { Button } from "../atoms/Button";
import { useAppDispatch, useAppSelector } from "../../store";
import { addToCart } from "../../store/slices/cartSlice";
import { ROUTES } from "../../constants/routes";
import { motion, AnimatePresence } from "framer-motion";
import type { Course } from "../../types";
import { Badge } from "../atoms/Badge";
import { useAlert } from "../../hooks/useAlert";

interface CourseCardProps {
  course: Course;
  variant?: "vertical" | "horizontal";
}

export const UniCourseCard = memo(
  ({ course, variant = "vertical" }: CourseCardProps) => {
    const { i18n, t } = useTranslation();
    const navigate = useNavigate();
    const isAr = i18n.language === "ar";
    const dispatch = useAppDispatch();
    const { items } = useAppSelector((state) => state.cart);
    const { showToast } = useAlert();
    const isInCart = items.some((item) => item.id === course.id);

    const isHorizontal = variant === "horizontal";

    const handleAddToCart = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isInCart) {
        dispatch(
          addToCart({
            id: course.id,
            title: course.title,
            instructor: course.instructor,
            price: course.price,
            image: course.image,
            level: course.level ?? (isAr ? "جامعي" : "Academic"),
            oldPrice: course.oldPrice,
          })
        );
        showToast(
          isAr
            ? "تمت إضافة المقرر لسجل التسجيل"
            : "Course added to registration record",
          "success"
        );
      }
    };

    const handleCardClick = () => {
      navigate(ROUTES.COURSE_DETAILS.replace(":id", course.id));
    };

    return (
      <motion.div
        whileHover={{
          y: isHorizontal ? 0 : -6,
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
        onClick={handleCardClick}
        className={cn(
          "group relative flex bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer font-sans",
          isHorizontal ? "flex-row h-64" : "flex-col h-full"
        )}
      >
        {/* Image Container */}
        <div
          className={cn(
            "relative overflow-hidden shrink-0",
            isHorizontal ? "w-72 h-auto" : "aspect-[16/10]"
          )}
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Level Badge */}
          <div className={cn("absolute top-4", isAr ? "right-4" : "left-4")}>
            <Badge
              className="bg-maroon-600 text-white border-none px-3 py-1 font-bold text-[9px] rounded-md shadow-md uppercase tracking-wide"
            >
              <GraduationCap className="w-3 h-3 mr-1.5 inline" />
              {course.level || (isAr ? "جامعي" : "ACADEMIC")}
            </Badge>
          </div>

          {/* Action Overlay */}
          <div className="absolute inset-0 bg-maroon-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white text-maroon-600 flex items-center justify-center shadow-lg">
              <PlayCircle className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div
          className={cn(
            "flex flex-col flex-1 p-6",
            isHorizontal ? "justify-center" : "pt-4"
          )}
        >
          {/* Metadata */}
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-1 text-orange-500 font-bold text-xs">
              <Star className="w-3 h-3 fill-current" />
              {course.rating}
            </div>
            <div className="flex items-center gap-1 text-slate-400 font-medium text-xs">
              <Users className="w-3.5 h-3.5" />
              {course.students} {isAr ? "مسجل" : "ENROLLED"}
            </div>
          </div>

          {/* Title */}
          <h3
            className={cn(
              "font-bold text-slate-900 dark:text-white leading-tight line-clamp-2 group-hover:text-maroon-600 transition-colors mb-4",
              isHorizontal ? "text-2xl" : "text-lg"
            )}
          >
            {course.title}
          </h3>

          {/* Academic Info */}
          <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Library className="w-4 h-4 text-slate-400" />
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium truncate">
                {course.instructor}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-400" />
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                {course.duration || "12 Weeks"}
              </span>
            </div>
          </div>

          {/* Pricing and Action */}
          <div className="flex items-center justify-between gap-4 mt-auto">
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                {isAr ? "الرسوم" : "FEES"}
              </span>
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                {course.price}
              </span>
            </div>

            <Button
              onClick={handleAddToCart}
              className={cn(
                "h-10 px-6 rounded-lg font-bold text-xs transition-all border",
                isInCart
                  ? "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
                  : "bg-maroon-600 border-maroon-600 text-white hover:bg-maroon-700 shadow-sm"
              )}
            >
              <AnimatePresence mode="wait">
                {isInCart ? (
                  <motion.div
                    key="check"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>{isAr ? "مسجل" : "ENROLLED"}</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="cart"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-1.5"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>{isAr ? "تسجيل" : "REGISTER"}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }
);
