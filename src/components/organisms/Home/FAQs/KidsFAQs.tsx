import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Sparkles,
  Stars,
} from "lucide-react";
import { cn } from "../../../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";

export const KidsFAQs = () => {
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
    <section className="py-24 relative overflow-hidden bg-[#F0F9FF]">
      {/* Playful background shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-200/40 rounded-full blur-3xl animate-bounce" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-blue-500 text-white font-black shadow-xl"
          >
            <HelpCircle size={24} />
            <span className="text-lg">
              {isAr ? "نحن هنا لمساعدتك!" : "We're here to help!"}
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-black text-slate-800 tracking-tight leading-tight">
            {isAr ? "لديك" : "Have"}
            <span className="text-blue-500 block lg:inline">
              {" "}
              {isAr ? "أسئلة محيرة؟" : "Fun Questions?"}
            </span>
          </h2>

          <p className="text-2xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? "لا تقلق يا بطل! لقد جمعنا لك كل ما تحتاج لمعرفته في مكان واحد ممتع."
              : "Don't worry, hero! We've gathered everything you need to know in one fun place."}
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group bg-white border-4 rounded-[3rem] overflow-hidden transition-all duration-300",
                openIndex === i
                  ? "border-blue-400 shadow-2xl scale-[1.02]"
                  : "border-slate-100 hover:border-blue-200 shadow-sm"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={cn(
                  "w-full px-10 py-10 flex items-center justify-between gap-8 transition-all duration-300",
                  !isAr && "flex-row-reverse"
                )}
              >
                <div
                  className={cn(
                    "w-16 h-16 rounded-[2rem] flex items-center justify-center transition-all duration-300 shrink-0",
                    openIndex === i
                      ? "bg-blue-500 text-white rotate-12 shadow-xl shadow-blue-200"
                      : "bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500"
                  )}
                >
                  <ChevronDown
                    size={32}
                    className={cn(
                      "transition-transform duration-500",
                      openIndex === i && "rotate-180"
                    )}
                  />
                </div>
                <span
                  className={cn(
                    "font-black text-2xl lg:text-3xl text-slate-800 transition-colors flex-grow leading-tight",
                    openIndex === i
                      ? "text-blue-500"
                      : "group-hover:text-blue-500",
                    isAr ? "text-right" : "text-left"
                  )}
                >
                  {faq.q}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "backOut" }}
                  >
                    <div className="px-10 pb-12">
                      <div className="h-2 w-20 bg-blue-100 rounded-full mb-10 mx-auto lg:mx-0" />
                      <p
                        className={cn(
                          "text-slate-500 font-black text-xl leading-relaxed",
                          isAr ? "text-right" : "text-left"
                        )}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 p-10 bg-white rounded-[4rem] border-8 border-slate-50 shadow-xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 group-hover:scale-125 transition-transform">
            <Sparkles size={100} className="text-blue-500" />
          </div>
          <div className="absolute bottom-0 left-0 p-8 opacity-10 -rotate-12 group-hover:scale-125 transition-transform">
            <Stars size={100} className="text-yellow-500" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="w-20 h-20 rounded-[2rem] bg-yellow-400 flex items-center justify-center text-white shadow-lg rotate-6">
              <MessageCircle size={40} fill="currentColor" />
            </div>
            <div
              className={cn(
                "text-center md:text-right flex-grow",
                !isAr && "md:text-left"
              )}
            >
              <h4 className="text-3xl font-black text-slate-800 mb-2">
                {isAr ? "هل تريد التحدث معنا؟" : "Want to chat with us?"}
              </h4>
              <p className="text-xl text-slate-500 font-bold">
                {isAr
                  ? "أرسل لنا رسالة وسيرد عليك أحد أبطالنا فوراً!"
                  : "Send us a message and one of our heroes will reply!"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
