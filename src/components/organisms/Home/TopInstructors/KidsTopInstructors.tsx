import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Star, Heart, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "../../../../utils/cn";
import { getMockInstructors } from "../../../../data/mockData";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "../../../atoms/Button";
import { Card } from "../../../atoms/Card";
import { ROUTES } from "../../../../constants/routes";

export const KidsTopInstructors = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const instructors = useMemo(
    () => getMockInstructors(i18n.language).slice(0, 4),
    [i18n.language]
  );

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-[#F0F9FF]">
      {/* Playful background shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl animate-bounce" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-500 text-white font-black shadow-lg"
          >
            <Sparkles size={20} />
            {isRTL ? "أفضل المعلمين الأبطال!" : "Best Hero Teachers!"}
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black text-slate-800 tracking-tight">
            {isRTL ? "تعرف على معلميك" : "Meet Your Teachers"}
          </h2>
          <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto">
            {isRTL
              ? "نخبة من المعلمين المبدعين الذين يحبون الأطفال ويجعلون التعلم متعة"
              : "Creative teachers who love kids and make learning fun"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {instructors.map((ins, i) => (
            <motion.div
              key={ins.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="group relative p-8 text-center bg-white border-8 border-slate-50 rounded-[4rem] shadow-[0_20px_0_0_rgba(0,0,0,0.03)] hover:shadow-none hover:translate-y-2 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="relative mb-8 inline-block">
                    <div className="relative w-40 h-40 mx-auto">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-blue-400 animate-spin-slow opacity-20 group-hover:opacity-40" />
                      <div className="absolute inset-3 rounded-full overflow-hidden border-8 border-white shadow-xl">
                        <img
                          src={ins.image}
                          alt={ins.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-yellow-400 text-white text-xs font-black shadow-lg transform -rotate-3">
                      {isRTL ? "معلم بطل 🌟" : "Hero Teacher 🌟"}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-black text-slate-800 group-hover:text-primary transition-colors">
                        {ins.name}
                      </h3>
                      <p className="text-sm font-black text-slate-400 uppercase tracking-widest mt-1">
                        {ins.specialty}
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-6 p-4 bg-slate-50 rounded-[2rem]">
                      <div className="text-center">
                        <div className="flex items-center gap-1 text-yellow-500 font-black text-lg">
                          <Star size={20} fill="currentColor" />
                          <span>{ins.rating}</span>
                        </div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          {isRTL ? "تقييم" : "Rating"}
                        </p>
                      </div>
                      <div className="w-px h-8 bg-slate-200" />
                      <div className="text-center">
                        <div className="text-slate-700 font-black text-lg">
                          {ins.studentsCount}
                        </div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          {isRTL ? "بطل" : "Hero"}
                        </p>
                      </div>
                    </div>

                    <Link to={ROUTES.INSTRUCTOR_DETAILS.replace(":id", ins.id)}>
                      <Button className="w-full h-14 rounded-full font-black bg-white border-4 border-slate-100 text-slate-700 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                        {isRTL ? "تعرف عليّ أكثر" : "Get to know me"}
                        <Heart
                          size={18}
                          className="ml-2 group-hover:fill-current"
                        />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to={ROUTES.INSTRUCTORS}>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-4 border-slate-100 font-black text-lg h-16 px-12 hover:bg-white hover:border-primary/20 transition-all"
            >
              {isRTL ? "مشاهدة جميع المعلمين" : "View All Teachers"}
              <ArrowRight
                size={24}
                className={cn("ml-2", isRTL && "rotate-180")}
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
