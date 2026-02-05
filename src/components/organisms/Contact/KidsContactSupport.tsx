import { motion } from "framer-motion";
import { Headphones, Zap, BookOpen, Star } from "lucide-react";
import { cn } from "../../../utils/cn";

interface ContactSupportProps {
  isAr: boolean;
}

export const KidsContactSupport = ({ isAr }: ContactSupportProps) => {
  const supportItems = [
    {
      icon: Headphones,
      title: isAr ? "نحن نسمعك!" : "We Hear You!",
      desc: isAr
        ? "تحدث معنا في أي وقت لنساعدك في مغامرتك"
        : "Talk to us anytime to help you in your adventure",
      color: "text-blue-500",
      bg: "bg-blue-100",
      border: "border-blue-200",
    },
    {
      icon: Zap,
      title: isAr ? "بسرعة الصاروخ" : "Rocket Fast",
      desc: isAr
        ? "سنرد عليك بسرعة كبيرة لنكمل المرح سوياً"
        : "We will answer you very fast to continue the fun together",
      color: "text-emerald-500",
      bg: "bg-emerald-100",
      border: "border-emerald-200",
    },
    {
      icon: BookOpen,
      title: isAr ? "مكتبة الأسرار" : "Secrets Library",
      desc: isAr
        ? "تعرف على كل شيء عن مدرستنا الممتعة"
        : "Learn everything about our fun school",
      color: "text-purple-500",
      bg: "bg-purple-100",
      border: "border-purple-200",
    },
  ];

  return (
    <section className="pb-32 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {supportItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30, rotate: idx % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, rotate: idx % 2 === 0 ? 1 : -1 }}
            className={cn(
              "bg-white border-4 p-10 rounded-[4rem] text-center shadow-2xl relative overflow-hidden group transition-all",
              item.border
            )}
          >
            {/* Playful star decoration */}
            <div className="absolute -top-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Star className={cn("w-16 h-16 fill-current", item.color)} />
            </div>

            <div
              className={cn(
                "w-20 h-20 mx-auto mb-8 rounded-[2rem] flex items-center justify-center transition-all duration-500 shadow-lg group-hover:scale-110 group-hover:rotate-12",
                item.bg,
                item.color
              )}
            >
              <item.icon className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black mb-4 text-slate-800 font-din">
              {item.title}
            </h3>
            <p className="text-slate-500 text-lg font-bold leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
