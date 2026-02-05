import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Sparkles,
  Star,
  Rocket,
  Target,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { type TFunction } from "i18next";
import { Button } from "../../../components/atoms/Button";
import { cn } from "../../../utils/cn";

interface CoursesHeroProps {
  isAr: boolean;
  t: TFunction;
}
export const KidsCoursesHero = ({ isAr }: CoursesHeroProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: isAr ? "مغامرات البرمجة 🚀" : "Coding Adventures 🚀",
      desc: isAr
        ? "تعلم كيف تصنع ألعابك الخاصة وتطبيقاتك المذهلة مع أبطالنا!"
        : "Learn how to make your own games and amazing apps with our heroes!",
      image: "https://illustrations.popsy.co/amber/video-game.svg",
      color: "from-pink-400 to-rose-500",
      icon: Rocket,
    },
    {
      title: isAr ? "عالم الروبوتات 🤖" : "Robot World 🤖",
      desc: isAr
        ? "اكتشف كيف تعمل الروبوتات وقم ببرمجة صديقك الآلي الأول."
        : "Discover how robots work and program your first robotic friend.",
      image: "https://illustrations.popsy.co/amber/robot.svg",
      color: "from-blue-400 to-indigo-500",
      icon: Target,
    },
    {
      title: isAr ? "مختبر المبدعين 🎨" : "Creators Lab 🎨",
      desc: isAr
        ? "صمم عوالم افتراضية وشخصيات ثلاثية الأبعاد خيالية."
        : "Design virtual worlds and imaginary 3D characters.",
      image: "https://illustrations.popsy.co/amber/creative-work.svg",
      color: "from-yellow-400 to-orange-500",
      icon: Star,
    },
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative min-h-[70vh] flex items-center bg-[#FFFAEC] overflow-hidden pt-24 pb-12">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-[4rem] blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-[4rem] blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="relative bg-white rounded-[4rem] border-8 border-primary/20 shadow-[0_20px_0_0_#4ecdc4] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: isAr ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isAr ? 100 : -100 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-16"
            >
              <div
                className={cn("space-y-8", isAr ? "text-right" : "text-left")}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className={cn(
                    "inline-flex items-center gap-3 px-6 py-2 rounded-full text-white font-black shadow-lg",
                    "bg-gradient-to-r",
                    slides[activeSlide].color
                  )}
                >
                  <Sparkles className="w-5 h-5" />
                  <span className="text-lg uppercase">
                    {isAr ? "مغامرة جديدة!" : "New Adventure!"}
                  </span>
                </motion.div>

                <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight">
                  {slides[activeSlide].title}
                </h1>

                <p className="text-2xl font-bold text-slate-600 leading-relaxed">
                  {slides[activeSlide].desc}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    size="lg"
                    className="rounded-full px-10 py-8 text-xl font-black bg-primary hover:bg-primary/90 shadow-[0_8px_0_0_#3bbbb2] active:shadow-none active:translate-y-2 transition-all"
                  >
                    {isAr ? "ابدأ الرحلة الآن!" : "Start Journey Now!"}
                  </Button>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                <motion.img
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={slides[activeSlide].image}
                  alt="Slide illustration"
                  className="w-full h-auto relative z-10 drop-shadow-2xl max-h-[500px] object-contain"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Navigation */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
            <Button
              variant="secondary"
              size="icon"
              onClick={prevSlide}
              className="rounded-full w-14 h-14 bg-white border-4 border-primary/20 shadow-xl hover:bg-primary hover:text-white transition-all"
            >
              <ChevronLeft size={28} />
            </Button>

            <div className="flex gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={cn(
                    "w-4 h-4 rounded-full transition-all duration-300",
                    activeSlide === i
                      ? "w-12 bg-primary shadow-lg"
                      : "bg-primary/20 hover:bg-primary/40"
                  )}
                />
              ))}
            </div>

            <Button
              variant="secondary"
              size="icon"
              onClick={nextSlide}
              className="rounded-full w-14 h-14 bg-white border-4 border-primary/20 shadow-xl hover:bg-primary hover:text-white transition-all"
            >
              <ChevronRight size={28} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
