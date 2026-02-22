import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight, BookX } from "lucide-react";
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

export const DefaultInstructorCourses = ({
  instructorName,
  courses,
}: InstructorCoursesProps) => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <section className="space-y-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-3 h-10 bg-primary rounded-full" />
          <h2 className="text-4xl font-black tracking-tight">
            {t("instructor.courses_by", { name: instructorName })}
          </h2>
        </div>
        <Link to={ROUTES.COURSES}>
          <Button className="rounded-2xl font-black bg-[#0D358C] text-white hover:bg-[#0D358C]/90 group px-8 h-12">
            {t("instructor.view_all_courses")}
            {isAr ? (
              <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-2 transition-transform" />
            ) : (
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
            )}
          </Button>
        </Link>
      </div>

      {courses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={{
                ...course,
                students:
                  typeof course.students === "number" ? course.students : 0,
              }}
            />
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center py-20 px-6 bg-secondary/30 rounded-[2.5rem] border-2 border-dashed border-secondary text-center"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <BookX className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-black mb-3">
            {t("instructor.no_courses_title")}
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto font-medium">
            {t("instructor.no_courses_desc")}
          </p>
        </motion.div>
      )}
    </section>
  );
};
