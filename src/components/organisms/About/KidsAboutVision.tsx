import { motion } from "framer-motion";
import { Award, Target, Eye, Sparkles } from "lucide-react";
import { cn } from "../../../utils/cn";

interface AboutVisionProps {
  isAr: boolean;
}

export const KidsAboutVision = ({ isAr }: AboutVisionProps) => {
  return (
    <section className="container mx-auto px-4 -mt-24 relative z-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Image Side */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Playful blobs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />

            <div className="relative rounded-[5rem] overflow-hidden border-8 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80"
                alt="Fun Learning"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Experience Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className={cn(
                "absolute -bottom-6 bg-white p-6 rounded-[2.5rem] shadow-2xl border-4 border-yellow-400 flex items-center gap-4",
                isAr ? "-left-6" : "-right-6"
              )}
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Award className="w-10 h-10" />
              </div>
              <div>
                <p className="text-3xl font-black text-slate-800 font-din">
                  5+
                </p>
                <p className="text-sm text-slate-500 font-black uppercase">
                  {isAr ? "سنوات من المرح" : "Years of Fun"}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Content Side */}
        <div className="lg:col-span-6 space-y-10">
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: isAr ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black text-slate-800 font-din leading-tight"
            >
              {isAr ? "رحلتنا السحرية" : "Our Magical Journey"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-slate-500 font-bold leading-relaxed"
            >
              {isAr
                ? "بدأنا بحلم كبير: أن نجعل كل طفل يحب التعلم كما يحب اللعب! والآن نحن هنا لنصنع المعجزات سوياً."
                : "We started with a big dream: to make every child love learning as much as they love playing! Now we are here to make miracles together."}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-8 rounded-[3rem] bg-blue-50 border-4 border-blue-100 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute -top-4 -right-4 opacity-10 group-hover:scale-150 transition-transform">
                <Sparkles className="w-20 h-20 text-blue-500" />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-blue-500 text-white flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black mb-3 text-slate-800 font-din">
                {isAr ? "مهمتنا السحرية" : "Our Magic Mission"}
              </h3>
              <p className="text-slate-500 font-bold">
                {isAr
                  ? "أن نمنح كل بطل صغير الأدوات التي يحتاجها ليغير العالم بذكائه."
                  : "To give every little hero the tools they need to change the world with their intelligence."}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-8 rounded-[3rem] bg-emerald-50 border-4 border-emerald-100 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute -top-4 -right-4 opacity-10 group-hover:scale-150 transition-transform">
                <Smile className="w-20 h-20 text-emerald-500" />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-6 shadow-lg">
                <Eye className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black mb-3 text-slate-800 font-din">
                {isAr ? "رؤيتنا البراقة" : "Our Bright Vision"}
              </h3>
              <p className="text-slate-500 font-bold">
                {isAr
                  ? "عالم حيث التعلم هو أكبر مغامرة ممتعة لكل طفل في كل مكان."
                  : "A world where learning is the biggest fun adventure for every child everywhere."}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Smile = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);
