import { Reveal } from "../../atoms/Reveal";
import { Users, Award, Zap, Sparkles } from "lucide-react";
import { cn } from "../../../utils/cn";

interface AboutStatsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
}

export const DefaultAboutStats = ({ t }: AboutStatsProps) => {
  const stats = [
    {
      label: t("about.stats.students"),
      value: "10K+",
      icon: Users,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      label: t("about.stats.instructors"),
      value: "200+",
      icon: Award,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      label: t("about.stats.courses"),
      value: "500+",
      icon: Zap,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      label: t("about.stats.hours"),
      value: "20K+",
      icon: Sparkles,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <section className="py-32 bg-secondary/20 relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-card glass border-2 border-primary/10 rounded-[4rem] p-12 md:p-20 shadow-2xl shadow-black/5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
            {stats.map((stat, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="text-center group">
                  <div
                    className={cn(
                      "w-20 h-20 mx-auto mb-8 rounded-[2rem] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg",
                      stat.bg,
                      stat.color
                    )}
                  >
                    <stat.icon className="w-10 h-10" />
                  </div>
                  <div className="text-5xl md:text-6xl font-black mb-4 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-black uppercase tracking-[0.2em]">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
