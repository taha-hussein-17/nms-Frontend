import { Reveal } from "../../atoms/Reveal";
import { Users, BookOpen, Globe, Star } from "lucide-react";
import { type TFunction } from "i18next";

interface BecomeInstructorStatsProps {
  t: TFunction;
}

export const CodersBecomeInstructorStats = ({
  t,
}: BecomeInstructorStatsProps) => {
  const stats = [
    {
      label: t("become_instructor.stats.students"),
      value: "51,200",
      icon: Users,
      suffix: "px",
    },
    {
      label: t("become_instructor.stats.courses"),
      value: "1,024",
      icon: BookOpen,
      suffix: "src",
    },
    {
      label: t("become_instructor.stats.countries"),
      value: "32",
      icon: Globe,
      suffix: "nodes",
    },
    {
      label: t("become_instructor.stats.rating"),
      value: "4.99",
      icon: Star,
      suffix: "score",
    },
  ];

  return (
    <section className="container mx-auto px-4 mb-32 font-mono">
      <div className="relative py-16 bg-black border border-emerald-500/30 overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.1)]">
        {/* Scanning line animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="w-full h-[2px] bg-emerald-500/20 absolute top-0 left-0 animate-[scan_4s_linear_infinite]" />
        </div>

        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="space-y-4 group">
                <div className="flex items-center justify-center gap-2 text-emerald-500/40 text-[10px] uppercase tracking-tighter mb-2">
                  <stat.icon className="w-3 h-3" />
                  <span>DATA_POINT_{index}</span>
                </div>
                <div className="text-4xl lg:text-5xl font-black text-emerald-500 mb-1 tracking-tighter group-hover:glow-sm transition-all">
                  {stat.value}
                </div>
                <div className="text-[10px] text-emerald-500/60 uppercase tracking-widest font-bold">
                  {stat.label}
                  <span className="ml-1 text-emerald-500/20">
                    [{stat.suffix}]
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(800%); }
        }
        .glow-sm {
          text-shadow: 0 0 10px rgba(16,185,129,0.5);
        }
      `,
        }}
      />
    </section>
  );
};
