import { motion } from "framer-motion";
import { GraduationCap, Award, Compass } from "lucide-react";
import { type TFunction } from "i18next";

interface CoursesHeroProps {
  isAr: boolean;
  t: TFunction;
}

export const UniCoursesHero = ({ isAr }: CoursesHeroProps) => {
  return (
    <div className="relative min-h-[60vh] flex items-center bg-slate-50 dark:bg-[#0f172a] overflow-hidden pt-20 font-sans">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isAr ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-blue-600/10 border-l-4 border-blue-600 text-blue-700 dark:text-blue-400 text-sm mb-8 font-bold"
            >
              <GraduationCap className="w-5 h-5" />
              <span className="tracking-wide uppercase">
                {isAr ? "البوابة الأكاديمية للدورات" : "ACADEMIC COURSE PORTAL"}
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 leading-[1.2]">
              {isAr ? (
                <>
                  استثمر في <span className="text-blue-600">مستقبلك</span>{" "}
                  <br />
                  بأدوات تعليمية{" "}
                  <span className="border-b-4 border-blue-600">احترافية</span>
                </>
              ) : (
                <>
                  Invest In Your <span className="text-blue-600">Future</span>{" "}
                  <br />
                  With{" "}
                  <span className="border-b-4 border-blue-600">
                    Academic
                  </span>{" "}
                  Excellence
                </>
              )}
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-xl">
              {isAr
                ? "منصة تعليمية متكاملة تقدم دورات جامعية ومهنية معتمدة لتطوير مسارك المهني والأكاديمي."
                : "An integrated learning platform offering certified university and professional courses to enhance your career and academic path."}
            </p>

            <div className="grid grid-cols-2 gap-6 sm:flex sm:gap-12">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900 dark:text-white">
                  ٨٥+
                </span>
                <span className="text-slate-500 text-sm font-bold uppercase tracking-wider">
                  {isAr ? "تخصص أكاديمي" : "Specializations"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900 dark:text-white">
                  ١٢٠٠+
                </span>
                <span className="text-slate-500 text-sm font-bold uppercase tracking-wider">
                  {isAr ? "ساعة تعليمية" : "Learning Hours"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900 dark:text-white">
                  ٤.٨
                </span>
                <span className="text-slate-500 text-sm font-bold uppercase tracking-wider">
                  {isAr ? "متوسط التقييم" : "Avg. Rating"}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/5 rounded-[2rem] -rotate-3" />
              <div className="relative z-10 bg-white dark:bg-slate-800 p-2 rounded-[2rem] shadow-2xl border border-slate-200 dark:border-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Students Studying"
                  className="w-full h-auto rounded-[1.8rem]"
                />

                {/* Academic Overlays */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      {isAr ? "شهادات معتمدة" : "Certified"}
                    </div>
                    <div className="text-xs text-slate-500">
                      {isAr ? "لكل الدورات" : "For all courses"}
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-blue-600 p-4 rounded-2xl shadow-xl flex items-center gap-4 text-white">
                  <Compass className="w-6 h-6" />
                  <div className="font-bold">
                    {isAr ? "توجيه أكاديمي" : "Academic Guidance"}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
