import { useTranslation } from "react-i18next";
import { Terminal, Code, Cpu, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../../../atoms/Button";
import { cn } from "../../../../utils/cn";

export const CodersHero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="relative min-h-[90vh] flex items-center pt-8 bg-black text-green-500 font-mono overflow-hidden">
      {/* Matrix-like background effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: Terminal Style */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-[#1e1e1e] rounded-lg border border-green-500/30 shadow-2xl overflow-hidden">
              <div className="bg-[#323232] px-4 py-2 flex items-center gap-2 border-b border-green-500/30">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-gray-400 ml-4">main.sh — Wakp-academy</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-2">
                  <span className="text-blue-400">$</span>
                  <span className="text-white">init academy --target "future-devs"</span>
                </div>
                <motion.h1 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  className="text-3xl sm:text-5xl font-bold text-green-400 overflow-hidden whitespace-nowrap border-r-4 border-green-400"
                >
                  {t("home.hero_title2")}
                </motion.h1>
                <p className="text-green-600/80 text-lg">
                  {">"} {t("home.hero_desc")}
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Button variant="primary" className="bg-green-600 hover:bg-green-500 text-black border-none font-mono">
                    ./start_learning.sh <ArrowRight className={cn("ml-2 w-4 h-4", isRTL && "rotate-180")} />
                  </Button>
                  <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10 font-mono">
                    git clone courses.git
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Terminal, label: "Terminal Access" },
                { icon: Code, label: "Live Coding" },
                { icon: Cpu, label: "Algorithms" },
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-green-500/5 border border-green-500/20 rounded-lg flex flex-col items-center gap-2">
                  <item.icon className="w-6 h-6" />
                  <span className="text-[10px] uppercase text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Code Block Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:block relative"
          >
            <div className="bg-[#0d1117] rounded-xl border border-green-500/30 p-8 shadow-[0_0_50px_rgba(34,197,94,0.2)]">
              <pre className="text-sm sm:text-base leading-relaxed overflow-hidden">
                <code>
                  <span className="text-purple-400">class</span> <span className="text-yellow-400">Academy</span> {"{"} {"\n"}
                  {"  "}<span className="text-purple-400">constructor</span>() {"{"} {"\n"}
                  {"    "}<span className="text-blue-400">this</span>.mission = <span className="text-green-400">"Learn & Build"</span>; {"\n"}
                  {"    "}<span className="text-blue-400">this</span>.community = <span className="text-green-400">"10k+ Devs"</span>; {"\n"}
                  {"  "} {"}"} {"\n"}
                  {"\n"}
                  {"  "}<span className="text-purple-400">async</span> <span className="text-yellow-400">upgradeSkills</span>(student) {"{"} {"\n"}
                  {"    "}<span className="text-purple-400">await</span> student.<span className="text-yellow-400">enroll</span>(<span className="text-blue-400">this</span>.courses); {"\n"}
                  {"    "}<span className="text-purple-400">return</span> <span className="text-green-400">"Senior Dev Status"</span>; {"\n"}
                  {"  "} {"}"} {"\n"}
                  {"}"}
                </code>
              </pre>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-6 -right-6 bg-green-500 text-black p-4 rounded-lg font-black shadow-lg">
              UPTIME: 99.9%
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#161b22] border border-green-500/30 p-4 rounded-lg flex items-center gap-3">
              <Shield className="text-green-500" />
              <div className="text-xs">
                <p className="text-gray-400 uppercase">Status</p>
                <p className="text-green-500 font-bold tracking-widest animate-pulse">DEPLOYED</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
