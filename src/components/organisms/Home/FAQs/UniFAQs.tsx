import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, HelpCircle, Mail } from "lucide-react";
import { cn } from "../../../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";

export const UniFAQs = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t("home.faqs.q1"), a: t("home.faqs.a1") },
    { q: t("home.faqs.q2"), a: t("home.faqs.a2") },
    { q: t("home.faqs.q3"), a: t("home.faqs.a3") },
    { q: t("home.faqs.q4"), a: t("home.faqs.a4") },
    { q: t("home.faqs.q5"), a: t("home.faqs.a5") },
  ];

  return (
    <section className="pt-32 relative overflow-hidden bg-slate-50 dark:bg-slate-950 font-sans border-y border-slate-200 dark:border-slate-800">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#641b1b_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-maroon-600/10 border border-maroon-600/20 text-maroon-600 font-bold uppercase tracking-widest text-xs"
          >
            <HelpCircle className="w-4 h-4" />
            <span>
              {isAr ? "مركز الدعم الأكاديمي" : "Academic Support Center"}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight"
          >
            {isAr ? "الأسئلة" : "Frequently Asked"}
            <span className="text-maroon-700">
              {" "}
              {isAr ? "المتكررة" : "Questions"}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t("home.faqs.description")}
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden transition-all duration-300",
                openIndex === i
                  ? "ring-2 ring-maroon-600/10 border-maroon-600/30 shadow-lg"
                  : "hover:border-slate-300 dark:hover:border-slate-700"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={cn(
                  "w-full px-8 py-6 flex items-center justify-between gap-6 text-left",
                  isAr && "text-right"
                )}
              >
                <span className="text-lg font-bold text-slate-800 dark:text-slate-200 leading-tight">
                  {faq.q}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-slate-400 transition-transform duration-300",
                    openIndex === i && "rotate-180 text-maroon-600"
                  )}
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pt-2">
                      <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg border-l-4 border-maroon-600">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center pb-24">
          <div className="inline-flex items-center gap-6 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
              <Mail className="w-4 h-4" />
              {isAr ? "هل لديك استفسار آخر؟" : "Still have questions?"}
            </div>
            <a
              href="/contact"
              className="text-maroon-700 font-bold hover:text-maroon-800 transition-colors border-b border-maroon-700/30"
            >
              {isAr ? "راسلنا الآن" : "Email Support"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
