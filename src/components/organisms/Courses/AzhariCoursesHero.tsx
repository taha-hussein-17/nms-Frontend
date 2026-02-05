import { motion } from "framer-motion";
import { Book, GraduationCap, PenTool, Library, Scroll } from "lucide-react";
import { type TFunction } from "i18next";

interface CoursesHeroProps {
  isAr: boolean;
  t: TFunction;
}

export const AzhariCoursesHero = ({ isAr }: CoursesHeroProps) => {
  return (
    <div className="relative min-h-[60vh] flex items-center bg-[#FDFCF6] dark:bg-[#0a1a12] overflow-hidden pt-20 font-serif">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]" />

      <motion.div
        animate={{
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[100px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: isAr ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-800/5 dark:bg-emerald-500/10 border border-emerald-800/10 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-400 text-sm mb-8"
            >
              <Library className="w-4 h-4" />
              <span className="font-bold tracking-wide">
                {isAr
                  ? "منصة العلوم الشرعية والعربية"
                  : "Traditional Learning Platform"}
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-black text-emerald-900 dark:text-emerald-50 mb-8 leading-tight">
              {isAr ? (
                <>
                  اطلب العلم من{" "}
                  <span className="text-emerald-700 dark:text-emerald-400 italic">
                    مهده
                  </span>{" "}
                  <br />
                  على أيدي كبار <span className="text-amber-700">العلماء</span>
                </>
              ) : (
                <>
                  Seek Knowledge From <br />
                  The{" "}
                  <span className="text-emerald-700 dark:text-emerald-400 italic">
                    Masters
                  </span>{" "}
                  Of Science
                </>
              )}
            </h1>

            <p className="text-xl text-emerald-800/70 dark:text-emerald-200/60 leading-relaxed mb-10 max-w-xl">
              {isAr
                ? "دليل شامل للدورات العلمية والشرعية، من القرآن وعلومه إلى اللغة وآدابها."
                : "A comprehensive guide to religious and academic courses, from Quranic sciences to Arabic literature."}
            </p>

            <div className="flex flex-wrap gap-10 items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-800/10 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-800 dark:text-emerald-400">
                  <Scroll className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-emerald-900 dark:text-emerald-50 font-bold text-lg">
                    ٢٠٠+
                  </div>
                  <div className="text-emerald-800/50 dark:text-emerald-200/40 text-xs uppercase tracking-widest font-bold">
                    {isAr ? "متن ودورة" : "Classical Texts"}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center text-amber-700">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-emerald-900 dark:text-emerald-50 font-bold text-lg">
                    ٥٠+
                  </div>
                  <div className="text-emerald-800/50 dark:text-emerald-200/40 text-xs uppercase tracking-widest font-bold">
                    {isAr ? "عالم ومدرس" : "Senior Scholars"}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 p-4 bg-white dark:bg-emerald-900/20 border-8 border-emerald-800/5 dark:border-emerald-500/10 rounded-t-[10rem] shadow-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Classical Books"
                className="w-full h-auto rounded-t-[9rem] opacity-90 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply" />

              {/* Floating Calligraphy Style Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/3 -left-6 z-20 bg-emerald-800 text-white p-4 rounded-xl shadow-xl flex items-center gap-3"
              >
                <Book className="w-5 h-5" />
                <span className="text-sm font-bold">
                  {isAr ? "علوم القرآن" : "Quran Sciences"}
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-1/4 -right-6 z-20 bg-amber-700 text-white p-4 rounded-xl shadow-xl flex items-center gap-3"
              >
                <PenTool className="w-5 h-5" />
                <span className="text-sm font-bold">
                  {isAr ? "اللغة العربية" : "Arabic Language"}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
