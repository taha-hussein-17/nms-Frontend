import { motion } from "framer-motion";
import { Sparkles, Star, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

export const KidsRegisterHero = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-yellow-400 text-yellow-900 font-black text-lg shadow-lg"
      >
        <Sparkles size={24} />
        {isAr ? "مرحباً بك يا بطل!" : "Welcome, Hero!"}
      </motion.div>

      <h1 className="text-6xl lg:text-7xl font-black text-sky-900 leading-[1.1]">
        {isAr ? "اصنع عالمك" : "Create Your"}
        <br />
        <span className="text-pink-500 block mt-2">
          {isAr ? "الخاص في أكاديميتنا!" : "Own World at Academy!"}
        </span>
      </h1>

      <div className="flex items-center gap-6 mt-10">
        <div className="w-20 h-20 rounded-[2rem] bg-sky-500 flex items-center justify-center text-white shadow-xl rotate-12">
          <Rocket size={40} />
        </div>
        <p className="text-2xl text-sky-700 font-black leading-relaxed max-w-sm">
          {isAr
            ? "استعد لمغامرة تعليمية لا تُنسى مع أصدقاء جدد!"
            : "Get ready for an unforgettable educational adventure with new friends!"}
        </p>
      </div>

      <div className="flex gap-4">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            className="text-yellow-400"
          >
            <Star fill="currentColor" size={32} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
