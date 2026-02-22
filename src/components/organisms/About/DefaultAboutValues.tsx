import { Reveal } from "../../atoms/Reveal";
import { Shield, Zap, Users } from "lucide-react";
import { cn } from "../../../utils/cn";

interface AboutValuesProps {
  isAr: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
}

export const DefaultAboutValues = ({ isAr, t }: AboutValuesProps) => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: t("about.values.quality_title"),
      description: t("about.values.quality_desc"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t("about.values.innovation_title"),
      description: t("about.values.innovation_desc"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("about.values.community_title"),
      description:
        "We believe in the power collective learning in building a promising generation.",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              {t("about.values.title")}
            </h2>
            <p className="text-xl text-muted-foreground font-medium">
              {isAr
                ? "المبادئ التي توجهنا في كل ما نقوم به لخدمة طلابنا"
                : "The principles that guide us in everything we do to serve our students"}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="relative group h-full">
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-[3rem] transition-opacity duration-500",
                    value.color
                  )}
                />
                <div className="p-12 rounded-[3rem] bg-card glass border-2 border-[#C7CED9] hover:border-primary/20 text-center transition-all duration-500 h-full flex flex-col items-center shadow-xl hover:shadow-2xl">
                  <div className="w-20 h-20 rounded-[2rem] bg-secondary/50 text-primary flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg border-2 border-[#0D358C]">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-6 text-[#0D358C]">
                    {value.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                    {value.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
