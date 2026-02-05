import { useTranslation } from "react-i18next";
import { Terminal, Cpu, HardDrive, Network } from "lucide-react";
import { motion } from "framer-motion";

export const CodersStats = () => {
  const { t } = useTranslation();

  const stats = [
    {
      label: t("home.stats.courses"),
      value: "0x1F4", // 500
      display: "500+",
      icon: Terminal,
    },
    {
      label: t("home.stats.instructors"),
      value: "0x78", // 120
      display: "120+",
      icon: Cpu,
    },
    {
      label: t("home.stats.hours"),
      value: "0x2710", // 10000
      display: "10k+",
      icon: HardDrive,
    },
    {
      label: t("home.stats.rating"),
      value: "100%",
      display: "4.9/5",
      icon: Network,
    },
  ];

  return (
    <section className="py-24 bg-black font-mono relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none select-none">
        <div className="flex flex-wrap gap-4 p-4 text-[8px] text-green-500 overflow-hidden">
          {Array.from({ length: 100 }).map((_, i) => (
            // eslint-disable-next-line react-hooks/purity
            <span key={i}>{Math.random() > 0.5 ? "1" : "0"}</span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#0a0a0a] border border-green-500/20 p-6 relative"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-green-500/0 group-hover:bg-green-500/50 transition-all duration-300" />

              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded bg-green-500/5 flex items-center justify-center text-green-500 border border-green-500/20 group-hover:border-green-500 group-hover:bg-green-500 group-hover:text-black transition-all">
                  <stat.icon className="w-6 h-6" />
                </div>

                <div className="text-center space-y-2">
                  <div className="text-green-800 text-[10px] group-hover:text-green-600">
                    {stat.value}
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-3xl font-bold text-white"
                  >
                    {stat.display}
                  </motion.div>
                  <p className="text-[10px] text-green-500/60 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              </div>

              {/* Terminal cursor effect */}
              <div className="absolute bottom-2 right-2 w-2 h-4 bg-green-500/30 animate-pulse" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
