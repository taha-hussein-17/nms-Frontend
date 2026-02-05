import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Terminal, Code2, Cpu, Globe } from "lucide-react";
// import { cn } from "../../../../utils/cn";

export const CodersAboutUs = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const features = [
    { icon: Code2, label: "Clean Code", desc: "Write industry-standard code" },
    { icon: Cpu, label: "Architecture", desc: "Learn scalable systems" },
    { icon: Globe, label: "Deployment", desc: "Ship to production" },
  ];

  return (
    <section className="py-24 bg-black text-green-500 font-mono overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-green-500/30 bg-green-500/10 text-xs">
              <Terminal className="w-4 h-4" />
              <span>cat mission_statement.md</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-green-400">
              {"> "} {t("home.about.title") || "Who We Are"}
            </h2>
            <div className="space-y-4 text-green-600/80 text-lg leading-relaxed">
              <p>
                {isRTL
                  ? "نحن نؤمن بأن البرمجة هي لغة المستقبل. منصتنا توفر بيئة تعليمية متكاملة للمطورين."
                  : "We believe coding is the language of the future. Our platform provides a complete environment for developers."}
              </p>
              <div className="bg-[#1e1e1e] p-6 rounded border border-green-500/20">
                <code className="text-sm text-blue-400">
                  <span className="text-purple-400">const</span> academy = {"{"}{" "}
                  <br />
                  &nbsp;&nbsp;vision:{" "}
                  <span className="text-orange-400">"Empower Devs"</span>,{" "}
                  <br />
                  &nbsp;&nbsp;values: [
                  <span className="text-orange-400">"Innovation"</span>,{" "}
                  <span className="text-orange-400">"Excellence"</span>] <br />
                  {"}"};
                </code>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-[#0a0a0a] border border-green-500/10 hover:border-green-500/40 transition-all flex items-start gap-4"
              >
                <div className="p-3 bg-green-500/5 text-green-500 border border-green-500/20">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.label}</h3>
                  <p className="text-xs text-green-700">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
