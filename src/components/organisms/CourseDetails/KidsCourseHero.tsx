import { motion, MotionValue } from "framer-motion";
import { Globe, Star, PlayCircle, Sparkles, Heart } from "lucide-react";
import { Badge } from "../../atoms/Badge";
import { Button } from "../../atoms/Button";
import type { TFunction } from "i18next";
import type { Course } from "../../../types";

interface CourseHeroProps {
  course: Course;
  t: TFunction;
  isEnrolled: boolean;
  heroOpacity: MotionValue<number>;
  heroScale: MotionValue<number>;
}

export const KidsCourseHero = ({
  course,
  t,
  isEnrolled,
  heroOpacity,
  heroScale,
}: CourseHeroProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-[#FFFAEC] pt-32 pb-48 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-[5rem] blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-[5rem] blur-3xl"
        />
      </div>

      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="bg-white rounded-[4rem] border-8 border-primary/20 shadow-[0_20px_0_0_#4ecdc4] p-8 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8 space-y-10">
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-pink-500 text-white border-none px-6 py-3 rounded-full text-sm font-black shadow-lg transform -rotate-2">
                  <Sparkles className="w-4 h-4 mr-2 inline" />
                  {course.level}
                </Badge>
                <Badge className="bg-blue-400 text-white border-none px-6 py-3 rounded-full text-sm font-black shadow-lg transform rotate-2">
                  <Globe className="w-4 h-4 mr-2 inline" />
                  {course.language}
                </Badge>
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight text-slate-900 tracking-tight">
                {course.title}
              </h1>

              <p className="text-2xl font-bold text-slate-600 max-w-2xl leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-8 items-center pt-8 border-t-4 border-slate-100">
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((num: number) => (
                      <div
                        key={num}
                        className="w-16 h-16 rounded-full border-4 border-white bg-slate-100 overflow-hidden shadow-xl"
                      >
                        <img
                          src={`https://i.pravatar.cc/100?img=${num + 30}`}
                          alt="student"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="bg-yellow-400 px-4 py-2 rounded-2xl shadow-lg transform -rotate-3">
                    <div className="flex items-center gap-2 text-white">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="font-black text-2xl">
                        {course.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-5 bg-slate-50 p-4 rounded-3xl border-4 border-slate-100">
                  <img
                    src="https://i.pravatar.cc/100?img=12"
                    className="w-14 h-14 rounded-2xl object-cover shadow-md"
                    alt={course.instructor}
                  />
                  <div>
                    <p className="text-xs text-slate-400 font-black uppercase tracking-widest">
                      {t("course_details.instructor")}
                    </p>
                    <p className="font-black text-xl text-slate-800">
                      {course.instructor}
                    </p>
                  </div>
                </div>
              </div>

              {isEnrolled && (
                <div className="mt-10 p-8 rounded-[3rem] bg-secondary/10 border-4 border-secondary/20 shadow-xl">
                  <div className="flex flex-wrap items-center gap-8">
                    <Button className="h-20 px-12 rounded-full text-xl font-black bg-primary hover:bg-primary/90 shadow-[0_8px_0_0_#3bbbb2] active:shadow-none active:translate-y-2 transition-all">
                      <PlayCircle className="w-8 h-8 mr-3" />
                      {t("course_details.continue_learning")}
                    </Button>
                    <div className="flex-1 min-w-[280px]">
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-slate-500 font-black uppercase tracking-widest">
                          {t("lesson.progress")}
                        </span>
                        <span className="text-primary font-black text-2xl">
                          {course.progress}%
                        </span>
                      </div>
                      <div className="h-6 bg-white rounded-full overflow-hidden p-1.5 border-2 border-slate-100">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${course.progress}%` }}
                          transition={{ duration: 2, ease: "backOut" }}
                          className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-4 relative hidden lg:block">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <img
                  src="https://illustrations.popsy.co/amber/study-from-home.svg"
                  alt="Learning illustration"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-0 right-0 text-pink-500"
              >
                <Heart size={48} fill="currentColor" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
