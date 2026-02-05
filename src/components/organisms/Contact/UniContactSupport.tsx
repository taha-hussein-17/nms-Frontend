import { Reveal } from "../../atoms/Reveal";
import { Headphones, Clock, HelpCircle } from "lucide-react";
import { cn } from "../../../utils/cn";

interface ContactSupportProps {
  isAr: boolean;
}

export const UniContactSupport = ({ isAr }: ContactSupportProps) => {
  const supportItems = [
    {
      icon: Headphones,
      title: isAr ? "دعم أكاديمي مباشر" : "Live Academic Support",
      desc: isAr
        ? "مساعدة فورية للطلاب وأعضاء هيئة التدريس"
        : "Immediate assistance for students and faculty members",
      color: "text-maroon-700",
      bg: "bg-maroon-50",
    },
    {
      icon: Clock,
      title: isAr ? "مراجعة الطلبات" : "Application Review",
      desc: isAr
        ? "نراجع جميع الاستفسارات الأكاديمية خلال يوم عمل واحد"
        : "We review all academic inquiries within one business day",
      color: "text-blue-700",
      bg: "bg-blue-50",
    },
    {
      icon: HelpCircle,
      title: isAr ? "دليل المستخدم" : "User Guide",
      desc: isAr
        ? "موثق شامل لجميع خدمات المنصة التعليمية"
        : "Comprehensive documentation for all educational platform services",
      color: "text-maroon-700",
      bg: "bg-maroon-50",
    },
  ];

  return (
    <section className="pb-32 container mx-auto px-4 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {supportItems.map((item, idx) => (
          <Reveal key={idx} delay={idx * 0.1}>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-10 rounded-xl text-center transition-all duration-300 group shadow-sm hover:shadow-md">
              <div
                className={cn(
                  "w-14 h-14 mx-auto mb-6 rounded-lg flex items-center justify-center border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 transition-all duration-300 group-hover:bg-maroon-600 group-hover:text-white",
                  item.color
                )}
              >
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
