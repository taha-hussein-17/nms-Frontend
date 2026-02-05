import { Reveal } from "../../atoms/Reveal";
import { Headphones, Mail, HelpCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
// import { cn } from "../../../utils/cn";

interface ContactHeroProps {
  isAr: boolean;
}

export const UniContactHero = ({ isAr }: ContactHeroProps) => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden font-sans bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      {/* Subtle academic pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#641b1b_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-maroon-600/10 border border-maroon-600/20 rounded-full mb-8"
          >
            <Headphones className="w-4 h-4 text-maroon-600" />
            <span className="text-maroon-600 text-xs font-bold uppercase tracking-wider">
              {isAr ? "دعم المؤسسة التعليمية" : "Institutional Support"}
            </span>
          </motion.div>

          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              {isAr
                ? "كيف يمكننا مساعدتكم اليوم؟"
                : "How Can We Assist You Today?"}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              {isAr
                ? "فريق الدعم الأكاديمي والتقني لدينا جاهز للإجابة على جميع استفسارات الطلاب وأعضاء هيئة التدريس."
                : "Our academic and technical support team is ready to answer all student and faculty inquiries."}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                icon: Mail,
                label: isAr ? "دعم البريد" : "Email Support",
                sub: "support@uni.edu",
              },
              {
                icon: HelpCircle,
                label: isAr ? "مركز المساعدة" : "Help Center",
                sub: isAr ? "دليل المستخدم" : "Knowledge Base",
              },
              {
                icon: ShieldCheck,
                label: isAr ? "الخصوصية" : "Security",
                sub: isAr ? "حماية البيانات" : "Data Protection",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center mx-auto mb-4 group-hover:bg-maroon-600 group-hover:text-white transition-all">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="text-slate-900 dark:text-white font-bold text-lg mb-1">
                  {item.label}
                </div>
                <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">
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
