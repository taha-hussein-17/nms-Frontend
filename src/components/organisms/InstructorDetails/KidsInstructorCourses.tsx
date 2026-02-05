import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight, BookX, Rocket, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../../atoms/Button";
import { CourseCard } from "../../molecules/CourseCard";
import { ROUTES } from "../../../constants/routes";
import type { Course } from "../../../types";

interface InstructorCoursesProps {
  instructorName: string;
  courses: Course[];
}

export const KidsInstructorCourses = ({
  instructorName,
  courses,
}: InstructorCoursesProps) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <section className="space-y-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/20 -rotate-6">
            <Rocket className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-4xl font-black font-handwritten text-primary tracking-wide">
            {isAr
              ? `مغامرات ${instructorName}`
              : `${instructorName}'s Adventures`}
          </h2>
        </div>
        <Link to={ROUTES.COURSES}>
          <Button
            size="lg"
            className="rounded-full font-handwritten text-xl bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/20 group h-16 px-10"
          >
            {isAr ? "اكتشف كل المغامرات" : "See All Adventures"}
            {isAr ? (
              <ArrowLeft className="w-6 h-6 mr-3 group-hover:-translate-x-2 transition-transform" />
            ) : (
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            )}
          </Button>
        </Link>
      </div>

      {courses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <CourseCard
                course={{
                  ...course,
                  students:
                    typeof course.students === "number" ? course.students : 0,
                }}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center py-24 px-8 bg-white dark:bg-slate-800 border-4 border-dashed border-slate-200 dark:border-slate-700 rounded-[4rem] text-center"
        >
          <div className="w-24 h-24 bg-yellow-400 rounded-3xl flex items-center justify-center mb-8 shadow-xl rotate-12">
            <BookX className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-3xl font-black font-handwritten mb-4 text-primary">
            {isAr ? "لا توجد مغامرات هنا بعد!" : "No Adventures Here Yet!"}
          </h3>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-md mx-auto font-handwritten">
            {isAr
              ? "يبدو أن المعلم يجهز لنا مفاجآت رائعة قريباً.. ابقَ مستعداً!"
              : "Looks like the teacher is preparing some cool surprises for us.. Stay tuned!"}
          </p>
          <div className="mt-8 flex gap-3">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-bounce" />
            <Sparkles className="w-8 h-8 text-pink-400 animate-bounce delay-100" />
            <Sparkles className="w-8 h-8 text-blue-400 animate-bounce delay-200" />
          </div>
        </motion.div>
      )}
    </section>
  );
};
