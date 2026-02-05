import { useTranslation } from "react-i18next";
import {
  GraduationCap,
  Award,
  Globe,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../../../atoms/Button";
import { cn } from "../../../../utils/cn";

export const UniHero = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="relative min-h-[90vh] flex items-center pt-8 bg-white text-[#1a1a1a] font-sans overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-50" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded border border-[#800000] text-[#800000] text-xs font-bold uppercase tracking-widest">
              <Award size={14} />
              Accredited Higher Education
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Shape Your <span className="text-[#800000]">Future</span> With
              Academic Excellence
            </h1>

            <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
              Join thousands of students achieving their degrees and
              professional certifications through our world-class digital
              campus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#800000] hover:bg-[#600000]  px-12 rounded-none font-bold uppercase tracking-wider h-14"
              >
                Explore Degrees{" "}
                <ArrowRight
                  className={cn("ml-2 w-5 h-5", isRTL && "rotate-180")}
                />
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 px-12 rounded-none font-bold uppercase tracking-wider h-14 hover:bg-gray-50"
              >
                View Faculty
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Globe className="text-[#800000]" size={20} />
                <span className="text-sm font-semibold">
                  Global Recognition
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="text-[#800000]" size={20} />
                <span className="text-sm font-semibold">Research Based</span>
              </div>
            </div>
          </motion.div>

          {/* Academic Visual */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden lg:block relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=600"
                  alt="University Campus"
                  className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                />
                <div className="bg-[#ffd700] p-6 rounded-lg text-black">
                  <GraduationCap size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold">98%</h3>
                  <p className="text-sm font-semibold uppercase">
                    Graduate Success Rate
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-[#800000] p-6 rounded-lg text-white">
                  <h3 className="text-4xl font-bold mb-2">50+</h3>
                  <p className="text-sm font-semibold uppercase">
                    Degree Programs
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600"
                  alt="Student Studying"
                  className="rounded-lg shadow-lg w-full h-[350px] object-cover"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-2xl border-8 border-gray-50">
              <div className="w-24 h-24 rounded-full border-4 border-[#800000] flex items-center justify-center text-[#800000] font-black text-center text-xs leading-none">
                EST.
                <br />
                1998
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
