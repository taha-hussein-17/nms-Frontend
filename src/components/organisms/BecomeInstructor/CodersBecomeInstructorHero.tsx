import { motion } from "framer-motion";
import { Terminal, Code, Cpu } from "lucide-react";
import { type TFunction } from "i18next";

interface BecomeInstructorHeroProps {
  isAr: boolean;
  t: TFunction;
}

export const CodersBecomeInstructorHero = ({
  isAr,
}: BecomeInstructorHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden font-mono">
      {/* Matrix background effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-sm mb-8"
          >
            <Terminal className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest">
              {isAr ? "نظام المعلمين v2.0" : "INSTRUCTOR_CORE v2.0"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-emerald-500 mb-6 uppercase tracking-tighter"
          >
            {isAr ? "قم بنشر الكود الخاص بك" : "DEPLOY YOUR KNOWLEDGE"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-emerald-500/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {isAr
              ? "انضم إلى نخبة المطورين وقم بتدريس الجيل القادم من المبرمجين. حول خبرتك إلى محتوى تعليمي تقني."
              : "Join the elite developers and teach the next generation of coders. Convert your expertise into high-impact technical content."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <button className="px-8 py-4 bg-emerald-500 text-black font-black uppercase tracking-widest hover:bg-emerald-400 transition-colors flex items-center gap-3">
              <Code className="w-5 h-5" />
              {isAr ? "ابدأ التدريس الآن" : "START_DEPLOYMENT"}
            </button>
            <button className="px-8 py-4 border-2 border-emerald-500/40 text-emerald-500 font-black uppercase tracking-widest hover:bg-emerald-500/5 transition-colors flex items-center gap-3">
              <Cpu className="w-5 h-5" />
              {isAr ? "كيف يعمل النظام؟" : "SYSTEM_SPECS"}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
