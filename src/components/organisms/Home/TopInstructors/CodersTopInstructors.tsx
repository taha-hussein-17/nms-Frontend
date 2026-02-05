import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, Terminal, User, Code, Database } from "lucide-react";
import { cn } from "../../../../utils/cn";
import { getMockInstructors } from "../../../../data/mockData";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "../../../atoms/Button";
import { ROUTES } from "../../../../constants/routes";

export const CodersTopInstructors = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const instructors = useMemo(
    () => getMockInstructors(i18n.language).slice(0, 4),
    [i18n.language]
  );

  return (
    <section className="py-20 bg-black text-green-500 font-mono relative overflow-hidden">
      {/* Code-like background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none overflow-hidden text-[10px] leading-tight">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="whitespace-nowrap">
            {`import { Instructor } from "@nms/core"; const mentor_${i} = new Instructor({ name: "Future Dev", skill: "FullStack" }); `.repeat(10)}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={isRTL ? "text-right" : "text-left"}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-green-500/30 bg-green-500/10 text-xs mb-4">
              <Terminal className="w-3 h-3" />
              <span>./get_mentors.sh --top-rated</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400">
              {"> "} {t("home.top_instructors")}
            </h2>
            <p className="text-lg text-green-600/80 max-w-xl">
              {t("home.learn_from_best")}
            </p>
          </motion.div>

          <Link to={ROUTES.INSTRUCTORS}>
            <Button
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-mono"
            >
              ls -la mentors/ <ArrowRight className={cn("ml-2 w-4 h-4", isRTL && "rotate-180")} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((ins, i) => (
            <motion.div
              key={ins.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="bg-[#1e1e1e] border border-green-500/20 rounded p-6 hover:border-green-500/60 transition-all duration-300 relative overflow-hidden">
                {/* Scanner effect on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-green-500/50 -translate-y-full group-hover:animate-[scan_2s_linear_infinite]" />
                
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto relative">
                    <div className="absolute inset-0 border border-green-500/40 rounded rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                    <img
                      src={ins.image}
                      alt={ins.name}
                      className="w-full h-full object-cover rounded grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400">
                    {ins.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-xs text-green-600">
                    <Code className="w-3 h-3" />
                    <span>{ins.specialty}</span>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-[10px] text-green-700 font-bold border-t border-green-500/10">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>ID: {ins.id.slice(0, 8)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Database className="w-3 h-3" />
                      <span>{ins.rating}ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
      `}</style>
    </section>
  );
};
