import { HelpCircle, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface KidsCourseFAQProps {
  faqs: {
    q: string;
    a: string;
  }[];
}

export const KidsCourseFAQ = ({ faqs }: KidsCourseFAQProps) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <div className="space-y-12 py-8">
      <div className="text-center space-y-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="inline-block p-4 bg-yellow-100 rounded-full text-yellow-600 mb-4"
        >
          <HelpCircle size={48} />
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black text-sky-900">
          {isAr ? "أسئلة الأبطال" : "Heroes' Questions"}
        </h2>
        <p className="text-xl text-sky-600 font-bold">
          {isAr
            ? "كل ما تريد معرفته عن رحلتك التعليمية"
            : "Everything you want to know about your learning journey"}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[3rem] shadow-xl border-4 border-sky-100 hover:border-sky-300 transition-all group relative overflow-hidden"
          >
            <Sparkles className="absolute top-4 right-4 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-sky-500 flex items-center justify-center text-white font-black text-2xl shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
                ؟
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-sky-900">{faq.q}</h3>
                <p className="text-lg font-bold text-sky-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gradient-to-r from-orange-400 to-pink-500 p-8 rounded-[3rem] text-white text-center shadow-2xl relative overflow-hidden"
      >
        <Star className="absolute top-2 left-2 text-white/20 w-16 h-16 -rotate-12" />
        <h4 className="text-2xl font-black mb-2">
          {isAr ? "هل لديك سؤال آخر؟" : "Have another question?"}
        </h4>
        <p className="text-lg font-bold opacity-90">
          {isAr
            ? "لا تتردد في سؤالنا، نحن هنا لمساعدتك!"
            : "Don't hesitate to ask us, we're here to help!"}
        </p>
      </motion.div>
    </div>
  );
};
