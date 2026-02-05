import { Reveal } from "../../atoms/Reveal";
import { Terminal, Code, Cpu } from "lucide-react";
import { cn } from "../../../utils/cn";
import type { TFunction } from "i18next";

interface BecomeInstructorBenefitsProps {
  t: TFunction;
}

export const CodersBecomeInstructorBenefits = ({
  t,
}: BecomeInstructorBenefitsProps) => {
  const benefits = [
    {
      icon: <Terminal className="w-6 h-6" />,
      title: t("become_instructor.benefits.list.audience.title"),
      description: t("become_instructor.benefits.list.audience.desc"),
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      code: "const audience = 'Global';",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: t("become_instructor.benefits.list.income.title"),
      description: t("become_instructor.benefits.list.income.desc"),
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
      code: "let income = income + value;",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: t("become_instructor.benefits.list.tools.title"),
      description: t("become_instructor.benefits.list.tools.desc"),
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      code: "import { tools } from 'nms';",
    },
  ];

  return (
    <section className="py-24 relative z-20 font-mono bg-black overflow-hidden">
      {/* Circuit board pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <Reveal>
            <div className="inline-block mb-4 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold tracking-widest uppercase">
              // BENEFITS_MODULE
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tighter">
              {t("become_instructor.benefits.title").toUpperCase()}
            </h2>
            <p className="text-emerald-500/60 font-medium max-w-2xl mx-auto">
              {"> "} {t("become_instructor.benefits.description")}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="relative p-8 border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all duration-300 group overflow-hidden">
                {/* Glitch effect on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/30 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

                <div className="flex items-center justify-between mb-8">
                  <div
                    className={cn(
                      "w-12 h-12 flex items-center justify-center border border-current",
                      benefit.color
                    )}
                  >
                    {benefit.icon}
                  </div>
                  <span className="text-[10px] text-emerald-500/30 uppercase tracking-widest">
                    ID: 0x0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-emerald-500/70 text-sm leading-relaxed mb-6">
                  {benefit.description}
                </p>

                <div className="pt-4 border-t border-emerald-500/10">
                  <code className="text-[10px] text-emerald-500/40">
                    {benefit.code}
                  </code>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
