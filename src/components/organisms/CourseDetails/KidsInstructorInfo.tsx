import { Heart, Star, Trophy, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { type Course } from "../../../types";
import { useTranslation } from "react-i18next";

interface InstructorInfoProps {
  course: Course;
}

export const KidsInstructorInfo = ({ course }: InstructorInfoProps) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <div className="bg-white rounded-[4rem] p-10 md:p-16 shadow-2xl border-8 border-sky-100 relative overflow-hidden group">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-bl-[4rem] -z-0 opacity-50" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-100 rounded-tr-[4rem] -z-0 opacity-50" />

      <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
        <div className="relative">
          <motion.div
            whileHover={{ rotate: 5, scale: 1.05 }}
            className="w-56 h-56 rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl relative"
          >
            <img
              src="https://i.pravatar.cc/300?img=12"
              className="w-full h-full object-cover"
              alt={course.instructor}
            />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white shadow-xl border-4 border-white"
          >
            <Trophy className="w-8 h-8 text-yellow-900" />
          </motion.div>
        </div>

        <div className="flex-1 space-y-6 text-center md:text-right">
          <div className="space-y-2">
            <span className="inline-block px-6 py-2 rounded-full bg-sky-100 text-sky-600 font-black text-sm uppercase tracking-widest">
              {isAr ? "مرشدك المبدع" : "Your Creative Mentor"}
            </span>
            <h2 className="text-5xl font-black text-sky-900 flex items-center justify-center md:justify-start gap-4">
              {course.instructor}
              <Sparkles className="text-yellow-400" />
            </h2>
            <p className="text-pink-500 font-black text-xl">
              {isAr ? "صديق الأطفال المفضل" : "Kids' Favorite Friend"}
            </p>
          </div>

          <p className="text-sky-700 text-xl leading-relaxed font-bold">
            {isAr
              ? "يحب كابتن أنس تبسيط العلوم وتحويل كل درس إلى لعبة ممتعة! مع أكثر من 10 سنوات من الخبرة في تعليم الأبطال الصغار مهارات المستقبل."
              : "Captain Anas loves simplifying science and turning every lesson into a fun game! With over 10 years of experience teaching young heroes the skills of the future."}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-10 pt-4">
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center text-yellow-500 mb-1">
                <Star className="fill-current" size={24} />
                <span className="font-black text-3xl">4.9</span>
              </div>
              <p className="text-sky-400 font-black text-sm uppercase">
                {isAr ? "تقييم النجوم" : "Star Rating"}
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center text-pink-500 mb-1">
                <Heart className="fill-current" size={24} />
                <span className="font-black text-3xl">12k+</span>
              </div>
              <p className="text-sky-400 font-black text-sm uppercase">
                {isAr ? "صديق يحبنا" : "Friends Love Us"}
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center text-sky-500 mb-1">
                <Trophy size={24} />
                <span className="font-black text-3xl">50k+</span>
              </div>
              <p className="text-sky-400 font-black text-sm uppercase">
                {isAr ? "بطل تخرج" : "Heroes Graduated"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
