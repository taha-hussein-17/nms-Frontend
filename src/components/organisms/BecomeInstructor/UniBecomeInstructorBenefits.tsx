import { Reveal } from "../../atoms/Reveal";
import { Users, Award, GraduationCap, ShieldCheck } from "lucide-react";
import { cn } from "../../../utils/cn";
import type { TFunction } from "i18next";

interface BecomeInstructorBenefitsProps {
  t: TFunction;
}

export const UniBecomeInstructorBenefits = ({
  t,
}: BecomeInstructorBenefitsProps) => {
  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: t("become_instructor.benefits.list.audience.title"),
      description: t("become_instructor.benefits.list.audience.desc"),
      color: "text-maroon-700",
      bg: "bg-maroon-50",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: t("become_instructor.benefits.list.income.title"),
      description: t("become_instructor.benefits.list.income.desc"),
      color: "text-blue-700",
      bg: "bg-blue-50",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: t("become_instructor.benefits.list.tools.title"),
      description: t("become_instructor.benefits.list.tools.desc"),
      color: "text-maroon-700",
      bg: "bg-maroon-50",
    },
  ];

  return (
    <section className="py-24 relative z-20 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-maroon-700 dark:text-maroon-400 font-bold uppercase tracking-widest text-sm mb-4 block">
                Professional Advantages
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                {t("become_instructor.benefits.title")}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                {t("become_instructor.benefits.description")}
              </p>
            </Reveal>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-4 text-slate-400">
              <ShieldCheck className="w-12 h-12 opacity-20" />
              <div className="text-xs font-medium uppercase tracking-tighter w-24">
                Verified Educator Program 2026
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="p-8 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-maroon-600/30 transition-all duration-300 group">
                <div className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center mb-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 group-hover:bg-maroon-600 group-hover:text-white transition-all duration-300 shadow-sm",
                  benefit.color
                )}>
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
