import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Terminal, Code, Cpu, Shield, ArrowRight, Zap } from "lucide-react";
import { cn } from "../../../../utils/cn";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import { Button } from "../../../atoms/Button";

export const CodersInstructorCTA = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const features = [
    {
      icon: <Terminal className="w-6 h-6" />,
      title: isAr ? "بيئة تطوير متكاملة" : "Integrated Dev Environment",
      desc: isAr
        ? "أدوات برمجية متطورة لشرح الكود"
        : "Advanced coding tools for teaching",
      color: "text-emerald-400",
      border: "border-emerald-500/20",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: isAr ? "مشاريع حقيقية" : "Real-world Projects",
      desc: isAr
        ? "ساعد الطلاب على بناء تطبيقات فعلية"
        : "Help students build actual apps",
      color: "text-blue-400",
      border: "border-blue-500/20",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: isAr ? "تقنيات حديثة" : "Modern Tech Stack",
      desc: isAr
        ? "درّس أحدث اللغات وإطارات العمل"
        : "Teach latest languages & frameworks",
      color: "text-purple-400",
      border: "border-purple-500/20",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: isAr ? "مجتمع تقني" : "Tech Community",
      desc: isAr
        ? "تواصل مع خبراء ومبرمجين طموحين"
        : "Connect with experts & ambitious devs",
      color: "text-orange-400",
      border: "border-orange-500/20",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0a] font-mono">
      {/* Matrix-like background effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="border border-emerald-500/30 bg-black/80 rounded-3xl p-8 lg:p-16 relative overflow-hidden">
          {/* Glitch effect decorative element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={cn("space-y-8", isAr ? "text-right" : "text-left")}>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm"
              >
                <Zap className="w-4 h-4" />
                <span>
                  {isAr ? "sudo execute --career" : "root@nms:~/start-teaching"}
                </span>
              </motion.div>

              <div className="space-y-4">
                <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  {isAr ? "انشر كود" : "Push your code to"}
                  <span className="text-emerald-400 block mt-2">
                    {isAr ? "عقول الجيل القادم" : "the next generation"}
                  </span>
                </h2>
                <p className="text-lg text-gray-400 max-w-xl">
                  {isAr
                    ? "انضم إلى نخبة المبرمجين وشارك خبراتك التقنية في بيئة تعليمية متطورة تدعم لغات البرمجة الحديثة."
                    : "Join the elite developers and share your technical expertise in an advanced learning environment that supports modern languages."}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={cn(
                      "p-4 border rounded-xl bg-white/5 hover:bg-white/10 transition-colors group",
                      feature.border
                    )}
                  >
                    <div
                      className={cn(
                        "mb-3 group-hover:scale-110 transition-transform",
                        feature.color
                      )}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-white font-bold mb-1 text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-xs">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to={ROUTES.BECOME_INSTRUCTOR}>
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-8 py-6 rounded-none skew-x-[-10deg]">
                    <span className="skew-x-[10deg] flex items-center gap-2">
                      {isAr ? "ابدأ التدريس الآن" : "Initialize Teaching"}
                      <ArrowRight
                        className={cn("w-5 h-5", isAr && "rotate-180")}
                      />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative z-10 bg-[#1a1a1a] border border-emerald-500/20 rounded-xl p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <span className="text-xs text-gray-500 ml-2">
                    instructor_dashboard.py
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-purple-400">
                    import <span className="text-white">nms_platform</span>
                  </p>
                  <p className="text-purple-400">
                    class <span className="text-yellow-400">Instructor</span>
                    <span className="text-white">(nms_platform.Expert):</span>
                  </p>
                  <p className="text-white pl-4">
                    def <span className="text-blue-400">on_startup</span>(self):
                  </p>
                  <p className="text-emerald-400 pl-8">
                    self.share_knowledge()
                  </p>
                  <p className="text-emerald-400 pl-8">self.earn_revenue()</p>
                  <p className="text-emerald-400 pl-8">
                    return <span className="text-white">"Success"</span>
                  </p>
                  <div className="h-4" />
                  <p className="text-gray-600">
                    # Compiling future engineers...
                  </p>
                  <div className="flex items-center gap-1">
                    <span className="text-emerald-500">_</span>
                    <motion.div
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="w-2 h-4 bg-emerald-500"
                    />
                  </div>
                </div>
              </div>

              {/* Background decorative shapes */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-emerald-500/10 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
