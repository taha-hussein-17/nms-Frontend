import { Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { CourseCard } from "../../molecules/CourseCard";
import { type Course } from "../../../types";
import { useTranslation } from "react-i18next";

interface KidsRelatedCoursesProps {
  courses: Course[];
}

export const KidsRelatedCourses = ({ courses }: KidsRelatedCoursesProps) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  if (courses.length === 0) return null;

  return (
    <div className="container mx-auto px-4 py-32 border-t-8 border-sky-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 text-center md:text-right">
        <div className="space-y-4">
          <motion.div
            initial={{ x: isAr ? 20 : -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-black text-sm"
          >
            <Heart size={16} className="fill-current" />
            <span>{isAr ? "قد تعجبك أيضاً" : "You might also like"}</span>
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-black text-sky-900 flex items-center justify-center md:justify-start gap-4">
            {isAr ? "مغامرات أخرى ممتعة" : "More Fun Adventures"}
            <Sparkles className="text-yellow-400" />
          </h2>
          <p className="text-sky-600 text-xl font-bold max-w-2xl leading-relaxed">
            {isAr
              ? "استمر في الاستكشاف وتعلم مهارات جديدة مع أصدقائك في هذه الكورسات الرائعة!"
              : "Keep exploring and learn new skills with your friends in these awesome courses!"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <CourseCard course={c} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
