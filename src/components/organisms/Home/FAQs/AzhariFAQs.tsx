import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Book, MessageCircle } from "lucide-react";
import { cn } from "../../../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";

export const AzhariFAQs = () => {
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
    <section className="pt-32 relative overflow-hidden bg-[#fdfbf7] dark:bg-[#1a1f1a] font-serif">
      {/* Decorative Islamic patterns */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0l10 40h40l-30 20 10 40-30-20-30 20 10-40-30-20h40z' fill='%238b7355' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full bg-[#8b7355]/10 border border-[#8b7355]/20 text-[#8b7355] font-bold italic text-sm"
          >
            <Book className="w-4 h-4" />
            <span>
              {isAr ? "دليل الطالب والمعلم" : "Student & Teacher Guide"}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-bold text-[#2d3a2d] dark:text-[#e2e8e2] leading-tight"
          >
            {isAr ? "الأسئلة" : "Common"}
            <span className="text-[#8b7355]">
              {" "}
              {isAr ? "الشائعة" : "Questions"}
            </span>
          </motion.h2>

          <div className="w-24 h-1 bg-[#8b7355] mx-auto opacity-30 rounded-full" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#2d3a2d]/70 dark:text-[#e2e8e2]/70 italic text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t("home.faqs.description")}
          </motion.p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "bg-white dark:bg-[#2d3a2d]/20 border-b-2 transition-all duration-500 rounded-xl overflow-hidden shadow-sm",
                openIndex === i
                  ? "border-[#8b7355]"
                  : "border-transparent hover:border-[#8b7355]/30"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={cn(
                  "w-full px-8 py-6 flex items-center justify-between gap-6 text-right",
                  !isAr && "text-left"
                )}
              >
                <span className="text-lg font-bold text-[#2d3a2d] dark:text-[#e2e8e2] italic leading-tight">
                  {faq.q}
                </span>
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                    openIndex === i
                      ? "bg-[#8b7355] text-white"
                      : "bg-[#8b7355]/5 text-[#8b7355]"
                  )}
                >
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform duration-500",
                      openIndex === i && "rotate-180"
                    )}
                  />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8">
                      <div className="p-6 bg-[#fdfbf7] dark:bg-[#1a1f1a]/40 rounded-lg border-r-4 border-[#8b7355]">
                        <p className="text-[#2d3a2d]/70 dark:text-[#e2e8e2]/70 italic leading-relaxed text-lg">
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

        <div className="mt-20 text-center pb-24">
          <p className="text-[#2d3a2d]/50 dark:text-[#e2e8e2]/50 italic mb-4">
            {isAr ? "لم تجد ضالتك؟" : "Didn't find what you are looking for?"}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-[#8b7355] font-bold border-b border-[#8b7355]/30 hover:border-[#8b7355] transition-all pb-1"
          >
            <MessageCircle className="w-4 h-4" />
            {isAr ? "تواصل معنا مباشرة" : "Contact us directly"}
          </a>
        </div>
      </div>
    </section>
  );
};
