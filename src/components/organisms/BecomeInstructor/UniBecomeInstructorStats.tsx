import { Reveal } from "../../atoms/Reveal";
import { Users, BookOpen, Globe, Star } from "lucide-react";
import { type TFunction } from "i18next";

interface BecomeInstructorStatsProps {
  t: TFunction;
}

export const UniBecomeInstructorStats = ({ t }: BecomeInstructorStatsProps) => {
  const stats = [
    {
      label: t("become_instructor.stats.students"),
      value: "50,000+",
      icon: Users,
    },
    {
      label: t("become_instructor.stats.courses"),
      value: "1,200+",
      icon: BookOpen,
    },
    {
      label: t("become_instructor.stats.countries"),
      value: "35+",
      icon: Globe,
    },
    {
      label: t("become_instructor.stats.rating"),
      value: "4.9/5",
      icon: Star,
    },
  ];

  return (
    <section className="container mx-auto px-4 mb-32 font-sans">
      <div className="relative py-16 bg-slate-900 dark:bg-black rounded-xl overflow-hidden shadow-2xl border border-slate-800">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center px-8">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-maroon-600/20 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-maroon-500" />
                  </div>
                </div>
                <div className="text-3xl lg:text-5xl font-bold text-white mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-slate-400 font-semibold uppercase tracking-widest text-[10px]">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
