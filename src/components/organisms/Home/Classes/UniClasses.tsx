import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { User, Clock, Users, ExternalLink, Video } from "lucide-react";
// import { cn } from "../../../../utils/cn";

export const UniClasses = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const lectures = [
    {
      id: 1,
      title: isRTL ? "مبادئ الاقتصاد الكلي" : "Principles of Macroeconomics",
      instructor: isRTL ? "د. سمير كمال" : "Dr. Samir Kamal",
      time: "10:00 AM",
      students: 180,
      hall: "Hall A-102",
      category: isRTL ? "تجارة" : "Business",
    },
    {
      id: 2,
      title: isRTL ? "مقدمة في علم النفس" : "Introduction to Psychology",
      instructor: isRTL ? "د. ليلى حسن" : "Dr. Layla Hassan",
      time: "12:30 PM",
      students: 250,
      hall: "Main Auditorium",
      category: isRTL ? "آداب" : "Arts",
    },
    {
      id: 3,
      title: isRTL ? "تفاضل وتكامل 2" : "Calculus II",
      instructor: isRTL ? "أ.د. يوسف زيدان" : "Prof. Youssef Zeidan",
      time: "03:00 PM",
      students: 120,
      hall: "Lab 4",
      category: isRTL ? "هندسة" : "Engineering",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-slate-200 dark:border-slate-800 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 text-maroon-700 dark:text-maroon-500 font-bold uppercase tracking-widest text-sm">
              <Video className="w-5 h-5" />
              <span>{isRTL ? "المحاضرات المباشرة" : "Live Lectures"}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
              {isRTL ? "جدول المحاضرات الجارية" : "Current Lecture Schedule"}
            </h2>
          </motion.div>

          <div className="hidden md:block">
            <p className="text-slate-500 font-medium">
              Academic Year 2025/2026 - Semester 2
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {lectures.map((lecture, i) => (
            <motion.div
              key={lecture.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-maroon-700/50 p-6 flex flex-col md:flex-row items-center gap-8 transition-all hover:shadow-lg"
            >
              <div className="w-full md:w-24 h-24 bg-slate-100 dark:bg-slate-700 flex flex-col items-center justify-center text-maroon-700 dark:text-maroon-500 border-b-4 md:border-b-0 md:border-l-4 border-maroon-700">
                <Clock className="w-6 h-6 mb-1" />
                <span className="text-xs font-bold text-center px-2">
                  {lecture.time}
                </span>
              </div>

              <div className="flex-1 space-y-2 text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase">
                    {lecture.category}
                  </span>
                  <span className="px-2 py-0.5 bg-maroon-50 dark:bg-maroon-900/20 text-[10px] font-bold text-maroon-700 dark:text-maroon-500 uppercase">
                    {lecture.hall}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-maroon-700 transition-colors">
                  {lecture.title}
                </h3>
                <div className="flex items-center justify-center md:justify-start gap-4 text-slate-500">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{lecture.instructor}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{lecture.students} enrolled</span>
                  </div>
                </div>
              </div>

              <button className="w-full md:w-auto px-8 py-4 bg-maroon-700 text-white font-bold hover:bg-maroon-800 transition-all flex items-center justify-center gap-2">
                <span>Join Lecture</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
