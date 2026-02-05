import { motion } from "framer-motion";
import { Clock, BookOpen, Target, Award, Star } from "lucide-react";
import { cn } from "../../../utils/cn";
import type { TFunction } from "i18next";
import type { Course } from "../../../types";

interface CourseStatsProps {
  course: Course;
  t: TFunction;
}

export const KidsCourseStats = ({ course, t }: CourseStatsProps) => {
  const stats = [
    {
      icon: Clock,
      label: t("course_details.duration_label"),
      value: course.duration,
      color: "text-blue-500",
      bg: "bg-blue-100",
      borderColor: "border-blue-200",
      shadow: "shadow-blue-200",
    },
    {
      icon: BookOpen,
      label: t("course_details.lessons_label"),
      value: "85+",
      color: "text-emerald-500",
      bg: "bg-emerald-100",
      borderColor: "border-emerald-200",
      shadow: "shadow-emerald-200",
    },
    {
      icon: Target,
      label: t("course_details.level"),
      value: course.level,
      color: "text-purple-500",
      bg: "bg-purple-100",
      borderColor: "border-purple-200",
      shadow: "shadow-purple-200",
    },
    {
      icon: Award,
      label: t("course_details.certificate"),
      value: t("course_details.certified"),
      color: "text-orange-500",
      bg: "bg-orange-100",
      borderColor: "border-orange-200",
      shadow: "shadow-orange-200",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: i * 0.1,
          }}
          whileHover={{ y: -10 }}
          className={cn(
            "bg-white border-4 p-8 rounded-[3rem] text-center transition-all duration-300 relative group overflow-hidden",
            stat.borderColor,
            "shadow-[0_12px_0_0_rgba(0,0,0,0.05)] hover:shadow-none hover:translate-y-1"
          )}
        >
          {/* Decorative Sparkles */}
          <div className="absolute top-2 right-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity">
            <Star size={16} fill="currentColor" />
          </div>

          <div
            className={cn(
              "w-20 h-20 mx-auto mb-6 rounded-[2rem] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg",
              stat.bg,
              stat.color
            )}
          >
            <stat.icon className="w-10 h-10" />
          </div>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-black mb-2">
            {stat.label}
          </p>
          <p className="font-black text-2xl text-slate-800">{stat.value}</p>
        </motion.div>
      ))}
    </div>
  );
};
