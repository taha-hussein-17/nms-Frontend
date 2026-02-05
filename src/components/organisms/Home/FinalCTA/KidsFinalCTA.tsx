import { useTranslation } from "react-i18next";
import { Rocket, Zap, Stars, PartyPopper } from "lucide-react";
import { Button } from "../../../atoms/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import { useState, useEffect } from "react";

export const KidsFinalCTA = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const [bubbles, setBubbles] = useState<
    {
      id: number;
      x: number;
      duration: number;
      width: number;
      height: number;
      left: string;
      top: string;
    }[]
  >([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBubbles(
      [...Array(6)].map((_, i) => ({
        id: i,
        x: Math.random() * 50 - 25,
        duration: 5 + Math.random() * 5,
        width: 100 + Math.random() * 150,
        height: 100 + Math.random() * 150,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }))
    );
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[5rem] bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 px-8 py-24 lg:py-32 overflow-hidden text-center shadow-[0_30px_60px_-15px_rgba(251,191,36,0.3)]"
        >
          {/* Bubbles animation */}
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              animate={{
                y: [0, -100, 0],
                x: [0, bubble.x, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: bubble.duration,
                repeat: Infinity,
                delay: bubble.id * 0.5,
              }}
              className="absolute bg-white/20 rounded-full blur-xl pointer-events-none"
              style={{
                width: bubble.width,
                height: bubble.height,
                left: bubble.left,
                top: bubble.top,
              }}
            />
          ))}

          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ rotate: -5 }}
              whileInView={{ rotate: 0 }}
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white text-orange-500 font-black text-lg shadow-xl"
            >
              <PartyPopper size={24} />
              <span>
                {isAr ? "حان وقت المرح والتعلم!" : "Time for Fun & Learning!"}
              </span>
            </motion.div>

            <div className="space-y-8">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="text-5xl lg:text-8xl font-black text-white leading-tight tracking-tight drop-shadow-lg"
              >
                {isAr ? "هل أنت مستعد" : "Are you ready"}
                <span className="block text-yellow-200">
                  {isAr ? "للمغامرة القادمة؟" : "for the next adventure?"}
                </span>
              </motion.h2>

              <p className="text-white text-2xl lg:text-3xl font-black max-w-2xl mx-auto leading-relaxed opacity-90">
                {isAr
                  ? "انضم إلى آلاف الأطفال المبدعين وابدأ رحلتك التعليمية الممتعة اليوم!"
                  : "Join thousands of creative kids and start your fun learning journey today!"}
              </p>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8 pt-8"
            >
              <Link to={ROUTES.LOGIN}>
                <Button
                  size="lg"
                  className="h-24 px-16 rounded-full bg-white text-orange-500 hover:bg-orange-50 text-3xl font-black shadow-[0_12px_0_0_#FDE68A] hover:shadow-[0_8px_0_0_#FDE68A] active:shadow-none active:translate-y-3 transition-all flex items-center gap-4"
                >
                  <Rocket size={32} className="animate-bounce" />
                  <span>{isAr ? "هيا بنا!" : "Let's Go!"}</span>
                </Button>
              </Link>

              <Link to={ROUTES.COURSES}>
                <Button
                  size="lg"
                  className="h-24 px-16 rounded-full bg-white/20 hover:bg-white/30 text-white border-4 border-white/50 text-3xl font-black backdrop-blur-md transition-all flex items-center gap-4"
                >
                  <Zap size={32} />
                  <span>{isAr ? "اكتشف الدورات" : "Explore Courses"}</span>
                </Button>
              </Link>
            </motion.div>

            <div className="pt-16 flex flex-wrap justify-center gap-12 text-white/80">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-black">+10k</span>
                <span className="text-sm font-bold uppercase tracking-widest">
                  {isAr ? "صديق" : "Friends"}
                </span>
              </div>
              <div className="w-px h-12 bg-white/20 hidden sm:block" />
              <div className="flex flex-col items-center">
                <span className="text-4xl font-black">+500</span>
                <span className="text-sm font-bold uppercase tracking-widest">
                  {isAr ? "مغامرة" : "Adventures"}
                </span>
              </div>
              <div className="w-px h-12 bg-white/20 hidden sm:block" />
              <div className="flex flex-col items-center">
                <span className="text-4xl font-black">+100</span>
                <span className="text-sm font-bold uppercase tracking-widest">
                  {isAr ? "مدرب بطل" : "Hero Coaches"}
                </span>
              </div>
            </div>
          </div>

          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 opacity-20 pointer-events-none"
          >
            <Stars size={300} className="text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
