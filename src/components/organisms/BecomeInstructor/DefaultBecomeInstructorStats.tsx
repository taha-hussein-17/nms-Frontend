import { Reveal } from "../../atoms/Reveal";
import { Users, BookOpen, Globe, Star } from "lucide-react";
import { type TFunction } from "i18next";

interface BecomeInstructorStatsProps {
  t: TFunction;
}

export const DefaultBecomeInstructorStats = ({
  t,
}: BecomeInstructorStatsProps) => {
  const stats = [
    {
      label: t("become_instructor.stats.students"),
      value: "50K+",
      icon: Users,
    },
    {
      label: t("become_instructor.stats.courses"),
      value: "1K+",
      icon: BookOpen,
    },
    {
      label: t("become_instructor.stats.countries"),
      value: "25+",
      icon: Globe,
    },
    { label: t("become_instructor.stats.rating"), value: "4.9/5", icon: Star },
  ];

  return (
    <section className="container mx-auto px-4 mb-32 ">
      <div className="relative py-20 bg-[#EBF0FD] rounded-[4rem] overflow-hidden m-auto">
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 place-items-center text-center">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="space-y-4 group">
                <div className="text-4xl lg:text-6xl font-black mb-2 group-hover:scale-110 transition-transform duration-500 text-[#0D358C]">
                  {stat.value}
                </div>
                <div className="text-[#0D358C] font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                  <stat.icon className="w-4 h-4" />
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
