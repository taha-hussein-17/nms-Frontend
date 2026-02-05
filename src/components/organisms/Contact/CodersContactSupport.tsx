import { Reveal } from "../../atoms/Reveal";
import { Terminal, Cpu, Globe } from "lucide-react";
import { cn } from "../../../utils/cn";

interface ContactSupportProps {
  isAr: boolean;
}

export const CodersContactSupport = ({ isAr }: ContactSupportProps) => {
  const supportItems = [
    {
      icon: Terminal,
      title: isAr ? "دعم SSH مباشر" : "LIVE_SSH_SUPPORT",
      desc: isAr
        ? "تواصل مع مهندسينا مباشرة لحل المشاكل التقنية المعقدة"
        : "Connect with our engineers for complex technical debugging",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      icon: Cpu,
      title: isAr ? "زمن استجابة منخفض" : "LOW_LATENCY_RESPONSE",
      desc: isAr
        ? "نظام التذاكر لدينا يعالج الطلبات بسرعة فائقة"
        : "Our ticketing system processes requests with high-speed priority",
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
    },
    {
      icon: Globe,
      title: isAr ? "قاعدة معرفة الكود" : "CODE_KNOWLEDGE_BASE",
      desc: isAr
        ? "تصفح التوثيق البرمجي والحلول التقنية الشائعة"
        : "Browse API documentation and common technical solutions",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
  ];

  return (
    <section className="pb-32 container mx-auto px-4 font-mono">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {supportItems.map((item, idx) => (
          <Reveal key={idx} delay={idx * 0.1}>
            <div className="bg-black border border-emerald-500/20 hover:border-emerald-500/60 p-10 text-center transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-emerald-500/20 group-hover:bg-emerald-500 transition-colors" />
              
              <div
                className={cn(
                  "w-14 h-14 mx-auto mb-6 flex items-center justify-center border border-current transition-all duration-300 group-hover:scale-110",
                  item.bg,
                  item.color
                )}
              >
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tighter">{item.title}</h3>
              <p className="text-emerald-500/60 text-sm leading-relaxed">
                {"> "} {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
