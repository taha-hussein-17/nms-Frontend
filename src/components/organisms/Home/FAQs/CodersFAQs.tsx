import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Code, Terminal } from "lucide-react";
import { cn } from "../../../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";

export const CodersFAQs = () => {
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
    <section className="pt-32 relative overflow-hidden bg-black font-mono">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-widest"
          >
            <Terminal className="w-3 h-3" />
            <span>{isAr ? "مركز التعليمات" : "INSTRUCTION_CENTER"}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-black text-white tracking-tighter uppercase"
          >
            {isAr ? "الأسئلة" : "QUERY"}
            <span className="text-emerald-500">_RESOLVER</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-emerald-500/60 font-medium max-w-2xl mx-auto"
          >
            {"> "} {t("home.faqs.description")}
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "border border-emerald-500/20 bg-emerald-500/5 transition-all duration-300",
                openIndex === i
                  ? "border-emerald-500/50 bg-emerald-500/10"
                  : "hover:border-emerald-500/30"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={cn(
                  "w-full px-6 py-5 flex items-center justify-between gap-4 text-left",
                  isAr && "text-right"
                )}
              >
                <div className="flex items-center gap-4">
                  <span className="text-emerald-500/30 text-[10px] font-bold">
                    0x0{i + 1}
                  </span>
                  <span className="text-white font-bold text-sm uppercase tracking-tight">
                    {faq.q}
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-emerald-500 transition-transform duration-300",
                    openIndex === i && "rotate-180"
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
                    <div className="px-14 pb-6">
                      <div className="flex gap-2 mb-2">
                        <Code className="w-3 h-3 text-emerald-500/40" />
                        <span className="text-[10px] text-emerald-500/40 uppercase font-bold">
                          RETURN_VALUE:
                        </span>
                      </div>
                      <p className="text-emerald-500/70 text-sm leading-relaxed border-l border-emerald-500/20 pl-4">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center pb-24">
          <div className="inline-block p-4 border border-dashed border-emerald-500/20 text-emerald-500/40 text-[10px] uppercase">
            {isAr ? "ما زلت تبحث عن إجابة؟" : "STILL_NEED_HELP?"}
            <a
              href="/contact"
              className="ml-2 text-emerald-500 underline hover:text-emerald-400 transition-colors"
            >
              {isAr ? "افتح تذكرة دعم" : "OPEN_SUPPORT_TICKET"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
