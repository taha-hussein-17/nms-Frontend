import { Reveal } from "../../atoms/Reveal";
import { Users, BookOpen, Globe, Star } from "lucide-react";
import { type TFunction } from "i18next";

interface BecomeInstructorStatsProps {
  t: TFunction;
}

export const AzhariBecomeInstructorStats = ({
  t,
}: BecomeInstructorStatsProps) => {
  const stats = [
    {
      label: t("become_instructor.stats.students"),
      value: "٥٠ ألف+",
      icon: Users,
    },
    {
      label: t("become_instructor.stats.courses"),
      value: "١٠٠٠+",
      icon: BookOpen,
    },
    {
      label: t("become_instructor.stats.countries"),
      value: "٢٥+",
      icon: Globe,
    },
    {
      label: t("become_instructor.stats.rating"),
      value: "٤.٩",
      icon: Star,
    },
  ];

  return (
    <section
      className="mx-auto  m-auto font-serif  lg:w-3/4"
      style={{ width: "100vw" }}
    >
      <div className="relative py-20 m-auto  dark:bg-[#1a1f1a] border-y-2 border-[#8b7355]/20 overflow-hidden">
        {/* Decorative pattern background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l5 25h25l-20 15 5 25-20-15-20 15 5-25-20-15h25z' fill='%238b7355'/%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 grid m-auto grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="space-y-4 m-auto group">
                <div className="flex justify-center mb-2">
                  <div className="p-2 bg-[#8b7355]/10 rounded-full">
                    <stat.icon className="w-5 h-5 text-[#8b7355]" />
                  </div>
                </div>
                <div className="text-4xl lg:text-6xl font-bold text-[#2d3a2d] dark:text-[#e2e8e2] mb-2 transition-transform duration-500 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-[#8b7355] font-bold italic tracking-wide text-sm">
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
