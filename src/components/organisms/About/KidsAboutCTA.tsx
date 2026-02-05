import { motion } from "framer-motion";
import { Button } from "../../atoms/Button";
import { Sparkles, Rocket, Star, Heart } from "lucide-react";

interface AboutCTAProps {
  isAr: boolean;
}

export const KidsAboutCTA = ({ isAr }: AboutCTAProps) => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[5rem] overflow-hidden bg-gradient-to-br from-primary via-blue-500 to-purple-600 p-12 md:p-24 text-center text-white shadow-2xl group border-8 border-white/20"
        >
          {/* Animated Background Icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-10 opacity-20"
          >
            <Star className="w-20 h-20 fill-white" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-10 right-10 opacity-20"
          >
            <Heart className="w-20 h-20 fill-white" />
          </motion.div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-8xl font-black leading-tight font-din">
                {isAr
                  ? "هل أنت مستعد للمغامرة؟"
                  : "Are You Ready for Adventure?"}
              </h2>
              <p className="text-2xl md:text-3xl text-white/90 font-bold mt-8">
                {isAr
                  ? "انضم إلى أصدقائنا الصغار وابدأ رحلتك السحرية اليوم!"
                  : "Join our little friends and start your magical journey today!"}
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-8"
            >
              <Button className="bg-yellow-400 text-slate-800 hover:bg-yellow-300 rounded-[2.5rem] px-16 h-24 text-2xl font-black shadow-2xl transition-all hover:scale-110 hover:-rotate-2 border-4 border-white flex gap-4 items-center">
                <Rocket className="w-10 h-10" />
                {isAr ? "هيا بنا نبدأ!" : "Let's Start!"}
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 text-white hover:bg-white/20 rounded-[2.5rem] px-16 h-24 text-2xl font-black shadow-2xl transition-all hover:scale-110 hover:rotate-2 border-4 border-white/30 backdrop-blur-md flex gap-4 items-center"
              >
                <Sparkles className="w-10 h-10" />
                {isAr ? "اكتشف المزيد" : "Discover More"}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
