import { useTranslation } from "react-i18next";
import { GraduationCap, Award, Sparkles } from "lucide-react";
import { Reveal } from "../../atoms/Reveal";
import type { Education } from "../../../types";
import { motion } from "framer-motion";

interface InstructorEducationProps {
  education: Education[];
}

export const KidsInstructorEducation = ({
  education,
}: InstructorEducationProps) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <Reveal direction="up" delay={0.4}>
      <div className="bg-white dark:bg-slate-800/50 border-4 border-dashed border-blue-200 dark:border-blue-900/50 rounded-[3.5rem] p-10 h-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400/10 rounded-br-[5rem] animate-pulse" />

        <h3 className="text-3xl font-black font-handwritten mb-12 flex items-center gap-4 text-blue-500">
          <div className="p-4 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-500 -rotate-6 shadow-lg shadow-blue-500/10">
            <GraduationCap className="w-8 h-8" />
          </div>
          {isAr ? "رحلتي التعليمية" : "My Learning Journey"}
        </h3>

        <div className="space-y-10">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="flex gap-6 group"
            >
              <div className="w-20 h-20 rounded-[2rem] bg-blue-50 dark:bg-blue-900/20 border-4 border-blue-100 dark:border-blue-800 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:border-blue-400 transition-all duration-500 shadow-lg shadow-blue-500/5">
                <Award className="w-10 h-10 text-blue-500 group-hover:text-white group-hover:rotate-12 transition-all" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                  <span className="text-lg font-black text-blue-500 font-handwritten">
                    {edu.year}
                  </span>
                </div>
                <h4 className="text-2xl font-black mb-2 font-handwritten text-slate-800 dark:text-slate-100 group-hover:text-blue-500 transition-colors">
                  {edu.degree}
                </h4>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-handwritten">
                  {edu.school}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Reveal>
  );
};
