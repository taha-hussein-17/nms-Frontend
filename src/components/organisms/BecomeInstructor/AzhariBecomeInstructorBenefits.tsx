import { Reveal } from "../../atoms/Reveal";
import { Users, BookOpen, PenTool, Sparkles } from "lucide-react";
import { cn } from "../../../utils/cn";
import type { TFunction } from "i18next";
// import { motion } from "framer-motion";

interface BecomeInstructorBenefitsProps {
  t: TFunction;
}

export const AzhariBecomeInstructorBenefits = ({
  t,
}: BecomeInstructorBenefitsProps) => {
  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: t("become_instructor.benefits.list.audience.title"),
      description: t("become_instructor.benefits.list.audience.desc"),
      color: "text-[#2d3a2d]",
      bg: "bg-[#2d3a2d]/10",
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: t("become_instructor.benefits.list.income.title"),
      description: t("become_instructor.benefits.list.income.desc"),
      color: "text-[#8b7355]",
      bg: "bg-[#8b7355]/10",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: t("become_instructor.benefits.list.tools.title"),
      description: t("become_instructor.benefits.list.tools.desc"),
      color: "text-[#2d3a2d]",
      bg: "bg-[#2d3a2d]/10",
    },
  ];

  return (
    <section className="py-24 relative z-20 font-serif bg-[#fdfbf7] dark:bg-[#1a1f1a]">
      {/* Decorative border pattern */}
      <div
        className="absolute top-0 left-0 w-full h-8 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l5 25h25l-20 15 5 25-20-15-20 15 5-25-20-15h25z' fill='%238b7355'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "40px 20px",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <Reveal>
            <div className="flex justify-center mb-6">
              <Sparkles className="text-[#8b7355] w-8 h-8 opacity-40" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#2d3a2d] dark:text-[#e2e8e2]">
              {t("become_instructor.benefits.title")}
            </h2>
            <div className="w-24 h-1 bg-[#8b7355] mx-auto mb-8 rounded-full opacity-30" />
            <p className="text-[#2d3a2d]/70 dark:text-[#e2e8e2]/70 italic text-lg max-w-2xl mx-auto">
              {t("become_instructor.benefits.description")}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="relative p-10 bg-white dark:bg-[#2d3a2d]/20 border border-[#8b7355]/10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 group text-center">
                {/* Islamic corner ornament */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#8b7355]/10 rounded-tr-2xl group-hover:border-[#8b7355]/30 transition-colors" />

                <div
                  className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#8b7355]/20 group-hover:bg-[#8b7355] group-hover:text-white transition-all duration-500",
                    benefit.bg,
                    benefit.color
                  )}
                >
                  {benefit.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-[#2d3a2d] dark:text-[#e2e8e2]">
                  {benefit.title}
                </h3>
                <p className="text-[#2d3a2d]/60 dark:text-[#e2e8e2]/60 leading-relaxed italic">
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
