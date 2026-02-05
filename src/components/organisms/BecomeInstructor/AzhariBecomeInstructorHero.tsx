import { motion } from "framer-motion";
import { Scroll, PenTool, Sparkles } from "lucide-react";
import { type TFunction } from "i18next";

interface BecomeInstructorHeroProps {
  isAr: boolean;
  t: TFunction;
}

export const AzhariBecomeInstructorHero = ({
  isAr,
}: BecomeInstructorHeroProps) => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden font-serif">
      {/* Islamic geometric background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0l10 40h40l-30 20 10 40-30-20-30 20 10-40-30-20h40z' fill='%238b7355' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-[#8b7355]/10 border-2 border-[#8b7355]/20 rounded-full mb-10"
          >
            <Sparkles className="w-4 h-4 text-[#8b7355]" />
            <span className="text-[#8b7355] text-sm font-bold italic">
              {isAr ? "شرف تبليغ العلم" : "The Honor of Teaching"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-[#2d3a2d] dark:text-[#e2e8e2] mb-8 leading-tight"
          >
            {isAr
              ? "كن معلماً وورث العلم النافع"
              : "Become a Teacher and Bequest Knowledge"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#8b7355]/80 text-xl mb-12 max-w-3xl mx-auto leading-relaxed italic"
          >
            {isAr
              ? "قال صلى الله عليه وسلم: 'بلغوا عني ولو آية'. انضم إلى كوكبة العلماء والمعلمين في منصتنا وساهم في بناء جيل يحمل العلم والأدب."
              : "The Prophet (PBUH) said: 'Convey from me even an ayah'. Join the constellation of scholars and teachers on our platform and contribute to building a generation that carries knowledge and etiquette."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <button className="px-10 py-4 bg-[#2d3a2d] text-[#fcfbf7] font-bold text-lg rounded-xl hover:bg-[#8b7355] transition-all shadow-xl shadow-[#2d3a2d]/20 flex items-center gap-3">
              <PenTool className="w-5 h-5" />
              {isAr ? "تقدم بطلب التدريس" : "Apply to Teach"}
            </button>
            <button className="px-10 py-4 border-2 border-[#8b7355]/30 text-[#8b7355] font-bold text-lg rounded-xl hover:bg-[#8b7355]/5 transition-all flex items-center gap-3">
              <Scroll className="w-5 h-5" />
              {isAr ? "منهجنا التعليمي" : "Our Curriculum"}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
