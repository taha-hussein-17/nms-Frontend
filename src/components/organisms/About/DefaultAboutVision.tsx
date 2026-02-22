import { Reveal } from "../../atoms/Reveal";
import { motion } from "framer-motion";
import { Award, Target, Eye } from "lucide-react";
import { cn } from "../../../utils/cn";

interface AboutVisionProps {
  isAr: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
}

export const DefaultAboutVision = ({ isAr, t }: AboutVisionProps) => {
  return (
    <section className="container mx-auto px-4 mt-16 relative z-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Image Side */}
        <div className="lg:col-span-6">
          <Reveal>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="relative rounded-[3.5rem] overflow-hidden border-4 border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
                  alt="Our Story"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Experience Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className={cn(
                  "absolute -bottom-10 bg-card/80 glass p-8 rounded-[2.5rem] shadow-2xl border-2 border-primary/20 backdrop-blur-xl hidden md:block",
                  isAr ? "-left-10" : "-right-10"
                )}
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
                    <Award className="w-9 h-9" />
                  </div>
                  <div>
                    <p className="text-4xl font-black text-foreground">5+</p>
                    <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest">
                      {t("about.stats.years_exp")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>

        {/* Content Side */}
        <div className="lg:col-span-6 space-y-12 lg:pl-12">
          <Reveal>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                {t("about.vision_mission.title")}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                {t("about.vision_mission.description")}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div
                className="group p-8 rounded-[2.5rem] bg-card glass border-2 border-[#C7CED9] hover:border-primary/20 transition-all duration-500 shadow-xl hover:shadow-primary/5"
                style={{ borderColor: "#C7CED9" }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black mb-3">
                  {t("about.vision_mission.mission_title")}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {t("about.vision_mission.mission_desc")}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div
                className="group p-8 rounded-[2.5rem] bg-card glass border-2 border-[#C7CED9] hover:border-primary/20 transition-all duration-500 shadow-xl hover:shadow-primary/5"
                style={{ borderColor: "#C7CED9" }}
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black mb-3">
                  {t("about.vision_mission.vision_title")}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {t("about.vision_mission.vision_desc")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
