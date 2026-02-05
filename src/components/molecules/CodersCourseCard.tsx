import { memo } from "react";
import {
  Star,
  Users,
  ShoppingCart,
  Check,
  PlayCircle,
  Terminal,
  Code,
  Zap,
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

export const CodersCourseCard = memo(
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
            level: course.level ?? (isAr ? "محترف" : "Senior"),
            oldPrice: course.oldPrice,
          })
        );
        showToast(
          isAr
            ? "تم تجميع الكورس بنجاح! 🚀"
            : "Course compiled successfully! 🚀",
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
          scale: 1.01,
        }}
        onClick={handleCardClick}
        className={cn(
          "group relative flex bg-black/40 backdrop-blur-md border-2 border-emerald-500/10 hover:border-emerald-500/40 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer font-mono",
          isHorizontal ? "flex-row h-64" : "flex-col h-full"
        )}
      >
        {/* Scanline effect overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] pointer-events-none z-10 opacity-20" />

        {/* Image Container */}
        <div
          className={cn(
            "relative overflow-hidden shrink-0 bg-emerald-900/10",
            isHorizontal ? "w-72 h-auto" : "aspect-[16/10]"
          )}
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay" />

          {/* Status Badge */}
          <div className={cn("absolute top-3", isAr ? "right-3" : "left-3")}>
            <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/40 px-3 py-1 font-bold text-[9px] uppercase tracking-tighter rounded-sm backdrop-blur-md">
              <Terminal className="w-3 h-3 mr-1.5 inline" />
              {course.level || (isAr ? "محترف" : "SENIOR")}
            </Badge>
          </div>

          {/* Glitch Overlay on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-14 h-14 border-2 border-emerald-500 flex items-center justify-center bg-black/60 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
              <PlayCircle className="w-8 h-8 text-emerald-500" />
            </div>
          </div>
        </div>

        <div
          className={cn(
            "flex flex-col flex-1 p-6 relative z-20",
            isHorizontal ? "justify-center" : "pt-4"
          )}
        >
          {/* Metrics */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1.5 text-emerald-500/60 text-[10px] font-bold">
              <Star className="w-3 h-3 fill-current" />
              {course.rating}
            </div>
            <div className="flex items-center gap-1.5 text-emerald-500/40 text-[10px] font-bold">
              <Users className="w-3 h-3" />
              {course.students} USERS
            </div>
          </div>

          {/* Title */}
          <h3
            className={cn(
              "font-black text-emerald-500 leading-tight line-clamp-2 group-hover:text-emerald-400 transition-colors mb-4 uppercase tracking-tighter",
              isHorizontal ? "text-2xl" : "text-lg"
            )}
          >
            {isAr ? `> ${course.title}` : `> ${course.title}`}
          </h3>

          {/* Metadata */}
          <div className="space-y-2 mb-6 border-l border-emerald-500/10 pl-4">
            <div className="flex items-center gap-2 text-[10px] text-emerald-500/40">
              <Code className="w-3 h-3" />
              <span className="uppercase">{isAr ? "المعلم" : "AUTHOR"}:</span>
              <span className="text-emerald-500/80">{course.instructor}</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-emerald-500/40">
              <Zap className="w-3 h-3" />
              <span className="uppercase">{isAr ? "المدة" : "RUNTIME"}:</span>
              <span className="text-emerald-500/80">
                {course.duration || "12:30:00"}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div
            className={cn(
              "flex items-center justify-between gap-4 mt-auto",
              isHorizontal ? "max-w-xs" : ""
            )}
          >
            <div className="flex flex-col">
              <span className="text-[8px] uppercase tracking-[0.2em] text-emerald-500/30 leading-none mb-1">
                VALUE
              </span>
              <span className="text-xl font-black text-emerald-500">
                {course.price}
              </span>
            </div>

            <Button
              onClick={handleAddToCart}
              className={cn(
                "h-10 px-6 rounded-none border-2 transition-all font-bold text-[10px] uppercase tracking-widest",
                isInCart
                  ? "bg-emerald-500/10 border-emerald-500 text-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                  : "bg-transparent border-emerald-500/40 text-emerald-500/60 hover:bg-emerald-500 hover:text-black hover:border-emerald-500"
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
                    <Check className="w-3.5 h-3.5" />
                    <span>INSTALLED</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="cart"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>FETCH_COURSE</span>
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
