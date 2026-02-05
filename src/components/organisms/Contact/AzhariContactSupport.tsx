import { Reveal } from "../../atoms/Reveal";
import { MessageCircle, Sparkles, BookOpen } from "lucide-react";
import { cn } from "../../../utils/cn";

interface ContactSupportProps {
  isAr: boolean;
}

export const AzhariContactSupport = ({ isAr }: ContactSupportProps) => {
  const supportItems = [
    {
      icon: MessageCircle,
      title: isAr ? "تواصل مباشر" : "Direct Connection",
      desc: isAr
        ? "تحدث مع فريقنا للحصول على إرشادات تعليمية وتربوية"
        : "Speak with our team for educational and pedagogical guidance",
      color: "text-[#2d3a2d]",
      bg: "bg-[#2d3a2d]/10",
    },
    {
      icon: Sparkles,
      title: isAr ? "استجابة سريعة" : "Swift Response",
      desc: isAr
        ? "نسعى للرد على استفساراتكم في أسرع وقت ممكن"
        : "We strive to answer your inquiries as quickly as possible",
      color: "text-[#8b7355]",
      bg: "bg-[#8b7355]/10",
    },
    {
      icon: BookOpen,
      title: isAr ? "مركز المعرفة" : "Knowledge Center",
      desc: isAr
        ? "تصفح الأسئلة الشائعة والمقالات التعليمية المتخصصة"
        : "Browse FAQs and specialized educational articles",
      color: "text-[#2d3a2d]",
      bg: "bg-[#2d3a2d]/10",
    },
  ];

  return (
    <section className="pb-32 container mx-auto px-4 font-serif">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {supportItems.map((item, idx) => (
          <Reveal key={idx} delay={idx * 0.1}>
            <div className="bg-white dark:bg-[#2d3a2d]/20 border border-[#8b7355]/10 p-10 rounded-2xl text-center transition-all duration-500 group shadow-sm hover:shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#8b7355]/10 rounded-tr-2xl group-hover:border-[#8b7355]/30 transition-colors" />
              
              <div
                className={cn(
                  "w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center border border-[#8b7355]/20 transition-all duration-500 group-hover:bg-[#8b7355] group-hover:text-white",
                  item.bg,
                  item.color
                )}
              >
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#2d3a2d] dark:text-[#e2e8e2]">{item.title}</h3>
              <p className="text-[#2d3a2d]/60 dark:text-[#e2e8e2]/60 italic leading-relaxed">
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
