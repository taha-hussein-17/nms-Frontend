import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Quote, GraduationCap } from "lucide-react";
// import { cn } from "../../../../utils/cn";

export const UniTestimonials = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const alumni = [
    {
      name: isRTL ? "د. سارة خالد" : "Dr. Sarah Khaled",
      role: isRTL ? "خريجة كلية الطب، 2023" : "Medical Graduate, 2023",
      quote: isRTL
        ? "كانت تجربتي في الأكاديمية نقطة تحول حقيقية في مسيرتي المهنية. المنهج الأكاديمي والتدريب العملي متميزان جداً."
        : "My experience at the academy was a true turning point in my career. The academic curriculum and practical training are outstanding.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71f1536783?w=200&h=200&fit=crop",
    },
    {
      name: isRTL ? "م. يوسف علي" : "Eng. Youssef Ali",
      role: isRTL ? "خريج كلية الهندسة، 2022" : "Engineering Graduate, 2022",
      quote: isRTL
        ? "البيئة الأكاديمية هنا تشجع على الابتكار والبحث العلمي. حصلت على فرصة عمل في شركة عالمية فور تخرجي."
        : "The academic environment here encourages innovation and scientific research. I got a job at a global company immediately after graduation.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    {
      name: isRTL ? "أ. منى حسن" : "Ms. Mona Hassan",
      role: isRTL ? "خريجة كلية التجارة، 2024" : "Business Graduate, 2024",
      quote: isRTL
        ? "استفدت كثيراً من خبرات الأساتذة والشبكة المهنية التي توفرها الأكاديمية للطلاب والخريجين."
        : "I benefited greatly from the professors' expertise and the professional network provided by the academy to students and alumni.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 border-b border-slate-200 dark:border-slate-800 pb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-maroon-700 dark:text-maroon-500 font-bold uppercase tracking-[0.2em] text-sm">
              <GraduationCap className="w-6 h-6" />
              <span>
                {isRTL ? "قصص نجاح الخريجين" : "Alumni Success Stories"}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase">
              {isRTL ? "بصمة خريجينا" : "Our Alumni Impact"}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {alumni.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900 p-10 border border-slate-200 dark:border-slate-800 relative group hover:shadow-2xl transition-all"
            >
              <Quote className="text-maroon-700/10 w-16 h-16 absolute top-8 left-8" />

              <div className="relative mb-10">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium italic">
                  "{person.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-8 border-t border-slate-200 dark:border-slate-800">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-maroon-700">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-maroon-700 transition-colors">
                    {person.name}
                  </h4>
                  <p className="text-sm text-slate-500 font-medium">
                    {person.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
