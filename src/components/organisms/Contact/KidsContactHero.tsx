import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Star } from "lucide-react";

interface ContactHeroProps {
  isAr: boolean;
}

export const KidsContactHero = ({ isAr }: ContactHeroProps) => {
  return (
    <section className="relative bg-white pt-32 pb-48 overflow-hidden">
      {/* Playful Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-40 left-[10%] opacity-20 hidden lg:block"
      >
        <Star className="w-16 h-16 text-yellow-500 fill-yellow-500" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-40 right-[10%] opacity-20 hidden lg:block"
      >
        <Sparkles className="w-20 h-20 text-primary" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-primary/10 border-2 border-primary/20 text-primary text-lg font-black uppercase tracking-widest mb-10"
        >
          <MessageCircle className="w-6 h-6" />
          {isAr ? "نحن نحب الدردشة!" : "We Love to Chat!"}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-6xl lg:text-9xl font-black mb-10 text-slate-800 leading-[1.1] font-din"
        >
          {isAr ? "أهلاً بك" : "Hello"}
          <br />
          <span className="text-primary">
            {isAr ? "في عالمنا الممتع" : "In Our Fun World"}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl text-slate-500 max-w-4xl mx-auto leading-relaxed mb-12 font-bold"
        >
          {isAr
            ? "هل لديك سؤال عن مغامراتنا التعليمية؟ نحن هنا لنساعدك بكل حب وسعادة!"
            : "Have a question about our learning adventures? We are here to help you with love and happiness!"}
        </motion.p>
      </div>
    </section>
  );
};
