import { useTranslation } from "react-i18next";
import { Reveal } from "../../atoms/Reveal";
import { Star, Rocket, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export const KidsRegisterBenefits = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const items = [
    {
      icon: Star,
      title: isAr ? "عالم من المرح" : "World of Fun",
      desc: isAr
        ? "تعلم بطريقة ممتعة مع ألعاب وتحديات مشوقة"
        : "Learn in a fun way with exciting games and challenges",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/20",
    },
    {
      icon: Rocket,
      title: isAr ? "رحلة الإبداع" : "Creative Journey",
      desc: isAr
        ? "اكتشف مواهبك وابدأ رحلتك نحو النجوم"
        : "Discover your talents and start your journey to the stars",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20",
    },
    {
      icon: Trophy,
      title: isAr ? "جوائز رائعة" : "Cool Rewards",
      desc: isAr
        ? "اجمع النقاط واحصل على أوسمة وجوائز مميزة"
        : "Collect points and get special badges and rewards",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20",
    },
  ] as const;

  return (
    <div className="space-y-6 pt-10">
      {items.map((item, idx) => (
        <Reveal key={idx} delay={0.2 + idx * 0.1}>
          <motion.div
            whileHover={{ scale: 1.02, x: isAr ? -10 : 10 }}
            className="flex items-start gap-6 p-4 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div
              className={`w-16 h-16 rounded-2xl ${item.bgColor} border ${item.borderColor} flex items-center justify-center ${item.color} shadow-lg shadow-black/20`}
            >
              <item.icon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white mb-2 font-handwritten">
                {item.title}
              </h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        </Reveal>
      ))}
    </div>
  );
};
