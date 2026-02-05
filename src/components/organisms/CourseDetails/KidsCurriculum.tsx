import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  PlayCircle,
  Clock,
  ChevronDown,
  Play,
  Lock,
  Star,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Badge } from "../../atoms/Badge";
import { cn } from "../../../utils/cn";
import {
  type Course,
  type CurriculumSection,
  type Lesson,
} from "../../../types";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../../../constants/routes";

interface CurriculumProps {
  course: Course;
  id: string | undefined;
  isEnrolled: boolean;
}

export const KidsCurriculum = ({ course, id, isEnrolled }: CurriculumProps) => {
  const { t } = useTranslation();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  return (
    <div className="space-y-16 py-12">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="inline-block bg-yellow-400 text-white px-8 py-3 rounded-full font-black text-lg shadow-lg transform -rotate-2"
        >
          🚀 {t("course_details.curriculum")}
        </motion.div>
        <h2 className="text-5xl md:text-6xl font-black text-slate-800 tracking-tight">
          {t("course_details.curriculum_title")}
        </h2>
        <p className="text-slate-500 text-xl font-bold max-w-2xl mx-auto">
          {t("course_details.curriculum_desc")}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-blue-50 border-4 border-blue-100 p-6 rounded-[3rem] text-center shadow-sm"
        >
          <div className="text-3xl font-black text-blue-500 mb-1">
            {course.curriculum?.length || 0}
          </div>
          <div className="text-xs font-black text-blue-400 uppercase tracking-widest">
            {t("course_details.sections_label")}
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-purple-50 border-4 border-purple-100 p-6 rounded-[3rem] text-center shadow-sm"
        >
          <div className="text-3xl font-black text-purple-500 mb-1">
            {course.curriculum?.reduce((acc, s) => acc + s.lessons.length, 0) ||
              0}
          </div>
          <div className="text-xs font-black text-purple-400 uppercase tracking-widest">
            {t("course_details.lessons_label")}
          </div>
        </motion.div>
      </div>

      {/* Curriculum List */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {course.curriculum?.map((section: CurriculumSection, idx: number) => (
          <motion.div
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className={cn(
              "bg-white border-8 rounded-[4rem] overflow-hidden transition-all duration-300",
              activeAccordion === idx
                ? "border-primary/20 shadow-[0_20px_0_0_#4ecdc4]"
                : "border-slate-50 hover:border-slate-100 shadow-lg"
            )}
          >
            <button
              onClick={() =>
                setActiveAccordion(activeAccordion === idx ? null : idx)
              }
              className="w-full flex items-center justify-between p-8 md:p-12 text-right group"
            >
              <div className="flex items-center gap-8">
                <div
                  className={cn(
                    "w-20 h-20 rounded-[2.5rem] flex items-center justify-center font-black text-3xl transition-all duration-500",
                    activeAccordion === idx
                      ? "bg-primary text-white rotate-6 shadow-xl"
                      : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                  )}
                >
                  {idx + 1}
                </div>
                <div className="text-right">
                  <h3 className="font-black text-2xl md:text-3xl text-slate-800 mb-3 group-hover:text-primary transition-colors">
                    {section.title}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <Badge className="bg-blue-50 text-blue-500 border-blue-100 px-4 py-2 rounded-full font-black text-xs">
                      <PlayCircle className="w-4 h-4 mr-2" />
                      {section.lessons.length}{" "}
                      {t("course_details.lessons_label")}
                    </Badge>
                    <Badge className="bg-orange-50 text-orange-500 border-orange-100 px-4 py-2 rounded-full font-black text-xs">
                      <Clock className="w-4 h-4 mr-2" />
                      {section.duration || "45m"}
                    </Badge>
                  </div>
                </div>
              </div>
              <div
                className={cn(
                  "w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-500 bg-slate-50 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary",
                  activeAccordion === idx && "rotate-180"
                )}
              >
                <ChevronDown size={32} />
              </div>
            </button>

            <AnimatePresence>
              {activeAccordion === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-slate-50/50"
                >
                  <div className="p-8 md:p-12 space-y-4">
                    {section.lessons.map((lesson: Lesson, lIdx: number) => {
                      const hasAccess = isEnrolled || lesson.free;
                      const lessonLink = ROUTES.LESSON.replace(
                        ":courseId",
                        id || "1"
                      ).replace(":lessonId", lesson.id);

                      return (
                        <div key={lIdx}>
                          {hasAccess ? (
                            <Link
                              to={lessonLink}
                              className="flex items-center justify-between p-6 rounded-[2.5rem] bg-white border-4 border-white hover:border-primary/30 shadow-sm hover:shadow-md transition-all group/item"
                            >
                              <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover/item:scale-110 transition-transform">
                                  <Play className="w-6 h-6 fill-current" />
                                </div>
                                <span className="font-black text-xl text-slate-700">
                                  {lesson.title}
                                </span>
                              </div>
                              <div className="flex items-center gap-6">
                                {lesson.free && (
                                  <span className="bg-emerald-100 text-emerald-500 px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest">
                                    هدية! 🎁
                                  </span>
                                )}
                                <span className="font-black text-slate-400">
                                  {lesson.duration || "12:45"}
                                </span>
                              </div>
                            </Link>
                          ) : (
                            <div className="flex items-center justify-between p-6 rounded-[2.5rem] bg-slate-100/50 border-4 border-transparent opacity-60 grayscale">
                              <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-slate-200 text-slate-400 flex items-center justify-center">
                                  <Lock className="w-6 h-6" />
                                </div>
                                <span className="font-black text-xl text-slate-400">
                                  {lesson.title}
                                </span>
                              </div>
                              <span className="font-black text-slate-300">
                                {lesson.duration || "12:45"}
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Decorative Footer */}
      <div className="flex justify-center gap-12 text-slate-200 py-8">
        <Star size={48} className="animate-pulse" />
        <Sparkles size={48} className="animate-bounce" />
        <Trophy size={48} className="animate-pulse" />
      </div>
    </div>
  );
};
