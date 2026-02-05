import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Star, Heart, Smile, Sparkles, Wand2 } from "lucide-react";
import { cn } from "../../../../utils/cn";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import { Button } from "../../../atoms/Button";

export const KidsInstructorCTA = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const benefits = [
    {
      icon: <Smile className="w-8 h-8" />,
      title: isAr ? "اصنع البسمة" : "Create Smiles",
      color: "bg-pink-400",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: isAr ? "شارك الحب" : "Share Love",
      color: "bg-red-400",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: isAr ? "كن نجماً" : "Be a Star",
      color: "bg-yellow-400",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: isAr ? "أطلق السحر" : "Spread Magic",
      color: "bg-purple-400",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Playful background elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-100/50 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[5rem] p-12 lg:p-24 text-white relative overflow-hidden shadow-2xl">
          {/* Decorative shapes inside the card */}
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Wand2 size={300} className="rotate-12" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 relative z-10 text-center lg:text-right">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-black"
              >
                <Star size={20} fill="currentColor" />
                {isAr
                  ? "نداء لكل المعلمين الأبطال!"
                  : "Calling All Hero Teachers!"}
              </motion.div>

              <h2 className="text-5xl lg:text-7xl font-black leading-tight">
                {isAr ? "هل تريد أن تكون" : "Do you want to be a"}
                <span className="text-yellow-300 block">
                  {isAr ? "بطلاً للأطفال؟" : "Hero for Kids?"}
                </span>
              </h2>

              <p className="text-2xl text-blue-50 font-bold max-w-xl mx-auto lg:mr-0">
                {isAr
                  ? "انضم إلينا وساعد الأطفال على اكتشاف مواهبهم بطرق ممتعة وسحرية!"
                  : "Join us and help kids discover their talents in fun and magical ways!"}
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div
                      className={cn(
                        "w-16 h-16 rounded-3xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform",
                        benefit.color
                      )}
                    >
                      {benefit.icon}
                    </div>
                    <span className="font-black text-sm">{benefit.title}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="pt-6"
              >
                <Link to={ROUTES.BECOME_INSTRUCTOR}>
                  <Button className="h-20 px-12 rounded-full bg-yellow-400 hover:bg-yellow-300 text-slate-900 text-2xl font-black shadow-[0_10px_0_0_rgba(202,138,4,1)] active:shadow-none active:translate-y-2 transition-all">
                    {isAr ? "ابدأ رحلتك السحرية" : "Start Your Magic Journey"}
                  </Button>
                </Link>
              </motion.div>
            </div>

            <div className="relative hidden lg:block">
              <motion.div
                initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-white/20 rounded-[4rem] rotate-6 scale-105 blur-xl" />
                <div className="relative bg-white p-8 rounded-[4rem] shadow-2xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
                    alt="Happy Teacher"
                    className="w-full aspect-[4/5] object-cover rounded-[3rem] group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                    <p className="text-white text-xl font-black">
                      {isAr
                        ? "كن أنت الملهم القادم"
                        : "Be the next inspiration"}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
