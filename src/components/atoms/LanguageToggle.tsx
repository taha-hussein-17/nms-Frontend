import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Languages, ChevronDown } from "lucide-react";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "ar", label: "العربية", flag: "AR" },
    { code: "en", label: "English", flag: "EN" },
  ];

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-between gap-3 h-11 px-4 bg-white border-2 border-[#DCE5FE] rounded-xl min-w-[100px] transition-all duration-300 group hover:border-primary hover:shadow-lg hover:shadow-primary/5",
          isOpen && "border-primary shadow-lg shadow-primary/5",
          isAr && "flex-row-reverse"
        )}
      >
        <div
          className={cn("flex items-center gap-2", isAr && "flex-row-reverse")}
        >
          <Languages className="h-4 w-4 text-primary" />
          <span className="font-extrabold text-sm text-[#001133] pt-1 uppercase">
            {currentLang.code}
          </span>
        </div>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-primary/50 transition-transform duration-300",
            isOpen && "rotate-180 text-primary"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className={cn(
              "absolute top-full mt-2 w-full min-w-[140px] bg-white border-2 border-[#DCE5FE] rounded-2xl shadow-2xl p-1.5 z-[100] overflow-hidden",
              isAr ? "right-0" : "left-0"
            )}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 mb-0.5 last:mb-0 flex items-center justify-between",
                  isAr ? "flex-row-reverse" : "flex-row",
                  i18n.language === lang.code
                    ? "bg-[#EBF0FD] text-primary"
                    : "hover:bg-slate-50 text-[#445161] hover:text-[#001133]"
                )}
              >
                <div
                  className={cn(
                    "flex items-center gap-3",
                    isAr && "flex-row-reverse"
                  )}
                >
                  <span className="text-[10px] font-black bg-primary/10 text-primary px-1.5 py-0.5 rounded-md">
                    {lang.flag}
                  </span>
                  <span>{lang.label}</span>
                </div>
                {i18n.language === lang.code && (
                  <div className="w-1 h-1 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
