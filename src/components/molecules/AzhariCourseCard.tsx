import { memo } from "react";
import {
  Star,
  Users,
  ShoppingCart,
  Check,
  Clock,
  PlayCircle,
  Scroll,
  PenTool,
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

export const AzhariCourseCard = memo(
  ({ course, variant = "vertical" }: CourseCardProps) => {
    const { i18n } = useTranslation();
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
            level: course.level ?? (isAr ? "متقدم" : "Advanced"),
            oldPrice: course.oldPrice,
          })
        );
        showToast(
          isAr
            ? "تم حجز مقعدكم في الحلقة بنجاح"
            : "Seat reserved in the circle successfully",
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
          y: isHorizontal ? 0 : -8,
          boxShadow: "0 20px 40px rgba(139,115,85,0.15)",
        }}
        onClick={handleCardClick}
        className={cn(
          "group relative flex bg-[#fcfbf7] dark:bg-[#1a1c14] border-2 border-[#8b7355]/20 hover:border-[#8b7355]/50 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer font-serif",
          isHorizontal ? "flex-row h-72" : "flex-col h-full"
        )}
      >
        {/* Islamic pattern overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l5 20h20l-15 12 5 20-15-12-15 12 5-20-15-12h20z' fill='%238b7355' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Image Container */}
        <div
          className={cn(
            "relative overflow-hidden shrink-0",
            isHorizontal ? "w-80 h-auto" : "aspect-[16/11]"
          )}
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover sepia-[0.2] group-hover:sepia-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-[#2d3a2d]/10 mix-blend-multiply" />

          {/* Level Badge */}
          <div className={cn("absolute top-4", isAr ? "right-4" : "left-4")}>
            <Badge className="bg-[#2d3a2d] text-[#fcfbf7] border-none px-4 py-1.5 font-bold text-[10px] rounded-md shadow-lg">
              <Scroll className="w-3 h-3 mr-2 inline" />
              {course.level || (isAr ? "متقدم" : "ADVANCED")}
            </Badge>
          </div>

          {/* Action Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-16 h-16 rounded-full bg-[#fcfbf7]/90 text-[#2d3a2d] flex items-center justify-center shadow-2xl border border-[#8b7355]/20 transform scale-90 group-hover:scale-100 transition-transform">
              <PlayCircle className="w-9 h-9" />
            </div>
          </div>
        </div>

        <div
          className={cn(
            "flex flex-col flex-1 p-8 relative z-10",
            isHorizontal ? "justify-center" : "pt-4"
          )}
        >
          {/* Metrics */}
          <div className="flex items-center gap-5 mb-4 border-b border-[#8b7355]/10 pb-4">
            <div className="flex items-center gap-1.5 text-[#8b7355] text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-current" />
              {course.rating}
            </div>
            <div className="flex items-center gap-1.5 text-[#2d3a2d]/50 dark:text-[#e2e8e2]/50 text-xs font-bold">
              <Users className="w-4 h-4" />
              {course.students} {isAr ? "طالب علم" : "STUDENTS"}
            </div>
          </div>

          {/* Title */}
          <h3
            className={cn(
              "font-bold text-[#2d3a2d] dark:text-[#e2e8e2] leading-tight line-clamp-2 group-hover:text-[#8b7355] transition-colors mb-5",
              isHorizontal ? "text-3xl" : "text-xl"
            )}
          >
            {course.title}
          </h3>

          {/* Details */}
          <div className="space-y-3 mb-8 italic">
            <div className="flex items-center gap-3 text-sm text-[#8b7355]">
              <PenTool className="w-4 h-4" />
              <span className="font-bold opacity-60">
                {isAr ? "بإشراف:" : "BY:"}
              </span>
              <span className="text-[#2d3a2d] dark:text-[#e2e8e2]">
                {course.instructor}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#8b7355]">
              <Clock className="w-4 h-4" />
              <span className="font-bold opacity-60">
                {isAr ? "المدة:" : "TIME:"}
              </span>
              <span className="text-[#2d3a2d] dark:text-[#e2e8e2]">
                {course.duration || "12 ساعة"}
              </span>
            </div>
          </div>

          {/* Action Section */}
          <div
            className={cn(
              "flex items-center justify-between gap-6 mt-auto",
              isHorizontal ? "max-w-sm" : ""
            )}
          >
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8b7355]/60 leading-none mb-1">
                {isAr ? "قيمة العلم" : "INVESTMENT"}
              </span>
              <span className="text-2xl font-bold text-[#2d3a2d] dark:text-[#e2e8e2]">
                {course.price}
              </span>
            </div>

            <Button
              onClick={handleAddToCart}
              className={cn(
                "h-12 px-8 rounded-lg font-bold text-sm transition-all duration-500 border-2",
                isInCart
                  ? "bg-transparent border-[#2d3a2d] text-[#2d3a2d] dark:text-[#e2e8e2]"
                  : "bg-[#2d3a2d] border-[#2d3a2d] text-[#fcfbf7] hover:bg-[#8b7355] hover:border-[#8b7355] shadow-lg"
              )}
            >
              <AnimatePresence mode="wait">
                {isInCart ? (
                  <motion.div
                    key="check"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>{isAr ? "تم الحجز" : "RESERVED"}</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="cart"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>{isAr ? "طلب العلم" : "ENROLL"}</span>
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
