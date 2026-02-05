import { motion } from "framer-motion";
import { Sparkles, Star, Rocket, Smile } from "lucide-react";
import { Button } from "../../atoms/Button";

interface AboutHeroProps {
  isAr: boolean;
  handleShowAlert: () => void;
}

export const KidsAboutHero = ({ isAr, handleShowAlert }: AboutHeroProps) => {
  return (
    <section className="relative bg-white pt-32 pb-48 overflow-hidden">
      {/* Playful Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-40 left-[5%] opacity-20 hidden lg:block"
      >
        <Star className="w-20 h-20 text-yellow-500 fill-yellow-500" />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-40 right-[5%] opacity-20 hidden lg:block"
      >
        <Rocket className="w-24 h-24 text-primary" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-primary/10 border-2 border-primary/20 text-primary text-lg font-black uppercase tracking-widest mb-10"
        >
          <Smile className="w-6 h-6" />
          {isAr ? "مغامرة تعليمية مذهلة!" : "Amazing Learning Adventure!"}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-6xl lg:text-9xl font-black mb-10 text-slate-800 leading-[1.1] font-din"
        >
          {isAr ? "من نحن؟" : "Who Are We?"}
          <br />
          <span className="text-primary">WAKP Academy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl text-slate-500 max-w-4xl mx-auto leading-relaxed mb-12 font-bold"
        >
          {isAr
            ? "نحن عائلة كبيرة تحب العلم والمرح! نساعدك لتكون بطلاً خارقاً في كل ما تحب تعلمه."
            : "We are a big family that loves science and fun! We help you become a superhero in everything you love to learn."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8"
        >
          <Button
            onClick={handleShowAlert}
            className="rounded-[2rem] px-12 h-20 text-xl font-black gap-4 shadow-2xl shadow-primary/30 group bg-primary hover:scale-105 transition-transform"
          >
            <Sparkles className="w-8 h-8 group-hover:rotate-12 transition-transform" />
            <span>{isAr ? "اكتشف المفاجآت" : "Discover Surprises"}</span>
          </Button>
          <Button
            variant="outline"
            className="rounded-[2rem] px-12 h-20 text-xl font-black gap-4 border-4 border-primary text-primary hover:bg-primary/5 hover:scale-105 transition-transform"
          >
            <Rocket className="w-8 h-8" />
            <span>{isAr ? "هيا بنا نطير!" : "Let's Fly!"}</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
