import { motion } from "framer-motion";
import { Users, Star, Gift, Sparkles } from "lucide-react";
import { cn } from "../../../utils/cn";
import type { TFunction } from "i18next";

interface BecomeInstructorBenefitsProps {
  t: TFunction;
}

export const KidsBecomeInstructorBenefits = ({
  t,
}: BecomeInstructorBenefitsProps) => {
  const benefits = [
    {
      icon: <Users className="w-10 h-10" />,
      title: t("become_instructor.benefits.list.audience.title"),
      description: t("become_instructor.benefits.list.audience.desc"),
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: t("become_instructor.benefits.list.income.title"),
      description: t("become_instructor.benefits.list.income.desc"),
      color: "text-yellow-500",
      bg: "bg-yellow-100",
    },
    {
      icon: <Gift className="w-10 h-10" />,
      title: t("become_instructor.benefits.list.tools.title"),
      description: t("become_instructor.benefits.list.tools.desc"),
      color: "text-pink-500",
      bg: "bg-pink-100",
    },
  ];

  return (
    <section className="py-32 relative -mt-24 z-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-sky-100 text-sky-600 font-black text-sm uppercase tracking-widest"
          >
            <Sparkles size={20} />
            <span>{t("become_instructor.benefits.title")}</span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-black text-sky-900">
            {t("become_instructor.benefits.description")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="p-12 rounded-[4rem] bg-white border-8 border-sky-50 transition-all duration-500 group shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-[4rem] -z-0 opacity-50 group-hover:scale-110 transition-transform" />

              <div
                className={cn(
                  "w-20 h-20 rounded-[2rem] flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg relative z-10",
                  benefit.bg,
                  benefit.color
                )}
              >
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-black text-sky-900 mb-6 relative z-10">
                {benefit.title}
              </h3>
              <p className="text-sky-600 font-bold text-lg leading-relaxed relative z-10">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
