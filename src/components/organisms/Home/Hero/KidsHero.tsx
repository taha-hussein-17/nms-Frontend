import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "../../../atoms/Button";
import { Sparkles, Rocket, Palette, Gamepad2 } from "lucide-react";
import { cn } from "../../../../utils/cn";

export const KidsHero = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="relative min-h-[90vh] flex items-center pt-8 bg-background overflow-hidden">
      {/* Fun Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-10 left-10 text-yellow-400 opacity-30"
      >
        <Sparkles size={100} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 right-10 text-blue-400 opacity-30"
      >
        <Rocket size={120} />
      </motion.div>

      <div className="max-w-[1440px] mx-auto px-4 relative z-10 w-full">
        <div className="bg-white/50 backdrop-blur-md rounded-[3rem] p-8 lg:p-16 border-8 border-primary/20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ x: isRTL ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className={cn("space-y-8", isRTL ? "text-right" : "text-left")}
            >
              <div className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-full font-black text-xl shadow-lg transform -rotate-2">
                {isRTL ? "مرحباً يا بطل! 🌟" : "Welcome Hero! 🌟"}
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-primary leading-tight drop-shadow-sm">
                {isRTL
                  ? "تعلم البرمجة باللعب والمرح!"
                  : "Learn Coding with Fun & Games!"}
              </h1>

              <p className="text-2xl font-bold text-muted-foreground">
                {isRTL
                  ? "انضم إلينا في رحلة ممتعة لاستكشاف عالم التكنولوجيا"
                  : "Join us on a fun journey to explore the world of technology"}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="h-16 px-10 text-2xl font-black rounded-full bg-primary hover:bg-primary/90 shadow-[0_10px_0_0_#e63946] active:shadow-none active:translate-y-2 transition-all"
                >
                  {isRTL ? "ابدأ اللعب الآن!" : "Start Playing Now!"}
                </Button>

                <div className="flex items-center gap-4 px-6 bg-white rounded-full border-4 border-secondary shadow-md">
                  <Gamepad2 className="text-secondary" />
                  <span className="font-black text-lg">
                    {isRTL ? "ألعاب تعليمية" : "Educational Games"}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Illustration/Slider Placeholder */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative aspect-square bg-gradient-to-br from-yellow-200 to-orange-300 rounded-[4rem] border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-10"
              >
                <Palette size={400} className="absolute -top-20 -left-20" />
                <Rocket size={400} className="absolute -bottom-20 -right-20" />
              </motion.div>

              <img
                src="https://illustrations.popsy.co/amber/rocket-boy.svg"
                alt="Kids Learning"
                className="w-4/5 h-4/5 z-10 drop-shadow-2xl"
              />

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-10 right-10 bg-white p-4 rounded-3xl shadow-xl z-20 border-4 border-primary"
              >
                <span className="text-3xl">🚀</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
