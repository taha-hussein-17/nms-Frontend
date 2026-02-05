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
  Sparkles,
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

export const KidsCourseCard = memo(
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
            level: course.level ?? (isAr ? "مبتدئ" : "Beginner"),
            oldPrice: course.oldPrice,
          })
        );
        showToast(
          isAr ? "تمت الإضافة لشنطتك بنجاح! 🎒" : "Added to your backpack! 🎒",
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
          y: isHorizontal ? 0 : -10,
          rotate: isHorizontal ? 0 : isAr ? -1 : 1,
        }}
        onClick={handleCardClick}
        className={cn(
          "group relative flex bg-white border-4 border-primary/10 hover:border-primary/30 rounded-[3rem] overflow-hidden transition-all duration-500 cursor-pointer shadow-[0_15px_35px_rgba(0,0,0,0.05)]",
          isHorizontal ? "flex-row h-72" : "flex-col h-full"
        )}
      >
        {/* Playful background blobs */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/5 rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-pink-400/5 rounded-tr-full pointer-events-none" />

        {/* Image Container */}
        <div
          className={cn(
            "relative overflow-hidden m-4 rounded-[2.5rem] shrink-0 border-4 border-slate-50",
            isHorizontal ? "w-80 h-auto" : "aspect-[16/11]"
          )}
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Level Badge */}
          <div className={cn("absolute top-4", isAr ? "right-4" : "left-4")}>
            <Badge className="bg-yellow-400 text-slate-900 border-none px-4 py-2 font-black text-[10px] rounded-full shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              {course.level || (isAr ? "مبتدئ" : "Beginner")}
            </Badge>
          </div>

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={cn(
              "absolute top-4 w-11 h-11 rounded-full bg-white/90 text-pink-500 flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95",
              isAr ? "left-4" : "right-4"
            )}
          >
            <Heart className="w-5 h-5 fill-current" />
          </button>

          {/* Play Icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl"
            >
              <PlayCircle className="w-10 h-10" />
            </motion.div>
          </div>
        </div>

        <div
          className={cn(
            "flex flex-col flex-1",
            isHorizontal ? "p-8 justify-center" : "p-8 pt-2"
          )}
        >
          {/* Rating and Students */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1.5 bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-full text-xs font-black">
              <Star className="w-3.5 h-3.5 fill-current" />
              {course.rating}
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 font-bold text-xs">
              <Users className="w-4 h-4 text-primary" />
              {course.students} {isAr ? "بطل" : "Heroes"}
            </div>
          </div>

          {/* Title */}
          <h3
            className={cn(
              "font-black text-slate-800 leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-300 font-din mb-4",
              isHorizontal ? "text-3xl" : "text-2xl"
            )}
          >
            {course.title}
          </h3>

          {/* Info Grid */}
          <div
            className={cn(
              "grid grid-cols-2 gap-4 py-4 mb-4 border-t-2 border-slate-50",
              isHorizontal ? "max-w-sm" : ""
            )}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                <BookOpen className="w-4.5 h-4.5" />
              </div>
              <span className="text-xs font-bold text-slate-500 truncate">
                {course.instructor}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500">
                <Clock className="w-4.5 h-4.5" />
              </div>
              <span className="text-xs font-bold text-slate-500">
                {course.duration || "12h"}
              </span>
            </div>
          </div>

          {/* Price and Action */}
          <div
            className={cn(
              "flex items-center justify-between gap-4",
              isHorizontal ? "max-w-sm" : "mt-auto"
            )}
          >
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">
                {isAr ? "السعر" : "PRICE"}
              </span>
              <span className="text-2xl font-black text-slate-900">
                {course.price}
              </span>
            </div>

            <Button
              onClick={handleAddToCart}
              className={cn(
                "h-14 px-8 rounded-full font-black text-sm shadow-lg transform active:translate-y-1 transition-all",
                isInCart
                  ? "bg-emerald-50 text-emerald-500 border-2 border-emerald-100"
                  : "bg-primary text-white hover:bg-primary/90 shadow-primary/20"
              )}
            >
              <AnimatePresence mode="wait">
                {isInCart ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-5 h-5 stroke-[3px]" />
                    <span>{isAr ? "معك!" : "Got it!"}</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="cart"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>{isAr ? "اشترك" : "Join"}</span>
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
