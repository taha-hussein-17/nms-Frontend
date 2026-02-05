import { motion } from "framer-motion";
import { Button } from "../../atoms/Button";
import { Sparkles, Rocket, Star, Heart } from "lucide-react";
import { cn } from "../../../utils/cn";
import { type TFunction } from "i18next";
interface BecomeInstructorHeroProps {
  isAr: boolean;
  t: TFunction;
}

export const KidsBecomeInstructorHero = ({
  isAr,
}: BecomeInstructorHeroProps) => {
  return (
    <section className="relative bg-sky-50 pt-32 pb-48 overflow-hidden">
      {/* Fun Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-200/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-200/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-40 left-10 text-sky-300 hidden lg:block"
      >
        <Star size={48} fill="currentColor" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-40 right-10 text-pink-300 hidden lg:block"
      >
        <Heart size={48} fill="currentColor" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={cn(
              "space-y-8 text-center lg:text-right",
              isAr ? "lg:text-right" : "lg:text-left"
            )}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-yellow-400 text-yellow-900 font-black text-lg shadow-lg"
            >
              <Sparkles size={24} />
              {isAr ? "كن بطلاً خارقاً!" : "Become a Superhero!"}
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-black text-sky-900 leading-[1.1]">
              {isAr ? "شارك مواهبك مع" : "Share Your Talents with"}{" "}
              <span className="text-pink-500 block mt-2">
                {isAr ? "أبطالنا الصغار!" : "Our Little Heroes!"}
              </span>
            </h1>

            <p className="text-xl text-sky-700 font-bold leading-relaxed max-w-xl mx-auto lg:mx-0">
              {isAr
                ? "هل تحب تعليم الأطفال؟ انضم إلينا وحوّل مهاراتك إلى مغامرات تعليمية ممتعة ومبهرة!"
                : "Do you love teaching kids? Join us and turn your skills into fun and dazzling educational adventures!"}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <Button
                size="lg"
                className="rounded-full px-12 h-20 text-2xl font-black bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white shadow-[0_8px_0_0_#C2410C] active:shadow-none active:translate-y-2 transition-all flex items-center gap-4"
                onClick={() =>
                  document
                    .getElementById("apply-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span>
                  {isAr ? "هيا نبدأ المغامرة!" : "Start the Adventure!"}
                </span>
                <Rocket size={32} className={cn(isAr && "rotate-180")} />
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-[4rem] blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
                alt="Happy Teacher"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 via-transparent to-transparent"></div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className={cn(
                  "absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-[2.5rem] border-4 border-sky-100 shadow-xl",
                  isAr ? "text-right" : "text-left"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center text-white shadow-lg rotate-3">
                    <Star className="w-8 h-8 fill-current" />
                  </div>
                  <div>
                    <p className="text-sky-900 font-black text-xl">
                      {isAr ? "أكثر من 1000 معلم مرح" : "1000+ Fun Teachers"}
                    </p>
                    <p className="text-sky-600 font-bold">
                      {isAr
                        ? "يصنعون المستقبل بالحب"
                        : "Making the future with love"}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
