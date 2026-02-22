import { Reveal } from "../../atoms/Reveal";
import { Button } from "../../atoms/Button";
import { Sparkles, BellRing, Rocket } from "lucide-react";

interface AboutHeroProps {
  isAr: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
  handleShowAlert: () => void;
}

export const DefaultAboutHero = ({
  isAr,
  t,
  handleShowAlert,
}: AboutHeroProps) => {
  return (
    <section className="relative bg-[#001133] pt-32 pb-64 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent)] opacity-10" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#EBF0FD] border border-[#0D358C] text-[#0D358C] text-sm font-black uppercase tracking-widest mb-8 backdrop-blur-md">
            <Sparkles className="w-4 h-4" />
            {isAr
              ? "نحن نغير مستقبل التعلم"
              : "We are changing the future of learning"}
          </div>
          <h1 className="text-5xl lg:text-8xl font-black mb-8 text-white leading-[1.1] tracking-tight">
            {t("about.title")}
            <br />
            <span className="text-[#51A2FF]">WAKP Academy</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
            {t("about.description")}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              onClick={handleShowAlert}
              className="rounded-2xl px-10 h-16 text-lg font-black gap-3 shadow-2xl shadow-primary/20 group"
            >
              <BellRing className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>{t("about.show_alert_btn")}</span>
            </Button>
            <Button
              variant="outline"
              className="rounded-2xl px-10 h-16 text-lg font-black gap-3 border-2 border-white/10 hover:bg-transparent hover:scale-105 transition-transform backdrop-blur-md"
            >
              <Rocket className="w-6 h-6" />
              <span>{isAr ? "ابدأ رحلتك" : "Start Your Journey"}</span>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
