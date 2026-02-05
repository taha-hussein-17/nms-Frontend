import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Heart, Rocket } from "lucide-react";
import { cn } from "../../../../utils/cn";
import { Button } from "../../../atoms/Button";

export const KidsAboutUs = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: isRTL
        ? "مهمتنا: نجعل التعلم متعة!"
        : "Our Mission: Making Learning Fun!",
      desc: isRTL
        ? "نحن هنا لنحول الأكواد البرمجية إلى ألعاب ومغامرات شيقة لكل طفل."
        : "We are here to turn code into games and exciting adventures for every child.",
      icon: Rocket,
      color: "bg-pink-500",
      image: "https://illustrations.popsy.co/amber/space-adventure.svg",
    },
    {
      title: isRTL
        ? "رؤيتنا: جيل مبدع تقنياً"
        : "Our Vision: A Creative Tech Generation",
      desc: isRTL
        ? "نحلم برؤية أطفالنا وهم يبنون تطبيقاتهم وألعابهم الخاصة بكل ثقة."
        : "We dream of seeing our kids build their own apps and games with confidence.",
      icon: Star,
      color: "bg-yellow-400",
      image: "https://illustrations.popsy.co/amber/creative-work.svg",
    },
    {
      title: isRTL
        ? "مجتمعنا: عائلة واحدة كبيرة"
        : "Our Community: One Big Family",
      desc: isRTL
        ? "أكثر من 10 آلاف بطل صغير يتعلمون ويشاركون إبداعاتهم معنا يومياً."
        : "More than 10,000 little heroes learn and share their creations with us daily.",
      icon: Heart,
      color: "bg-red-400",
      image: "https://illustrations.popsy.co/amber/friendship.svg",
    },
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            className="text-4xl lg:text-6xl font-black text-primary drop-shadow-md"
          >
            {isRTL ? "تعرف على عائلتنا! ✨" : "Meet Our Family! ✨"}
          </motion.h2>
          <p className="text-xl font-bold text-muted-foreground">
            {isRTL
              ? "رحلة مليئة بالإبداع والابتكار"
              : "A journey full of creativity and innovation"}
          </p>
        </div>

        <div className="relative bg-white rounded-[4rem] p-8 lg:p-16 shadow-[0_20px_0_0_#4ecdc4] border-8 border-secondary/20 min-h-[500px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ x: isRTL ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isRTL ? 100 : -100, opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full"
            >
              <div
                className={cn("space-y-8", isRTL ? "text-right" : "text-left")}
              >
                <div
                  className={cn(
                    "w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-lg",
                    slides[activeSlide].color
                  )}
                >
                  {(() => {
                    const Icon = slides[activeSlide].icon;
                    return <Icon size={40} />;
                  })()}
                </div>
                <h3 className="text-3xl lg:text-5xl font-black text-foreground">
                  {slides[activeSlide].title}
                </h3>
                <p className="text-xl font-bold text-muted-foreground leading-relaxed">
                  {slides[activeSlide].desc}
                </p>
                <Button
                  size="lg"
                  className="rounded-full px-8 bg-secondary hover:bg-secondary/90 shadow-[0_6px_0_0_#3bbbb2] active:shadow-none active:translate-y-1 transition-all font-black"
                >
                  {isRTL ? "اكتشف المزيد" : "Discover More"}
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl" />
                <img
                  src={slides[activeSlide].image}
                  alt="Feature illustration"
                  className="w-full h-auto relative z-10 drop-shadow-2xl max-h-[400px]"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 lg:-left-8">
            <Button
              variant="secondary"
              size="icon"
              onClick={prevSlide}
              className="rounded-full w-16 h-16 shadow-xl border-4 border-white"
            >
              <ChevronLeft size={32} />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:-right-8">
            <Button
              variant="secondary"
              size="icon"
              onClick={nextSlide}
              className="rounded-full w-16 h-16 shadow-xl border-4 border-white"
            >
              <ChevronRight size={32} />
            </Button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={cn(
                  "h-4 rounded-full transition-all duration-300",
                  activeSlide === i ? "w-12 bg-primary" : "w-4 bg-secondary"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
