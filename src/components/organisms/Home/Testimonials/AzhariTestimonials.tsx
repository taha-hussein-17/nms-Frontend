import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { cn } from "../../../../utils/cn";

export const AzhariTestimonials = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const testimonials = [
    {
      text: isRTL 
        ? "بفضل الله ثم هذه الأكاديمية، استطعت فهم أصول الفقه بعمق لم أعهده من قبل. جزاهم الله خيراً."
        : "By Allah's grace, then this academy, I was able to understand the principles of Fiqh deeply. May Allah reward them.",
      author: isRTL ? "عبد الله محمد" : "Abdullah Mohamed",
      role: isRTL ? "طالب علم شرعي" : "Student of Sharia",
    },
    {
      text: isRTL
        ? "الدورات هنا تتميز بالوسطية والاعتدال، والعلماء يردون على كل التساؤلات بكل سعة صدر."
        : "The courses here are characterized by moderation, and the scholars answer all questions with great patience.",
      author: isRTL ? "أحمد إبراهيم" : "Ahmed Ibrahim",
      role: isRTL ? "طالب دراسات إسلامية" : "Islamic Studies Student",
    },
    {
      text: isRTL
        ? "أكاديمية رائدة تجمع بين العلم والأدب. أنصح كل من يريد تعلم دينه بشكل صحيح بالانضمام."
        : "A leading academy that combines knowledge and manners. I advise everyone who wants to learn their religion correctly to join.",
      author: isRTL ? "محمود حسن" : "Mahmoud Hassan",
      role: isRTL ? "باحث في التراث" : "Heritage Researcher",
    },
  ];

  return (
    <section className="py-24 bg-[#FDFBF7] dark:bg-[#1A1814] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-emerald-800 text-emerald-800" />
            ))}
          </div>
          <h2 className={cn(
            "text-4xl md:text-5xl font-bold text-slate-900 dark:text-white",
            isRTL ? "font-serif-ar" : "font-serif"
          )}>
            {isRTL ? "تزكيات طلابنا" : "Student Commendations"}
          </h2>
          <div className="w-24 h-1 bg-emerald-800 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-white dark:bg-[#222] p-10 border border-emerald-800/10 shadow-sm"
            >
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-emerald-800/10" />
              
              <div className="mb-8 italic text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                "{test.text}"
              </div>

              <div className="pt-6 border-t border-emerald-800/10">
                <h4 className={cn(
                  "text-xl font-bold text-emerald-800 dark:text-emerald-500",
                  isRTL ? "font-serif-ar" : "font-serif"
                )}>
                  {test.author}
                </h4>
                <p className="text-sm text-slate-500 mt-1">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
