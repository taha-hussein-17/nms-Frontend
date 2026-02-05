import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Star, Laugh } from "lucide-react";
import { cn } from "../../../../utils/cn";
import { Button } from "../../../atoms/Button";

export const KidsTestimonials = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: isRTL
        ? "تعلمت كيف أصنع لعبتي الخاصة! كان ذلك رائعاً جداً!"
        : "I learned how to make my own game! It was so cool!",
      author: isRTL ? "أحمد، 10 سنوات" : "Ahmed, 10 years",
      image: "https://illustrations.popsy.co/amber/boy-with-laptop.svg",
      color: "bg-blue-400",
    },
    {
      text: isRTL
        ? "المدربون هنا لطفاء جداً، والموقع سهل الاستخدام!"
        : "The instructors are so nice, and the site is very easy to use!",
      author: isRTL ? "سارة، 8 سنوات" : "Sara, 8 years",
      image: "https://illustrations.popsy.co/amber/girl-with-laptop.svg",
      color: "bg-pink-400",
    },
    {
      text: isRTL
        ? "أحب التحديات التي نحصل عليها بعد كل درس!"
        : "I love the challenges we get after every lesson!",
      author: isRTL ? "ياسين، 12 سنة" : "Yassin, 12 years",
      image: "https://illustrations.popsy.co/amber/student-with-books.svg",
      color: "bg-yellow-400",
    },
  ];

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ scale: 0.5, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-secondary text-secondary-foreground font-black"
          >
            <Laugh className="w-6 h-6" />
            <span>{isRTL ? "أصدقاؤنا المبدعون" : "Our Creative Friends"}</span>
          </motion.div>
          <h2 className="text-5xl lg:text-7xl font-black text-primary">
            {isRTL
              ? "قالوا عن مغامرتهم"
              : "What They Said About Their Adventure"}
          </h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8"
            >
              <div
                className={cn(
                  "w-48 h-48 rounded-full flex items-center justify-center p-4 border-8 border-white shadow-2xl overflow-hidden",
                  testimonials[activeIndex].color
                )}
              >
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].author}
                  className="w-full h-auto"
                />
              </div>

              <div className="relative">
                <Star className="absolute -top-8 -left-8 w-12 h-12 text-yellow-400 animate-pulse" />
                <Star className="absolute -bottom-8 -right-8 w-12 h-12 text-yellow-400 animate-pulse" />
                <p className="text-2xl lg:text-4xl font-black text-foreground leading-tight italic">
                  "{testimonials[activeIndex].text}"
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-black text-primary">
                  {testimonials[activeIndex].author}
                </h4>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Heart
                      key={i}
                      className="w-6 h-6 fill-red-500 text-red-500"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 lg:-left-12">
            <Button
              variant="secondary"
              size="icon"
              onClick={prev}
              className="rounded-full w-14 h-14 shadow-xl border-4 border-white bg-primary text-white"
            >
              <ChevronLeft size={28} />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:-right-12">
            <Button
              variant="secondary"
              size="icon"
              onClick={next}
              className="rounded-full w-14 h-14 shadow-xl border-4 border-white bg-primary text-white"
            >
              <ChevronRight size={28} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
