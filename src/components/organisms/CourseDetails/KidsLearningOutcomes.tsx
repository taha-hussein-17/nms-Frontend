import { Rocket, Star, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";
import { type Course } from "../../../types";
import { useTranslation } from "react-i18next";

interface LearningOutcomesProps {
  course: Course;
}

export const KidsLearningOutcomes = ({ course }: LearningOutcomesProps) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  if (!course.learningPoints || course.learningPoints.length === 0) return null;

  return (
    <div className="bg-white rounded-[4rem] p-10 md:p-16 shadow-2xl border-8 border-yellow-100 relative overflow-hidden group">
      {/* Fun background shapes */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-100 rounded-full blur-2xl opacity-50" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-100 rounded-full blur-2xl opacity-50" />

      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-sky-900 mb-12 flex items-center justify-center md:justify-start gap-6">
          <div className="w-16 h-16 rounded-[2rem] bg-gradient-to-br from-yellow-400 to-orange-500 text-white flex items-center justify-center shadow-xl rotate-6 group-hover:rotate-0 transition-transform">
            <Rocket className="w-10 h-10" />
          </div>
          {isAr ? "ماذا ستتعلم يا بطل؟" : "What will you learn, Hero?"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {course.learningPoints.map((point: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: isAr ? -10 : 10 }}
              className="bg-sky-50 p-6 rounded-[2.5rem] border-4 border-transparent hover:border-sky-200 transition-all flex items-start gap-5 group/item"
            >
              <div className="w-10 h-10 rounded-full bg-white text-yellow-500 flex items-center justify-center shrink-0 shadow-md group-hover/item:scale-110 group-hover/item:rotate-12 transition-transform">
                <Star className="fill-current w-6 h-6" />
              </div>
              <span className="text-sky-900 font-black text-xl leading-relaxed">
                {point}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 p-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-6">
            <PartyPopper size={48} className="text-yellow-200" />
            <div>
              <h4 className="text-2xl font-black">
                {isAr ? "مستعد للبدء؟" : "Ready to start?"}
              </h4>
              <p className="font-bold opacity-90">
                {isAr ? "رحلة ممتعة بانتظارك!" : "A fun journey awaits you!"}
              </p>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="px-8 py-4 bg-white text-emerald-600 rounded-full font-black text-xl shadow-lg"
          >
            {isAr ? "هيا بنا!" : "Let's Go!"}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
