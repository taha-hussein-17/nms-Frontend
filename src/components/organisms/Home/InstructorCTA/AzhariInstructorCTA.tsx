import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { BookOpen, PenTool, Moon, Award, ArrowRight, Heart } from "lucide-react";
import { cn } from "../../../../utils/cn";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import { Button } from "../../../atoms/Button";

export const AzhariInstructorCTA = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: isAr ? "نشر العلم الشرعي" : "Spread Islamic Knowledge",
      desc: isAr ? "كن جزءاً من مسيرة تعليم العلوم الشرعية" : "Be part of teaching Islamic sciences",
      color: "text-emerald-700",
      bg: "bg-emerald-50",
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: isAr ? "منهجية أزهرية" : "Azhari Methodology",
      desc: isAr ? "التزام بالوسطية والمنهج العلمي الرصين" : "Commitment to moderation & solid curriculum",
      color: "text-amber-700",
      bg: "bg-amber-50",
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: isAr ? "أجر مستمر" : "Continuous Reward",
      desc: isAr ? "علم يُنتفع به وصدقة جارية" : "Knowledge that benefits & ongoing charity",
      color: "text-blue-700",
      bg: "bg-blue-50",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: isAr ? "إجازات علمية" : "Academic Ijazas",
      desc: isAr ? "نظام متكامل لمنح الإجازات والشهادات" : "System for granting Ijazas & certificates",
      color: "text-purple-700",
      bg: "bg-purple-50",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#fdfbf7] font-serif">
      {/* Islamic geometric pattern background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="azhari-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#azhari-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="border-4 border-emerald-900/10 bg-white rounded-[3rem] p-8 lg:p-20 relative overflow-hidden shadow-xl">
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-32 h-32 border-t-8 border-r-8 border-emerald-800/20 rounded-tr-[3rem]" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-8 border-l-8 border-emerald-800/20 rounded-bl-[3rem]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={cn("space-y-10", isAr ? "text-right" : "text-left")}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100"
              >
                <Heart className="w-4 h-4 fill-emerald-800/20" />
                <span className="font-bold text-sm">{isAr ? "رسالة العلم والأمانة" : "The Message of Knowledge & Trust"}</span>
              </motion.div>

              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-bold text-emerald-950 leading-tight">
                  {isAr ? "كن سفيراً" : "Become an Ambassador"}
                  <span className="text-emerald-700 block mt-2">
                    {isAr ? "للمنهج الأزهري الوسطي" : "of the Azhari Path"}
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed italic">
                  {isAr 
                    ? "«خياركم من تعلم العلم وعلمه».. انضم إلينا لتكون منارة للعلم الشرعي الرصين وتصل لطلاب العلم في كل مكان."
                    : "“The best of you are those who learn the Quran and teach it.” Join us to be a beacon of solid Islamic knowledge."}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={cn(
                      "p-6 rounded-2xl transition-all hover:shadow-md border border-transparent hover:border-emerald-100",
                      feature.bg
                    )}
                  >
                    <div className={cn("mb-4 w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm", feature.color)}>
                      {feature.icon}
                    </div>
                    <h3 className="text-emerald-950 font-bold mb-2">{feature.title}</h3>
                    <p className="text-emerald-800/60 text-sm leading-snug">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to={ROUTES.BECOME_INSTRUCTOR}>
                  <Button className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-10 py-7 rounded-2xl shadow-lg shadow-emerald-900/20 text-lg">
                    <span className="flex items-center gap-2">
                      {isAr ? "انضم لهيئة التدريس" : "Join the Faculty"}
                      <ArrowRight className={cn("w-5 h-5", isAr && "rotate-180")} />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Decorative frame for image/graphic */}
                <div className="w-80 h-[28rem] bg-emerald-900 rounded-[4rem] relative z-10 overflow-hidden border-8 border-white shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent flex items-end p-8">
                    <div className="text-white space-y-2">
                      <div className="w-12 h-1 bg-amber-400" />
                      <p className="text-sm font-medium opacity-80">{isAr ? "فريق التدريس" : "Teaching Faculty"}</p>
                      <p className="text-xl font-bold">{isAr ? "نخبة علماء الأزهر" : "Elite Azhari Scholars"}</p>
                    </div>
                  </div>
                </div>
                {/* Background circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-100 rounded-full blur-2xl opacity-60" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-100 rounded-full blur-2xl opacity-60" />
                
                {/* Float elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 border border-emerald-50"
                >
                  <Award className="w-8 h-8 text-amber-500" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
