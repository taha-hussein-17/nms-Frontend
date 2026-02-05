import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Terminal, Code2, Clock, Users, Play, Cpu } from "lucide-react";
// import { cn } from "../../../../utils/cn";

export const CodersClasses = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const liveClasses = [
    {
      id: 1,
      title: isRTL
        ? "هندسة البرمجيات المتقدمة"
        : "Advanced Software Engineering",
      instructor: isRTL ? "م. أحمد خالد" : "Eng. Ahmed Khaled",
      time: "18:00",
      students: 156,
      lang: "TypeScript",
      status: "compiling",
    },
    {
      id: 2,
      title: isRTL ? "تطوير واجهات المستخدم بـ React" : "React UI Development",
      instructor: isRTL ? "سارة محمد" : "Sarah Mohamed",
      time: "20:00",
      students: 230,
      lang: "JavaScript",
      status: "running",
    },
    {
      id: 3,
      title: isRTL ? "أمن المعلومات والشبكات" : "Cyber Security & Networking",
      instructor: isRTL ? "د. عمر حسن" : "Dr. Omar Hassan",
      time: "21:30",
      students: 89,
      lang: "Python",
      status: "debug",
    },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] text-green-500 font-mono relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full text-[10px] leading-none select-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {/* eslint-disable-next-line react-hooks/purity */}
              {Math.random().toString(36).substring(2).repeat(10)}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-green-500/30 bg-green-500/10 text-xs">
              <Terminal className="w-4 h-4" />
              <span>npm run dev --live</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-green-400">
              {"> "} {isRTL ? "جلسات البث المباشر" : "Live Dev Sessions"}
            </h2>
            <p className="text-green-600/80 max-w-xl">
              {isRTL
                ? "انضم إلى المطورين في جلسات برمجية حية، حل مشكلات حقيقية، وبناء مشاريع ضخمة."
                : "Join developers in live coding sessions, solving real-world problems and building massive projects."}
            </p>
          </motion.div>

          <div className="flex items-center gap-2 text-xs text-green-700">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>LIVE_STREAM_ACTIVE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {liveClasses.map((session, i) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-[#111] border border-green-500/20 hover:border-green-500/50 transition-all p-6 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
                <Cpu className="w-12 h-12" />
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="px-2 py-1 bg-green-500/10 border border-green-500/30 text-[10px]">
                  {session.lang}
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Clock className="w-3 h-3" />
                  <span>{session.time}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                {session.title}
              </h3>

              <div className="space-y-3 mb-8 text-sm text-green-600/70">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  <span>{session.instructor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{session.students} peers connected</span>
                </div>
              </div>

              <button className="w-full py-3 bg-green-500/5 border border-green-500/30 hover:bg-green-500 hover:text-black transition-all flex items-center justify-center gap-2 font-bold group">
                <Play className="w-4 h-4 fill-current" />
                <span>SSH_CONNECT</span>
              </button>

              <div className="mt-4 flex gap-1">
                <div className="h-1 flex-1 bg-green-500/20 overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="h-full w-1/3 bg-green-500/40"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
