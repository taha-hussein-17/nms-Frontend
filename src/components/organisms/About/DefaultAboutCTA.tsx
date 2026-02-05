import { Reveal } from "../../atoms/Reveal";
import { Button } from "../../atoms/Button";

interface AboutCTAProps {
  isAr: boolean;
}

export const DefaultAboutCTA = ({ isAr }: AboutCTAProps) => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="relative rounded-[4rem] overflow-hidden bg-primary p-12 md:p-24 text-center text-white shadow-2xl shadow-primary/20 group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-600 opacity-90" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-10">
            <Reveal>
              <h2 className="text-4xl md:text-7xl font-black leading-tight">
                {isAr
                  ? "جاهز لبدء رحلتك التعليمية معنا؟"
                  : "Ready to start your learning journey with us?"}
              </h2>
              <p className="text-xl md:text-2xl text-white/80 font-medium mt-6">
                {isAr
                  ? "انضم إلى آلاف الطلاب الذين حققوا أحلامهم من خلال دوراتنا الاحترافية"
                  : "Join thousands of students who achieved their dreams through our professional courses"}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap justify-center gap-6">
                <Button className="bg-white text-primary hover:bg-slate-100 rounded-2xl px-12 h-20 text-xl font-black shadow-2xl transition-all hover:-translate-y-1">
                  {isAr ? "استكشف الدورات الآن" : "Explore Courses Now"}
                </Button>
                <Button
                  variant="outline"
                  className="bg-white text-primary hover:bg-slate-100 rounded-2xl px-12 h-20 text-xl font-black shadow-2xl transition-all hover:-translate-y-1"
                >
                  {isAr ? "تواصل معنا" : "Contact Us"}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
