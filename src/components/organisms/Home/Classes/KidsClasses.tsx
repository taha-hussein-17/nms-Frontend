import { useTranslation } from "react-i18next";
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  Users,
  PlayCircle,
  Star,
  Sparkles,
  Rocket,
  Heart,
} from "lucide-react";
import { Button } from "../../../atoms/Button";
import { cn } from "../../../../utils/cn";
import { motion } from "framer-motion";
import { Badge } from "../../../atoms/Badge";

export const KidsClasses = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const isRTL = isAr;

  const liveClasses = [
    {
      id: 1,
      title: isRTL ? "مغامرة اللغة الإنجليزية" : "English Adventure",
      instructor: isRTL ? "ماما سارة" : "Mama Sarah",
      date: "2026-01-10",
      time: "18:00",
      students: 45,
      category: isRTL ? "لغات ممتعة" : "Fun Languages",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80",
      color: "border-pink-200 shadow-[#ff79c6]",
      icon: Rocket,
    },
    {
      id: 2,
      title: isRTL ? "عالم العلوم السحري" : "Magic Science World",
      instructor: isRTL ? "كابتن علي" : "Captain Ali",
      date: "2026-01-12",
      time: "20:00",
      students: 120,
      category: isRTL ? "علوم الأبطال" : "Hero Science",
      image:
        "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=500&q=80",
      color: "border-blue-200 shadow-[#8be9fd]",
      icon: Sparkles,
    },
    {
      id: 3,
      title: isRTL ? "كيف تكون بطلاً شجاعاً" : "How to be a Brave Hero",
      instructor: isRTL ? "أستاذ محمود" : "Mr. Mahmoud",
      date: "2026-01-15",
      time: "17:30",
      students: 88,
      category: isRTL ? "أخلاق الأبطال" : "Hero Manners",
      image:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&q=80",
      color: "border-yellow-200 shadow-[#f1fa8c]",
      icon: Heart,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#FFFAEC]">
      {/* Decorative background items */}
      <div className="absolute top-10 left-10 text-yellow-400 opacity-20 animate-bounce">
        <Star size={64} fill="currentColor" />
      </div>
      <div className="absolute bottom-10 right-10 text-pink-400 opacity-20 animate-pulse">
        <Heart size={64} fill="currentColor" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-red-500 text-white font-black shadow-lg transform -rotate-2"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            {isRTL ? "بث مباشر الآن! 📺" : "Live Now! 📺"}
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black text-slate-800 tracking-tight">
            {isRTL ? "حصص الأبطال المباشرة" : "Heroes Live Classes"}
          </h2>
          <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto">
            {isRTL
              ? "انضم إلينا الآن في رحلة تعلم ممتعة ومباشرة مع أفضل المعلمين"
              : "Join us now in a fun live learning journey with the best teachers"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {liveClasses.map((live, i) => (
            <motion.div
              key={live.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div
                className={cn(
                  "bg-white border-8 rounded-[4rem] overflow-hidden flex flex-col h-full transition-all duration-300",
                  live.color,
                  "shadow-[0_20px_0_0_rgba(0,0,0,0.05)] hover:shadow-none hover:translate-y-2"
                )}
              >
                <div className="relative aspect-[4/3] overflow-hidden m-4 rounded-[3rem]">
                  <img
                    src={live.image}
                    alt={live.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <Badge className="bg-red-500 text-white border-none px-4 py-2 rounded-full font-black text-xs shadow-lg">
                      {isRTL ? "مباشر 🔴" : "LIVE 🔴"}
                    </Badge>
                    <Badge className="bg-white/90 text-primary border-none px-4 py-2 rounded-full font-black text-xs shadow-lg backdrop-blur-sm">
                      {live.category}
                    </Badge>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-20 h-20 rounded-full bg-white text-primary flex items-center justify-center shadow-2xl transform scale-50 group-hover:scale-100 transition-transform">
                      <PlayCircle size={48} fill="currentColor" />
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow space-y-6">
                  <h3 className="font-black text-2xl text-slate-800 group-hover:text-primary transition-colors leading-tight">
                    {live.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-[2rem]">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary">
                        <User size={24} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          {isRTL ? "المعلم" : "Teacher"}
                        </span>
                        <span className="text-sm font-black text-slate-700 truncate">
                          {live.instructor}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-orange-500">
                        <Users size={24} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          {isRTL ? "بطل" : "Hero"}
                        </span>
                        <span className="text-sm font-black text-slate-700">
                          {live.students}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-6 py-2">
                    <div className="flex items-center gap-2 text-slate-400 font-black text-sm">
                      <Calendar size={18} className="text-primary" />
                      {live.date}
                    </div>
                    <div className="w-2 h-2 rounded-full bg-slate-200" />
                    <div className="flex items-center gap-2 text-slate-400 font-black text-sm">
                      <Clock size={18} className="text-primary" />
                      {live.time}
                    </div>
                  </div>

                  <Button className="w-full h-16 rounded-full text-lg font-black bg-primary hover:bg-primary/90 shadow-[0_8px_0_0_#3bbbb2] active:shadow-none active:translate-y-2 transition-all">
                    <span className="flex items-center gap-2">
                      {isRTL ? "احجز مكانك يا بطل!" : "Join Now, Hero!"}
                      <ArrowRight
                        size={20}
                        className={cn(isRTL && "rotate-180")}
                      />
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-4 border-slate-200 font-black text-lg h-16 px-12 hover:bg-white hover:border-primary/20 transition-all"
          >
            {isRTL ? "عرض جدول الحصص بالكامل" : "View Full Schedule"}
          </Button>
        </div>
      </div>
    </section>
  );
};
