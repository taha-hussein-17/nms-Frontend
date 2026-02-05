import { useTranslation } from "react-i18next";
import { Book, Heart, Users, Scroll, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../../../atoms/Button";
import { cn } from "../../../../utils/cn";

export const AzhariHero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="relative min-h-[90vh] flex items-center pt-8 bg-[#fdfaf5] text-[#1e5f53] font-serif overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="azhari-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#azhari-pattern)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn("space-y-10", isRTL ? "text-right" : "text-left")}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#1e5f53]/10 border border-[#1e5f53]/20">
              <Scroll className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">منارة العلم والمعرفة</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-7xl font-bold leading-tight">
                <span className="block">{t("home.hero_title1")}</span>
                <span className="block text-[#d4af37] italic">{t("home.hero_title2")}</span>
              </h1>
              <p className="text-xl text-[#1e5f53]/80 max-w-xl leading-relaxed">
                {t("home.hero_desc")}
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <Button size="lg" className="bg-[#1e5f53] hover:bg-[#9aaca9]  px-10 rounded-full font-serif text-lg">
                ابدأ رحلتك التعليمية <ArrowRight className={cn("ml-2 w-5 h-5", isRTL && "rotate-180")} />
              </Button>
              <Button variant="outline" className="border-[#1e5f53] text-[#1e5f53] px-10 rounded-full font-serif text-lg hover:bg-[#1e5f53]/5">
                تصفح الدورات
              </Button>
            </div>

            <div className="flex gap-10 pt-6">
              {[
                { icon: Book, label: "منهج شرعي" },
                { icon: Heart, label: "قيم أخلاقية" },
                { icon: Users, label: "نخبة العلماء" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                    <item.icon size={20} />
                  </div>
                  <span className="font-bold text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image/Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-t-[10rem] rounded-b-[2rem] overflow-hidden border-[12px] border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1591604021695-0c69b7c05981?q=80&w=800" 
                alt="Traditional Islamic Library" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -inset-4 border-2 border-[#d4af37]/30 rounded-t-[11rem] rounded-b-[3rem] -z-10" />
            
            {/* Floating Arabic Quote/Card */}
            <div className={cn(
              "absolute bottom-10 bg-white p-6 rounded-2xl shadow-xl border-l-4 border-[#d4af37] max-w-xs",
              isRTL ? "-left-10" : "-right-10"
            )}>
              <p className="text-sm italic text-[#1e5f53] leading-relaxed">
                "يرفع الله الذين آمنوا منكم والذين أوتوا العلم درجات"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
