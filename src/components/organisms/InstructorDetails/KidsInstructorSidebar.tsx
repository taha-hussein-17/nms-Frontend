import { useTranslation } from "react-i18next";
import {
  Award,
  BookOpen,
  Star,
  Mail,
  CheckCircle2,
  Sparkles,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "../../atoms/Reveal";
import { Button } from "../../atoms/Button";

interface InstructorSidebarProps {
  instructorName: string;
}

export const KidsInstructorSidebar = ({
  instructorName,
}: InstructorSidebarProps) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <aside className="lg:col-span-4 space-y-10">
      {/* Achievements Card for Kids */}
      <Reveal direction="left">
        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-[3.5rem] p-10 text-white shadow-2xl shadow-yellow-400/20 relative overflow-hidden group">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-[3rem] blur-xl"
          />

          <h3 className="text-3xl font-black font-handwritten mb-10 flex items-center gap-4 relative z-10">
            <div className="p-4 rounded-2xl bg-white/20 rotate-6">
              <Trophy className="w-8 h-8" />
            </div>
            {isAr ? "أوسمة المعلم" : "Teacher's Badges"}
          </h3>

          <div className="space-y-6 relative z-10">
            {[
              {
                title: isAr ? "مدرب معتمد" : "Certified Hero",
                icon: Award,
                color: "bg-blue-400",
              },
              {
                title: isAr ? "الأكثر مبيعاً" : "Star Maker",
                icon: BookOpen,
                color: "bg-pink-400",
              },
              {
                title: isAr ? "معلم متميز" : "Super Teacher",
                icon: Star,
                color: "bg-purple-400",
              },
            ].map((ach, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
                className="flex items-center gap-5 bg-white/20 p-5 rounded-[2.5rem] border-2 border-white/30 backdrop-blur-md"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${ach.color} flex items-center justify-center shrink-0 shadow-lg`}
                >
                  <ach.icon className="w-7 h-7" />
                </div>
                <span className="font-black text-xl font-handwritten">
                  {ach.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Quick Contact Form for Kids Style */}
      <Reveal direction="left" delay={0.2}>
        <div className="bg-white dark:bg-slate-800 border-4 border-dashed border-blue-200 dark:border-blue-900/50 rounded-[3.5rem] p-10 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-bl-[3rem]" />

          <h3 className="text-3xl font-black font-handwritten flex items-center gap-4 text-blue-500">
            <div className="p-4 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-500 -rotate-6">
              <Mail className="w-7 h-7" />
            </div>
            {isAr ? "هل لديك سؤال؟" : "Have a Question?"}
          </h3>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-handwritten leading-relaxed">
            {isAr
              ? `يمكنك إرسال رسالة للمدرب ${instructorName} وسيقوم بالرد عليك بسرعة!`
              : `You can send a message to ${instructorName} and they will reply fast!`}
          </p>

          <div className="space-y-5">
            <input
              type="text"
              placeholder={isAr ? "اسمك الجميل" : "Your Pretty Name"}
              className="w-full h-16 px-8 rounded-full bg-slate-50 dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 focus:border-blue-400 outline-none transition-all font-handwritten text-xl"
            />
            <textarea
              placeholder={
                isAr ? "ماذا تريد أن تسأل؟" : "What do you want to ask?"
              }
              rows={4}
              className="w-full p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 focus:border-blue-400 outline-none transition-all resize-none font-handwritten text-xl"
            />
            <Button className="w-full h-20 rounded-full font-handwritten text-2xl bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/20 group">
              {isAr ? "أرسل الرسالة!" : "Send Message!"}
              <Sparkles className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </div>
      </Reveal>

      {/* Verification & Trust for Kids */}
      <Reveal direction="left" delay={0.4}>
        <div className="bg-green-50 dark:bg-green-900/10 border-4 border-dashed border-green-200 dark:border-green-900/50 rounded-[3.5rem] p-8 text-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          </motion.div>
          <h4 className="text-2xl font-black font-handwritten mb-2 text-green-600 dark:text-green-400">
            {isAr ? "منصة موثوقة وآمنة" : "Trusted & Safe Platform"}
          </h4>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-handwritten">
            {isAr
              ? "نحن نهتم بسلامتك وتفوقك دائماً"
              : "We care about your safety and success"}
          </p>
        </div>
      </Reveal>
    </aside>
  );
};
