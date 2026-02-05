import { useTranslation } from "react-i18next";
import {
  Layout,
  Server,
  ShieldCheck,
  Smartphone,
  Database,
  Cloud,
  BrainCircuit,
  Cpu,
} from "lucide-react";
// import { cn } from "../../../../utils/cn";
import { motion } from "framer-motion";

export const CodersPopularCategories = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const categories = [
    {
      name: isRTL ? "تطوير الواجهات" : "Frontend Dev",
      icon: Layout,
      count: "45+",
      tech: "React, Vue, Next.js",
    },
    {
      name: isRTL ? "تطوير الخلفيات" : "Backend Dev",
      icon: Server,
      count: "38+",
      tech: "Node, Go, Python",
    },
    {
      name: isRTL ? "الأمن السيبراني" : "Cyber Security",
      icon: ShieldCheck,
      count: "22+",
      tech: "Pentesting, Network",
    },
    {
      name: isRTL ? "تطبيقات الهاتف" : "Mobile Apps",
      icon: Smartphone,
      count: "18+",
      tech: "Flutter, React Native",
    },
    {
      name: isRTL ? "قواعد البيانات" : "Databases",
      icon: Database,
      count: "15+",
      tech: "PostgreSQL, Redis",
    },
    {
      name: isRTL ? "الحوسبة السحابية" : "Cloud & DevOps",
      icon: Cloud,
      count: "12+",
      tech: "AWS, Docker, K8s",
    },
    {
      name: isRTL ? "الذكاء الاصطناعي" : "AI & ML",
      icon: BrainCircuit,
      count: "25+",
      tech: "TensorFlow, PyTorch",
    },
    {
      name: isRTL ? "هندسة العتاد" : "Hardware & IoT",
      icon: Cpu,
      count: "10+",
      tech: "Arduino, C++",
    },
  ];

  return (
    <section className="py-24 bg-black text-green-500 font-mono relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-16 overflow-hidden">
          <div className="flex-1 h-px bg-green-500/20" />
          <h2 className="text-3xl md:text-4xl font-bold whitespace-nowrap">
            <span className="text-green-800">0x01.</span>{" "}
            {isRTL ? "مجالات التخصص" : "Stack Categories"}
          </h2>
          <div className="flex-1 h-px bg-green-500/20" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative p-6 bg-[#0a0a0a] border border-green-500/10 hover:border-green-500/40 hover:bg-green-500/5 transition-all cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-1 text-[8px] text-green-900 opacity-0 group-hover:opacity-100 transition-opacity">
                ID_{i.toString(16).padStart(2, "0")}
              </div>

              <div className="w-12 h-12 mb-6 flex items-center justify-center border border-green-500/20 text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all">
                <cat.icon size={24} />
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{cat.name}</h3>
              <p className="text-[10px] text-green-700 mb-4 tracking-tighter uppercase">
                {cat.tech}
              </p>

              <div className="flex justify-between items-center text-xs">
                <span className="text-green-600/50">
                  {cat.count} repositories
                </span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
