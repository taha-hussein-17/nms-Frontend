import { Reveal } from "../../atoms/Reveal";
import { Terminal, MessageSquare, Shield, Globe } from "lucide-react";
import { motion } from "framer-motion";
// import { cn } from "../../../utils/cn";

interface ContactHeroProps {
  isAr: boolean;
}

export const CodersContactHero = ({ isAr }: ContactHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden font-mono bg-black">
      {/* Matrix-like background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-sm mb-8"
          >
            <Terminal className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest">
              {isAr ? "اتصال النظام v1.0.4" : "SYSTEM_CONNECTION_v1.0.4"}
            </span>
          </motion.div>

          <Reveal>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
              {isAr ? "اتصل بقاعدة البيانات" : "CONNECT_TO_BASE"}
            </h1>
            <p className="text-emerald-500/60 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              {"> "}{" "}
              {isAr
                ? "هل لديك استفسار برمجى؟ فريق الدعم الفني لدينا متاح لمعالجة طلباتك على مدار الساعة."
                : "Have a technical query? Our core support team is available 24/7 to process your requests."}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                icon: MessageSquare,
                label: isAr ? "دردشة مباشرة" : "LIVE_CHAT",
                sub: "ping -t support",
              },
              {
                icon: Globe,
                label: isAr ? "دعم عالمي" : "GLOBAL_OPS",
                sub: "status: online",
              },
              {
                icon: Shield,
                label: isAr ? "اتصال آمن" : "SECURE_SSL",
                sub: "encrypted: yes",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-6 border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all group"
              >
                <item.icon className="w-8 h-8 text-emerald-500 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <div className="text-white font-bold text-sm mb-1">
                  {item.label}
                </div>
                <div className="text-[10px] text-emerald-500/40 uppercase tracking-widest">
                  {item.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
