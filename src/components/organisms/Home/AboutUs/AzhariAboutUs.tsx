import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Book, Users, Star } from "lucide-react";
import { cn } from "../../../../utils/cn";

export const AzhariAboutUs = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="py-24 bg-[#FDFBF7] dark:bg-[#1A1814] relative overflow-hidden">
      {/* Decorative Border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-emerald-800 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block p-2 border-2 border-emerald-800/20 mb-4">
            <Star className="w-6 h-6 text-emerald-700" />
          </div>
          <h2
            className={cn(
              "text-4xl md:text-5xl font-bold text-slate-900 dark:text-white",
              isRTL ? "font-serif-ar" : "font-serif"
            )}
          >
            {t("home.about.title") || "Our Message"}
          </h2>
          <div className="w-24 h-1 bg-emerald-800 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-full border-8 border-emerald-50 dark:border-emerald-900/20 overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&h=800&fit=crop"
                alt="Azhari Education"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-emerald-800 text-white p-8 hidden md:block">
              <p className="text-2xl font-serif italic">" العلم نور "</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-400">
                  <Book className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {isRTL
                      ? "المنهج الأزهري الأصيل"
                      : "Authentic Azhari Curriculum"}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isRTL
                      ? "نعتمد في تعليمنا على المنهج الأزهري الوسطي الذي يجمع بين الأصالة والمعاصرة."
                      : "We base our teaching on the moderate Azhari approach that combines tradition and modernity."}
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-400">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {isRTL ? "صحبة صالحة" : "Good Companionship"}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isRTL
                      ? "نوفر بيئة آمنة تشجع على طلب العلم والتخلق بالأخلاق الكريمة."
                      : "We provide a safe environment that encourages seeking knowledge and good character."}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
