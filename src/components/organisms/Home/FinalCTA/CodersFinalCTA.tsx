import { useTranslation } from "react-i18next";
import { Terminal, Play, Github } from "lucide-react";
import { Button } from "../../../atoms/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";

export const CodersFinalCTA = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <section className="py-24 bg-black relative overflow-hidden font-mono">
      {/* Matrix-like background effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="flex flex-wrap gap-4 p-4 text-[10px] text-green-500 overflow-hidden">
          {Array.from({ length: 100 }).map((_, i) => (
            // eslint-disable-next-line react-hooks/purity
            <span key={i}>{Math.random() > 0.5 ? "1" : "0"}</span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-2 border-green-500/30 bg-[#0a0a0a] p-12 lg:p-20 text-center relative"
        >
          {/* Decorative Corner Brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-green-500" />
          <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-green-500" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-green-500" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-green-500" />

          <div className="max-w-4xl mx-auto space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-500 text-xs">
              <Terminal size={14} />
              <span>sh deploy.sh --now</span>
            </div>

            <h2 className="text-4xl lg:text-7xl font-bold text-white leading-tight">
              <span className="text-green-500">{"> "}</span>
              {isAr
                ? "جاهز لإطلاق مشروعك الأول؟"
                : "Ready to Deploy Your First App?"}
            </h2>

            <p className="text-green-700/80 text-lg lg:text-xl max-w-2xl mx-auto">
              {isAr
                ? "انضم إلى مجتمعنا التقني وابدأ في بناء مستقبل البرمجيات اليوم. كن جزءاً من الحل."
                : "Join our tech community and start building the future of software today. Be part of the solution."}
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <Link to={ROUTES.REGISTER}>
                <Button
                  size="lg"
                  className="bg-green-500 text-black hover:bg-green-400 font-bold px-10 h-16 rounded-none flex items-center gap-3"
                >
                  <Play size={20} fill="currentColor" />
                  <span>INITIALIZE_REPO</span>
                </Button>
              </Link>
              <Link to={ROUTES.COURSES}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-500/30 text-green-500 hover:bg-green-500/10 font-bold px-10 h-16 rounded-none flex items-center gap-3"
                >
                  <Github size={20} />
                  <span>VIEW_STACK</span>
                </Button>
              </Link>
            </div>

            <div className="pt-8 flex items-center justify-center gap-8 text-[10px] text-green-900 uppercase tracking-widest">
              <span>Status: Ready</span>
              <span>Uptime: 99.9%</span>
              <span>Peers: 12k+</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
