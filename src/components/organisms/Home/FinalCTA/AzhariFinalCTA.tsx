import { useTranslation } from "react-i18next";
import { Star, BookOpen, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../../../atoms/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import { cn } from "../../../../utils/cn";

export const AzhariFinalCTA = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <section className="py-24 bg-[#FDFBF7] dark:bg-[#1A1814] relative overflow-hidden">
      {/* Islamic Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0l10 30h30l-25 20 10 30-25-20-25 20 10-30-25-20h30z' fill='%23064e3b' fill-opacity='1'/%3E%3C/svg%3E")` }} 
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-emerald-900 dark:bg-emerald-950 rounded-none p-12 lg:p-24 text-center border-t-8 border-emerald-600 shadow-2xl relative"
        >
          {/* Decorative Elements */}
          <div className="absolute top-6 left-6 opacity-20 text-white">
            <Star size={40} />
          </div>
          <div className="absolute bottom-6 right-6 opacity-20 text-white">
            <Star size={40} />
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-6 py-2 border border-white/20 bg-white/5 text-white/90 text-sm font-bold tracking-widest uppercase"
            >
              <BookOpen size={18} />
              <span>{isAr ? "خيركم من تعلم القرآن وعلمه" : "The best of you are those who learn Quran"}</span>
            </motion.div>

            <h2 className={cn(
              "text-4xl lg:text-7xl font-bold text-white leading-tight",
              isAr ? "font-serif-ar" : "font-serif"
            )}>
              {isAr ? "ابدأ رحلتك في طلب العلم الشرعي" : "Begin Your Journey in Sharia Sciences"}
            </h2>

            <p className="text-emerald-100/70 text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed italic">
              {isAr 
                ? "انضم إلى مجالس العلم المباشرة وتلقَّ العلم عن نخبة من علماء الأزهر الشريف."
                : "Join live knowledge circles and learn from the elite scholars of Al-Azhar."}
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <Link to={ROUTES.REGISTER}>
                <Button
                  size="lg"
                  className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold px-12 h-18 rounded-none text-xl shadow-xl flex items-center gap-3"
                >
                  <span>{isAr ? "سجل الآن" : "Register Now"}</span>
                  {isAr ? <ArrowLeft /> : <ArrowRight />}
                </Button>
              </Link>
            </div>

            <div className="pt-12 text-white/40 text-sm font-serif italic">
              {isAr ? "من سلك طريقاً يلتمس فيه علماً سهل الله له به طريقاً إلى الجنة" : "Whoever takes a path seeking knowledge, Allah will make easy for him a path to Paradise"}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
