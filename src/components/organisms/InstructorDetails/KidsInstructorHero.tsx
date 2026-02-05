import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Star,
  Users,
  Calendar,
  Sparkles,
  Rocket,
  Heart,
  Palette,
  Cloud,
} from "lucide-react";
import { Button } from "../../atoms/Button";
import { Reveal } from "../../atoms/Reveal";
import { cn } from "../../../utils/cn";
import type { Instructor } from "../../../types";

interface InstructorHeroProps {
  instructor: Instructor;
}

export const KidsInstructorHero = ({ instructor }: InstructorHeroProps) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Playful Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 text-blue-400/20"
        >
          <Cloud size={120} fill="currentColor" />
        </motion.div>
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            rotate: [0, -15, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 text-yellow-400/20"
        >
          <Star size={80} fill="currentColor" />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-40 left-1/4 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side: Fun Profile Picture */}
          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
              className="relative"
            >
              {/* Decorative Frame for Kids */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-[4rem] blur-xl opacity-40 animate-pulse" />

              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[3.5rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover"
                />

                {/* Floating Icons around the image */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-4 right-4 bg-yellow-400 p-3 rounded-2xl shadow-lg"
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute bottom-4 left-4 bg-pink-500 p-3 rounded-2xl shadow-lg"
                >
                  <Heart className="w-6 h-6 text-white fill-current" />
                </motion.div>
              </div>

              {/* Rating Star Badge */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-800 p-6 rounded-[2.5rem] shadow-2xl border-4 border-yellow-400 flex flex-col items-center"
              >
                <div className="flex items-center gap-1 text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-5 h-5 fill-current",
                        i >= Math.floor(instructor.rating) && "opacity-30"
                      )}
                    />
                  ))}
                </div>
                <span className="text-2xl font-black text-primary font-handwritten">
                  {instructor.rating} {isAr ? "نجوم!" : "Stars!"}
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side: Fun Info */}
          <div className="flex-1 text-center lg:text-start">
            <Reveal>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-8 border-2 border-blue-200 dark:border-blue-800/50">
                <Palette className="w-5 h-5 animate-bounce" />
                <span className="text-lg font-black font-handwritten uppercase tracking-widest">
                  {instructor.specialty}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-black mb-8 font-handwritten tracking-wide">
                <span className="text-primary block mb-2">
                  {isAr ? "أهلاً، أنا" : "Hi, I'm"}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient">
                  {isAr ? "أ/ " : "Teacher "} {instructor.name}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl leading-relaxed font-medium italic">
                "{instructor.bio}"
              </p>
            </Reveal>

            {/* Fun Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                {
                  label: isAr ? "بطل صغير" : "Little Heroes",
                  value: instructor.studentsCount,
                  icon: Users,
                  color: "bg-blue-400",
                },
                {
                  label: isAr ? "مغامرة" : "Adventures",
                  value: instructor.coursesCount,
                  icon: Rocket,
                  color: "bg-purple-400",
                },
                {
                  label: isAr ? "وسام" : "Badges",
                  value: instructor.reviewsCount,
                  icon: Star,
                  color: "bg-yellow-400",
                },
                {
                  label: isAr ? "سنة خبرة" : "Years Fun",
                  value: instructor.experience?.length || 0,
                  icon: Calendar,
                  color: "bg-pink-400",
                },
              ].map((stat, idx) => (
                <Reveal key={idx} delay={0.3 + idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -10, rotate: idx % 2 === 0 ? 3 : -3 }}
                    className="p-6 rounded-[3rem] bg-white dark:bg-slate-800 border-4 border-slate-100 dark:border-slate-700 shadow-xl flex flex-col items-center text-center"
                  >
                    <div
                      className={cn(
                        "w-16 h-16 rounded-3xl flex items-center justify-center mb-4 text-white shadow-lg",
                        stat.color
                      )}
                    >
                      <stat.icon className="w-8 h-8" />
                    </div>
                    <div className="text-3xl font-black mb-1 font-handwritten">
                      {stat.value}
                    </div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-tighter">
                      {stat.label}
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            {/* Fun Actions */}
            <Reveal delay={0.7}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <Button
                  size="lg"
                  className="rounded-full px-10 h-20 text-xl font-handwritten group bg-primary hover:bg-primary/90 shadow-[0_10px_30px_rgba(var(--primary),0.3)] hover:shadow-none transition-all duration-300"
                >
                  <Rocket className="w-6 h-6 mr-3 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  {isAr ? "أرسل رسالة مرحة" : "Send a Fun Message"}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-10 h-20 text-xl font-handwritten border-4 border-primary/20 hover:border-primary"
                >
                  <Sparkles className="w-6 h-6 mr-3 text-yellow-500" />
                  {isAr ? "شارك مع أصدقائك" : "Share with Friends"}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
