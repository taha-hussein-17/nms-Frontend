import { useTranslation } from "react-i18next";
import { Sparkles, Star, Palette } from "lucide-react";
import { Reveal } from "../../atoms/Reveal";
import { motion } from "framer-motion";

interface InstructorAboutProps {
  bio: string;
  skills: string[];
}

export const KidsInstructorAbout = ({ bio, skills }: InstructorAboutProps) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <section>
      <Reveal>
        <div className="relative bg-white dark:bg-slate-800/50 border-4 border-dashed border-blue-200 dark:border-blue-900/50 rounded-[4rem] p-10 md:p-16 overflow-hidden">
          {/* Fun Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-bl-[5rem] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-400/10 rounded-tr-[5rem] animate-pulse delay-700" />

          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-400/20 rotate-6">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl font-black font-handwritten text-primary tracking-wide">
              {isAr ? "من أنا؟" : "Who am I?"}
            </h2>
          </div>

          <div className="mb-12">
            <p className="text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-handwritten italic p-8 bg-blue-50 dark:bg-blue-900/20 rounded-[3rem] border-2 border-blue-100 dark:border-blue-800/50 relative">
              <span className="absolute -top-4 -left-4 text-6xl text-blue-200 dark:text-blue-800 font-serif">
                "
              </span>
              {bio}
              <span className="absolute -bottom-10 -right-4 text-6xl text-blue-200 dark:text-blue-800 font-serif">
                "
              </span>
            </p>
          </div>

          <h3 className="text-2xl font-black mb-8 font-handwritten flex items-center gap-3 text-pink-500">
            <Palette className="w-8 h-8 animate-bounce" />
            {isAr ? "أنا شاطر في..." : "I am good at..."}
          </h3>

          <div className="flex flex-wrap gap-5">
            {skills.map((skill: string, idx: number) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, rotate: idx % 2 === 0 ? 3 : -3 }}
                className="px-8 py-4 rounded-full bg-white dark:bg-slate-700 border-4 border-slate-100 dark:border-slate-600 font-black font-handwritten text-xl text-primary shadow-lg shadow-black/5 hover:shadow-xl hover:border-primary/30 transition-all flex items-center gap-3 cursor-default"
              >
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
