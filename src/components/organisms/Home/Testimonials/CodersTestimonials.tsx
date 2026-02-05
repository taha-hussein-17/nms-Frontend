import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { GitPullRequest, Star, Terminal, User } from "lucide-react";
// import { cn } from "../../../../utils/cn";

export const CodersTestimonials = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const reviews = [
    {
      id: "PR-204",
      author: "Omar_Dev",
      role: "Fullstack Engineer",
      comment: isRTL
        ? "أفضل منصة لتعلم هندسة البرمجيات بشكل عملي. الدورات محدثة دائماً مع أحدث التقنيات."
        : "Best platform to learn software engineering practically. Courses are always up to date with the latest tech.",
      stars: 5,
    },
    {
      id: "PR-189",
      author: "Laila_Code",
      role: "Security Researcher",
      comment: isRTL
        ? "تحديات الأمان هنا حقيقية جداً. لقد تعلمت الكثير عن الثغرات وكيفية حماية الأنظمة."
        : "The security challenges here are very real. I've learned a lot about vulnerabilities and system protection.",
      stars: 5,
    },
    {
      id: "PR-312",
      author: "Karim_JS",
      role: "Frontend Specialist",
      comment: isRTL
        ? "منهجية التعلم مذهلة. تحولت من مبتدئ إلى مطور واجهات محترف في وقت قياسي."
        : "The learning methodology is amazing. I turned from a beginner to a professional frontend dev in record time.",
      stars: 5,
    },
  ];

  return (
    <section className="py-24 bg-[#050505] text-green-500 font-mono relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 text-xs">
            <Terminal className="w-4 h-4" />
            <span>git log --pretty=format:"%s" --students</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-green-400">
            {isRTL ? "مراجعات المطورين" : "Developer Feedback"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111] border border-green-500/10 p-6 relative group hover:border-green-500/40 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2 text-[10px] text-green-700">
                  <GitPullRequest className="w-3 h-3" />
                  <span>{rev.id}</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-green-500 text-green-500"
                    />
                  ))}
                </div>
              </div>

              <div className="mb-8 min-h-[100px]">
                <p className="text-sm text-green-100/90 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-green-500/5">
                <div className="w-10 h-10 bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-green-400">
                    @{rev.author}
                  </h4>
                  <p className="text-[10px] text-green-700 uppercase">
                    {rev.role}
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
