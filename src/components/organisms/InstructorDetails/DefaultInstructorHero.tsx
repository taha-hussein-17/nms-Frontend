import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Star,
  Users,
  BookOpen,
  Github,
  Twitter,
  Linkedin,
  MapPin,
  Globe,
  MessageCircle,
  Share2,
  Calendar,
} from "lucide-react";
import { Button } from "../../atoms/Button";
import { Reveal } from "../../atoms/Reveal";
import { cn } from "../../../utils/cn";
import type { Instructor } from "../../../types";

interface InstructorHeroProps {
  instructor: Instructor;
}

export const DefaultInstructorHero = ({ instructor }: InstructorHeroProps) => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
      {/* Animated Background Layers */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img
            src={instructor.coverImage}
            alt=""
            className="w-full h-full object-cover blur-sm"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background" />

        {/* Decorative Floating Orbs */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
          {/* Left Side: Immersive Profile Image */}
          <div className="relative group lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative z-10"
            >
              {/* Image Container with Decorative Frames */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-primary/30 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Decorative Frames */}
                <div className="absolute inset-0 border-2 border-primary/20 rounded-[3.5rem] -rotate-6 scale-105 group-hover:rotate-0 transition-transform duration-700" />
                <div className="absolute inset-0 border-2 border-white/10 rounded-[3.5rem] rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-700" />

                {/* Main Image */}
                <div className="relative h-full w-full rounded-[3rem] overflow-hidden border-8 border-background shadow-2xl">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Rating Badge */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-card/80 glass p-5 rounded-[2rem] shadow-2xl border border-white/20 flex flex-col items-center gap-1 min-w-[100px]"
                >
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="text-xl font-black">
                      {instructor.rating}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    {t("instructor.rating")}
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Links - Immersive Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex justify-center gap-4"
            >
              {[
                {
                  icon: Twitter,
                  href: instructor.social?.twitter,
                  color: "hover:bg-sky-500",
                },
                {
                  icon: Linkedin,
                  href: instructor.social?.linkedin,
                  color: "hover:bg-blue-600",
                },
                {
                  icon: Github,
                  href: instructor.social?.github,
                  color: "hover:bg-slate-800",
                },
                {
                  icon: Globe,
                  href: instructor.social?.website,
                  color: "hover:bg-primary",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground transition-all duration-300 group/link",
                    social.color,
                    "hover:text-white hover:scale-110 hover:-translate-y-1"
                  )}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Information & Stats */}
          <div className="flex-1 text-center lg:text-start">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-black uppercase tracking-widest">
                  {instructor.specialty}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
                {isAr ? "د. " : "Dr. "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-600">
                  {instructor.name}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10 text-muted-foreground font-medium">
                <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{instructor.location}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>
                    {t("instructor.joined")} {instructor.joinedDate}
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
                {instructor.bio}
              </p>
            </Reveal>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                {
                  label: t("instructor.students"),
                  value: instructor.studentsCount,
                  icon: Users,
                  color: "text-blue-500",
                },
                {
                  label: t("instructor.courses"),
                  value: instructor.coursesCount,
                  icon: BookOpen,
                  color: "text-green-500",
                },
                {
                  label: t("instructor.reviews"),
                  value: instructor.reviewsCount,
                  icon: Star,
                  color: "text-yellow-500",
                },
                {
                  label: t("instructor.experience"),
                  value: instructor.experience?.length || 0,
                  icon: Calendar,
                  color: "text-purple-500",
                },
              ].map((stat, idx) => (
                <Reveal key={idx} delay={0.4 + idx * 0.1}>
                  <div className="p-6 rounded-[2.5rem] bg-card/50 glass border border-white/10 hover:border-primary/30 transition-all duration-500 group/stat">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 transition-transform duration-500 group-hover/stat:scale-110 group-hover/stat:rotate-6",
                        stat.color
                      )}
                    >
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-black mb-1">{stat.value}</div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Actions */}
            <Reveal delay={0.8}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="rounded-2xl px-8 h-16 text-lg group"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  {t("instructor.message")}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-2xl px-8 h-16 text-lg"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  {t("common.share")}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
