import { motion } from "framer-motion";
import { Shield, Zap, Heart, Star, Sparkles, Smile } from "lucide-react";
import { cn } from "../../../utils/cn";

interface AboutValuesProps {
  isAr: boolean;
}

export const KidsAboutValues = ({ isAr }: AboutValuesProps) => {
  const values = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: isAr ? "أمان تام" : "Total Safety",
      description: isAr
        ? "بيئة تعليمية آمنة ومريحة لكل طفل، كأنك في منزلك."
        : "A safe and comfortable learning environment for every child, just like home.",
      color: "bg-blue-100 text-blue-500 border-blue-200",
      iconBg: "bg-blue-500",
      decoration: <Shield className="w-20 h-20" />,
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: isAr ? "إبداع بلا حدود" : "Limitless Creativity",
      description: isAr
        ? "نشجعك على التفكير خارج الصندوق وتجربة أشياء جديدة وممتعة."
        : "We encourage you to think outside the box and try new and fun things.",
      color: "bg-yellow-100 text-yellow-600 border-yellow-200",
      iconBg: "bg-yellow-500",
      decoration: <Sparkles className="w-20 h-20" />,
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: isAr ? "حب وتعاون" : "Love & Cooperation",
      description: isAr
        ? "نتعلم كيف نكون أصدقاء رائعين ونساعد بعضنا البعض دائماً."
        : "We learn how to be great friends and always help each other.",
      color: "bg-pink-100 text-pink-500 border-pink-200",
      iconBg: "bg-pink-500",
      decoration: <Heart className="w-20 h-20" />,
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-slate-50">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-full h-20 bg-[url('/waves.svg')] bg-repeat-x opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Star className="w-10 h-10 text-primary fill-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 text-slate-800 font-din"
          >
            {isAr ? "قيمنا الرائعة" : "Our Awesome Values"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-slate-500 font-bold"
          >
            {isAr
              ? "هذه هي القواعد التي تجعل مدرستنا أفضل مكان في العالم!"
              : "These are the rules that make our school the best place in the world!"}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15, rotate: index % 2 === 0 ? 1 : -1 }}
              className={cn(
                "p-12 rounded-[4rem] border-4 text-center relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all",
                value.color
              )}
            >
              {/* Background Decoration */}
              <div className="absolute -top-6 -right-6 opacity-5 group-hover:scale-125 transition-transform duration-700">
                {value.decoration}
              </div>

              <div
                className={cn(
                  "w-24 h-24 rounded-[2.5rem] flex items-center justify-center mb-8 mx-auto text-white shadow-lg group-hover:rotate-12 transition-transform duration-500",
                  value.iconBg
                )}
              >
                {value.icon}
              </div>
              <h3 className="text-3xl font-black mb-6 font-din">
                {value.title}
              </h3>
              <p className="text-lg font-bold leading-relaxed opacity-80">
                {value.description}
              </p>

              {/* Bottom Smile Icon */}
              <div className="mt-8 opacity-20 group-hover:opacity-100 transition-opacity">
                <Smile className="w-10 h-10 mx-auto" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
