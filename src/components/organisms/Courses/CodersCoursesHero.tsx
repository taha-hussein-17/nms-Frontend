import { motion } from "framer-motion";
import { Terminal, Shield, Braces, Binary } from "lucide-react";
import { type TFunction } from "i18next";

interface CoursesHeroProps {
  isAr: boolean;
  t: TFunction;
}

export const CodersCoursesHero = ({ isAr }: CoursesHeroProps) => {
  return (
    <div className="relative min-h-[60vh] flex items-center bg-[#050505] overflow-hidden pt-20 font-mono">
      {/* Matrix-like Background */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent"
      />

      {/* Floating Binary Code Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          // eslint-disable-next-line react-hooks/purity
          initial={{ y: -100, x: Math.random() * 1000, opacity: 0 }}
          animate={{
            y: 1000,
            opacity: [0, 0.5, 0],
          }}
          transition={{
            // eslint-disable-next-line react-hooks/purity
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            // eslint-disable-next-line react-hooks/purity
            delay: Math.random() * 5,
          }}
          className="absolute text-emerald-500/20 text-xs select-none pointer-events-none"
        >
          {/* eslint-disable-next-line react-hooks/purity */}
          {Math.random() > 0.5 ? "10101011" : "01011001"}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: isAr ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs mb-8"
            >
              <Terminal className="w-4 h-4" />
              <span className="tracking-tighter uppercase font-bold">
                {isAr ? "دليل الدورات البرمجية" : "COURSE_REPOSITORY_V2.0"}
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-none tracking-tighter">
              {isAr ? (
                <>
                  <span className="text-emerald-500">BUILD</span> المستقبل{" "}
                  <br />
                  بأحدث <span className="text-blue-500">الكود</span>
                </>
              ) : (
                <>
                  <span className="text-emerald-500">COMPILE</span> YOUR <br />
                  DREAM <span className="text-blue-500">SKILLS</span>
                </>
              )}
            </h1>

            <p className="text-lg text-emerald-500/60 leading-relaxed mb-10 max-w-xl">
              {isAr
                ? "تصفح مستودعنا التعليمي الضخم. من تطوير الويب إلى الذكاء الاصطناعي، ابدأ رحلتك البرمجية الآن."
                : "Browse our extensive course repository. From Web Dev to AI, initialize your coding career here."}
            </p>

            <div className="flex flex-wrap gap-8 items-center border-l-2 border-emerald-500/20 pl-6 rtl:border-l-0 rtl:border-r-2 rtl:pr-6">
              <div>
                <div className="text-white font-mono text-2xl font-bold">
                  128+
                </div>
                <div className="text-emerald-500/50 text-xs uppercase tracking-widest">
                  {isAr ? "مستودع دورات" : "Course Repos"}
                </div>
              </div>
              <div className="w-px h-10 bg-emerald-500/10" />
              <div>
                <div className="text-white font-mono text-2xl font-bold">
                  64k+
                </div>
                <div className="text-emerald-500/50 text-xs uppercase tracking-widest">
                  {isAr ? "مطور نشط" : "Active Devs"}
                </div>
              </div>
              <div className="w-px h-10 bg-emerald-500/10" />
              <div className="flex items-center gap-2 text-blue-500">
                <Shield className="w-5 h-5" />
                <span className="text-white font-bold">SECURE_LEARNING</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-lg shadow-2xl overflow-hidden group">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 border-b border-emerald-500/10 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="text-[10px] text-emerald-500/30 ml-4">
                  bash --explore-courses
                </span>
              </div>

              <div className="relative rounded-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Code"
                  className="w-full h-auto opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay" />
              </div>

              {/* Floating Tech Badges */}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-20 -left-6 z-20 bg-black/80 border border-emerald-500/30 p-3 rounded flex items-center gap-3"
              >
                <Braces className="text-emerald-500 w-5 h-5" />
                <span className="text-emerald-500 text-xs font-bold">
                  FULLSTACK_JS
                </span>
              </motion.div>

              <motion.div
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-20 -right-6 z-20 bg-black/80 border border-blue-500/30 p-3 rounded flex items-center gap-3"
              >
                <Binary className="text-blue-500 w-5 h-5" />
                <span className="text-blue-500 text-xs font-bold">ALGO_V1</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
