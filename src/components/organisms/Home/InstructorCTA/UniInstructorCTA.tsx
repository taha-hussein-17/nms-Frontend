import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { GraduationCap, Users, Globe, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "../../../../utils/cn";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import { Button } from "../../../atoms/Button";

export const UniInstructorCTA = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const stats = [
    { label: isAr ? "طالب نشط" : "Active Students", value: "+50K", color: "text-blue-600" },
    { label: isAr ? "دورة تدريبية" : "Courses", value: "+1.2K", color: "text-maroon-600" },
    { label: isAr ? "دولة" : "Countries", value: "45", color: "text-emerald-600" },
  ];

  const benefits = [
    {
      icon: <Users className="w-5 h-5" />,
      text: isAr ? "إدارة كاملة للفصول الافتراضية" : "Full virtual classroom management",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      text: isAr ? "تقارير أداء مفصلة للطلاب" : "Detailed student performance reports",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      text: isAr ? "وصول لجمهور أكاديمي عالمي" : "Access to global academic audience",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      text: isAr ? "دعم لتطوير المناهج الجامعية" : "Support for curriculum development",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Content Column */}
            <div className={cn(
              "lg:col-span-7 p-8 lg:p-16 space-y-10",
              isAr ? "text-right" : "text-left"
            )}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider"
              >
                <GraduationCap className="w-4 h-4" />
                <span>{isAr ? "فرص التدريس الأكاديمي" : "Academic Teaching Opportunities"}</span>
              </motion.div>

              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                  {isAr ? "ساهم في صياغة" : "Shape the future of"}
                  <span className="text-blue-600 block">
                    {isAr ? "مستقبل التعليم الجامعي" : "Higher Education"}
                  </span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                  {isAr 
                    ? "انضم إلى منصتنا الأكاديمية الرائدة وشارك معرفتك مع آلاف الطلاب الباحثين عن التميز والمهارات المطلوبة في سوق العمل."
                    : "Join our leading academic platform and share your knowledge with thousands of students seeking excellence and market-ready skills."}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="mt-1 bg-blue-100 text-blue-600 p-1.5 rounded-lg">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm leading-snug">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 pt-4 items-center">
                <Link to={ROUTES.BECOME_INSTRUCTOR}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-7 rounded-xl text-lg shadow-lg shadow-blue-600/20">
                    <span className="flex items-center gap-2">
                      {isAr ? "تقدم للتدريس" : "Apply to Teach"}
                      <ArrowRight className={cn("w-5 h-5", isAr && "rotate-180")} />
                    </span>
                  </Button>
                </Link>
                <div className="flex -space-x-3 rtl:space-x-reverse">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm" />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-[10px] font-bold text-blue-600 shadow-sm">
                    +200
                  </div>
                </div>
                <p className="text-sm text-slate-500 font-medium">
                  {isAr ? "انضم إلى +200 أكاديمي" : "Join +200 academics"}
                </p>
              </div>
            </div>

            {/* Right Image/Stats Column */}
            <div className="lg:col-span-5 relative bg-slate-900 overflow-hidden min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-slate-900/90 z-10" />
              
              <div className="relative z-20 h-full flex flex-col justify-center p-8 lg:p-12 space-y-8">
                <div className="space-y-8">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6"
                    >
                      <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-white/60 font-bold uppercase tracking-widest">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="p-6 bg-blue-600/20 border border-blue-400/20 rounded-2xl">
                  <p className="text-white/80 text-sm italic leading-relaxed">
                    {isAr 
                      ? "“التعليم هو أقوى سلاح يمكنك استخدامه لتغيير العالم.”"
                      : "“Education is the most powerful weapon which you can use to change the world.”"}
                  </p>
                  <div className="mt-3 text-xs font-bold text-white">— Nelson Mandela</div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-slate-500/20 rounded-full blur-[100px]" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
