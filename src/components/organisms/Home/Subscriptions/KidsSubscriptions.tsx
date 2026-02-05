import { useTranslation } from "react-i18next";
import { Check, ArrowRight, Sparkles, Rocket, Gift, Star } from "lucide-react";
import { Button } from "../../../atoms/Button";
import { cn } from "../../../../utils/cn";
import { motion } from "framer-motion";
import { Card } from "../../../atoms/Card";

export const KidsSubscriptions = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const plans = [
    {
      id: "basic",
      name: isRTL ? "خطة المغامر" : "Explorer Plan",
      price: isRTL ? "99" : "29",
      currency: isRTL ? "ج.م" : "$",
      period: isRTL ? "شهرياً" : "Monthly",
      description: isRTL
        ? "بداية رائعة لكل طفل يحب الاستكشاف"
        : "A great start for every curious kid",
      features: [
        isRTL ? "5 دورات ممتعة" : "5 Fun Courses",
        isRTL ? "شهادات ملونة" : "Colorful Certificates",
        isRTL ? "دعم تقني سريع" : "Fast Support",
      ],
      recommended: false,
      color: "bg-blue-400",
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
    },
    {
      id: "pro",
      name: isRTL ? "خطة البطل" : "Hero Plan",
      price: isRTL ? "199" : "59",
      currency: isRTL ? "ج.م" : "$",
      period: isRTL ? "شهرياً" : "Monthly",
      description: isRTL
        ? "الخيار المفضل للأبطال الصغار المتميزين"
        : "The favorite choice for super heroes",
      features: [
        isRTL ? "جميع الدورات مفتوحة" : "All Courses Unlocked",
        isRTL ? "دروس مباشرة أسبوعية" : "Weekly Live Classes",
        isRTL ? "جوائز ومكافآت خاصة" : "Special Prizes & Rewards",
        isRTL ? "دعم تعليمي مخصص" : "Personal Learning Support",
      ],
      recommended: true,
      color: "bg-yellow-400",
      icon: <Sparkles className="w-8 h-8 text-yellow-600" />,
    },
    {
      id: "yearly",
      name: isRTL ? "خطة العبقري" : "Genius Plan",
      price: isRTL ? "1599" : "499",
      currency: isRTL ? "ج.م" : "$",
      period: isRTL ? "سنوياً" : "Yearly",
      description: isRTL
        ? "للعقول المبدعة التي تريد كل شيء"
        : "For creative minds who want it all",
      features: [
        isRTL ? "كل شيء في خطة البطل" : "Everything in Hero Plan",
        isRTL ? "توفير كبير (شهرين مجاناً)" : "Big Savings (2 Months Free)",
        isRTL ? "صندوق هدايا تعليمي" : "Educational Gift Box",
        isRTL ? "جلسة خاصة مع مدرب" : "Private Session with Coach",
      ],
      recommended: false,
      color: "bg-purple-400",
      icon: <Gift className="w-8 h-8 text-purple-600" />,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#F8FAFC]">
      {/* Playful background */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#94A3B8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-block p-4 bg-white rounded-3xl shadow-xl mb-8 rotate-3"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-800">
              {isRTL ? "اختر مغامرتك القادمة!" : "Pick Your Next Adventure!"}
            </h2>
          </motion.div>
          <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto">
            {isRTL
              ? "خطط بسيطة وممتعة مصممة خصيصاً لتناسب احتياجات طفلك المبدع"
              : "Simple and fun plans designed specifically for your creative child"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card
                className={cn(
                  "relative p-10 rounded-[4rem] border-8 transition-all duration-300 flex flex-col h-full bg-white",
                  plan.recommended
                    ? "border-yellow-400 shadow-[0_20px_50px_rgba(234,179,8,0.2)] scale-105 z-20"
                    : "border-slate-50 hover:border-slate-100 z-10 shadow-sm"
                )}
              >
                {plan.recommended && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 text-white px-8 py-2 rounded-full text-sm font-black shadow-lg flex items-center gap-2">
                    <Star size={16} fill="currentColor" />
                    {isRTL ? "الأكثر حباً ❤️" : "Most Loved ❤️"}
                  </div>
                )}

                <div className="mb-10 text-center">
                  <div
                    className={cn(
                      "w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-6 shadow-inner",
                      plan.color + "20"
                    )}
                  >
                    {plan.icon}
                  </div>
                  <h3 className="text-3xl font-black text-slate-800 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-slate-500 font-bold px-4">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-10 text-center p-6 bg-slate-50 rounded-[3rem]">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-5xl font-black text-slate-800 tracking-tighter">
                      {plan.price}
                    </span>
                    <div className="text-left">
                      <div className="text-xl font-black text-slate-400 leading-none">
                        {plan.currency}
                      </div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
                        / {plan.period}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-12 flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-4">
                        <div
                          className={cn(
                            "p-1.5 rounded-full text-white shrink-0",
                            plan.color
                          )}
                        >
                          <Check size={14} strokeWidth={4} />
                        </div>
                        <span className="text-slate-600 font-black text-sm">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className={cn(
                    "w-full h-16 rounded-full font-black text-xl shadow-lg transition-all active:scale-95",
                    plan.recommended
                      ? "bg-yellow-400 hover:bg-yellow-500 text-white"
                      : "bg-white border-4 border-slate-100 text-slate-700 hover:bg-slate-50"
                  )}
                >
                  {isRTL ? "اشترك الآن" : "Join Now"}
                  <ArrowRight
                    size={24}
                    className={cn("ml-2", isRTL && "rotate-180")}
                  />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
