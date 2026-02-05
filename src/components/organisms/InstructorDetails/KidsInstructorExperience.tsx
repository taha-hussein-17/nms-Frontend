import { useTranslation } from "react-i18next";
import { Briefcase, Star, Sparkles } from "lucide-react";
import { Reveal } from "../../atoms/Reveal";
import type { Experience } from "../../../types";
import { motion } from "framer-motion";

interface InstructorExperienceProps {
  experience: Experience[];
}

export const KidsInstructorExperience = ({
  experience,
}: InstructorExperienceProps) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <Reveal direction="up" delay={0.2}>
      <div className="bg-white dark:bg-slate-800/50 border-4 border-dashed border-purple-200 dark:border-purple-900/50 rounded-[3.5rem] p-10 h-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-purple-400/10 rounded-br-[5rem] animate-pulse" />

        <h3 className="text-3xl font-black font-handwritten mb-12 flex items-center gap-4 text-purple-500">
          <div className="p-4 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-500 rotate-6 shadow-lg shadow-purple-500/10">
            <Briefcase className="w-8 h-8" />
          </div>
          {isAr ? "رحلتي العملية" : "My Work Journey"}
        </h3>

        <div className="space-y-12 relative before:absolute before:right-6 before:top-4 before:bottom-4 before:w-1 before:bg-purple-100 dark:before:bg-purple-900/30 before:rounded-full">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: isAr ? -10 : 10 }}
              className="relative pr-16 group"
            >
              <div className="absolute right-2 top-2 w-8 h-8 bg-white dark:bg-slate-700 border-4 border-purple-400 rounded-2xl z-10 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all">
                <Star className="w-3 h-3 text-purple-400 fill-current" />
              </div>

              <span className="inline-block px-5 py-2 rounded-full bg-purple-500 text-white text-sm font-black mb-4 font-handwritten shadow-md">
                {exp.period}
              </span>

              <h4 className="text-2xl font-black mb-2 font-handwritten text-slate-800 dark:text-slate-100 group-hover:text-purple-500 transition-colors">
                {exp.role}
              </h4>

              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <p className="text-lg font-bold text-slate-500 dark:text-slate-400 font-handwritten">
                  {exp.company}
                </p>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-handwritten p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border-2 border-slate-100 dark:border-slate-800">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Reveal>
  );
};
