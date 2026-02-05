import { Reveal } from "../../atoms/Reveal";
import { Sparkles, MessageCircle, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
// import { cn } from "../../../utils/cn";

interface ContactHeroProps {
  isAr: boolean;
}

export const AzhariContactHero = ({ isAr }: ContactHeroProps) => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden font-serif bg-[#fdfbf7] dark:bg-[#1a1f1a]">
      {/* Islamic geometric background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0l10 40h40l-30 20 10 40-30-20-30 20 10-40-30-20h40z' fill='%238b7355' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-[#8b7355]/10 border-2 border-[#8b7355]/20 rounded-full mb-10"
          >
            <Sparkles className="w-4 h-4 text-[#8b7355]" />
            <span className="text-[#8b7355] text-sm font-bold italic">
              {isAr ? "نسعد بتواصلكم معنا" : "We are happy to connect with you"}
            </span>
          </motion.div>

          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2d3a2d] dark:text-[#e2e8e2] mb-8 leading-tight">
              {isAr
                ? "تواصل معنا لطلب العلم والاستفسار"
                : "Contact Us for Knowledge & Inquiries"}
            </h1>
            <div className="w-24 h-1 bg-[#8b7355] mx-auto mb-8 rounded-full opacity-30" />
            <p className="text-[#2d3a2d]/70 dark:text-[#e2e8e2]/70 text-lg md:text-xl italic max-w-2xl mx-auto leading-relaxed">
              {isAr
                ? "نحن هنا لخدمتكم والإجابة على تساؤلاتكم حول رحلتكم التعليمية في أكاديميتنا."
                : "We are here to serve you and answer your questions about your educational journey in our academy."}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: MessageCircle,
                label: isAr ? "المراسلة" : "Messaging",
                sub: isAr ? "رد سريع" : "Fast Response",
              },
              {
                icon: MapPin,
                label: isAr ? "الموقع" : "Location",
                sub: isAr ? "القاهرة، مصر" : "Cairo, Egypt",
              },
              {
                icon: Phone,
                label: isAr ? "الهاتف" : "Phone",
                sub: isAr ? "متاح دائماً" : "Always Available",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-8 bg-white dark:bg-[#2d3a2d]/20 border border-[#8b7355]/10 rounded-2xl shadow-sm group hover:border-[#8b7355]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#8b7355]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#8b7355] group-hover:text-white transition-all">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="text-[#2d3a2d] dark:text-[#e2e8e2] font-bold text-lg mb-1">
                  {item.label}
                </div>
                <div className="text-[#8b7355] text-sm italic font-medium">
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
