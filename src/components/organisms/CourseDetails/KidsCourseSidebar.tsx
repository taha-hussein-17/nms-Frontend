import { useState } from "react";
import {
  Play,
  Monitor,
  Smartphone,
  Download,
  Trophy,
  Heart,
  Share2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Badge } from "../../atoms/Badge";
import { Button } from "../../atoms/Button";
import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";
import { type Course } from "../../../types";
import { useTranslation } from "react-i18next";

interface CourseSidebarProps {
  course: Course;
}

export const KidsCourseSidebar = ({ course }: CourseSidebarProps) => {
  const { t } = useTranslation();
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="sticky top-32 space-y-8">
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="bg-white border-8 border-primary/20 rounded-[4rem] p-10 shadow-[0_20px_0_0_#4ecdc4] overflow-hidden relative"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/20 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-pink-400/20 rounded-tr-full" />

        {/* Preview Image/Video Trigger */}
        <div className="relative aspect-video rounded-[3rem] overflow-hidden mb-10 group cursor-pointer border-4 border-slate-100 shadow-xl">
          <img
            src={course.image}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt={course.title}
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl"
            >
              <Play className="w-8 h-8 fill-current ml-1" />
            </motion.div>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <Badge className="w-full justify-center bg-white/90 backdrop-blur-md border-primary/20 py-3 rounded-2xl text-xs font-black text-primary uppercase">
              <Sparkles className="w-4 h-4 mr-2" />
              {t("course_details.preview_course")}
            </Badge>
          </div>
        </div>

        {/* Pricing */}
        <div className="space-y-8 mb-10">
          <div className="text-center space-y-2">
            <p className="text-slate-400 font-black uppercase tracking-widest text-xs">
              {isWishlisted ? "سعر البطل!" : "استثمار مستقبلك"}
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="text-6xl font-black text-slate-900 tracking-tighter">
                {course.price}
              </span>
              {course.oldPrice && (
                <span className="text-2xl text-slate-300 line-through font-bold">
                  {course.oldPrice}
                </span>
              )}
            </div>
            {course.oldPrice && (
              <div className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-black shadow-lg transform rotate-3">
                توفير كبير! 🎉
              </div>
            )}
          </div>

          <div className="space-y-6">
            <Button className="w-full h-20 rounded-full text-xl font-black bg-primary hover:bg-primary/90 shadow-[0_8px_0_0_#3bbbb2] active:shadow-none active:translate-y-2 transition-all">
              {t("course_details.buy_now")}
            </Button>
            <Button
              variant="outline"
              className="w-full h-16 rounded-full text-lg font-black border-4 border-slate-100 hover:bg-slate-50 transition-all"
            >
              {t("course_details.add_to_cart")}
            </Button>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-6 pt-8 border-t-4 border-slate-50">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-black text-center">
            {t("course_details.includes")}
          </p>
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                icon: Monitor,
                text: t("course_details.lifetime_access"),
                color: "bg-blue-100 text-blue-500",
              },
              {
                icon: Smartphone,
                text: t("course_details.mobile_access"),
                color: "bg-purple-100 text-purple-500",
              },
              {
                icon: Download,
                text: t("course_details.resources"),
                color: "bg-emerald-100 text-emerald-500",
              },
              {
                icon: Trophy,
                text: t("course_details.certificate"),
                color: "bg-orange-100 text-orange-500",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors cursor-default group/item"
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform",
                    item.color
                  )}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-slate-600 font-black text-sm">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-10">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={cn(
              "flex-1 h-16 rounded-3xl border-4 flex items-center justify-center gap-3 font-black text-sm transition-all duration-300",
              isWishlisted
                ? "bg-red-50 border-red-200 text-red-500 shadow-inner"
                : "bg-slate-50 border-slate-100 text-slate-400 hover:bg-white hover:border-primary/20"
            )}
          >
            <Heart className={cn("w-6 h-6", isWishlisted && "fill-current")} />
            {isWishlisted ? "بطلنا المفضل" : t("course_details.wishlist")}
          </button>
          <button className="flex-1 h-16 rounded-3xl bg-slate-50 border-4 border-slate-100 text-slate-400 hover:bg-white hover:border-primary/20 flex items-center justify-center gap-3 font-black text-sm transition-all duration-300">
            <Share2 className="w-6 h-6" />
            {t("course_details.share")}
          </button>
        </div>
      </motion.div>

      {/* Secure Payment Notice */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="bg-emerald-50 border-4 border-emerald-100 rounded-[3rem] p-8 flex items-center gap-6 shadow-sm"
      >
        <div className="w-16 h-16 rounded-3xl bg-white text-emerald-500 flex items-center justify-center shrink-0 shadow-md">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <div>
          <p className="text-slate-800 font-black text-sm mb-1">
            {t("course_details.secure_payment")}
          </p>
          <p className="text-slate-500 text-xs font-bold leading-relaxed">
            {t("course_details.secure_payment_desc")}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
