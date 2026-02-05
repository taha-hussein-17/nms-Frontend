import { useState, useRef, useEffect } from "react";
import {
  Moon,
  Sun,
  Baby,
  Code,
  GraduationCap,
  School,
  Palette,
  Layout,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "../../providers/ThemeContext";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export function ThemeToggle() {
  const { theme, mode, setTheme, setMode } = useTheme();
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const [isModeOpen, setIsModeOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const modeRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modeRef.current && !modeRef.current.contains(event.target as Node)) {
        setIsModeOpen(false);
      }
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const modes = [
    { name: "light", label: isAr ? "نهاري" : "Light", icon: Sun },
    { name: "dark", label: isAr ? "ليلي" : "Dark", icon: Moon },
    { name: "system", label: isAr ? "تلقائي" : "System", icon: Palette },
  ];

  const categories = [
    { name: "default", label: isAr ? "عام" : "General", icon: Layout },
    { name: "kids", label: isAr ? "أطفال" : "Kids", icon: Baby },
    { name: "coders", label: isAr ? "مبرمجين" : "Coders", icon: Code },
    { name: "azhari", label: isAr ? "أزهري" : "Azhari", icon: School },
    { name: "uni", label: isAr ? "جامعي" : "University", icon: GraduationCap },
  ];

  const currentMode = modes.find((m) => m.name === mode) || modes[0];
  const currentCategory =
    categories.find((c) => c.name === theme) || categories[0];

  const DropdownList = ({
    isOpen,
    items,
    currentValue,
    onSelect,
  }: {
    isOpen: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items: any[];
    currentValue: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSelect: (val: any) => void;
  }) => (
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
          {items.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                onSelect(item.name);
              }}
              className={cn(
                "w-full px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 mb-0.5 last:mb-0 flex items-center justify-between",
                isAr ? "flex-row-reverse" : "flex-row",
                currentValue === item.name
                  ? "bg-[#EBF0FD] text-primary"
                  : "hover:bg-slate-50 text-[#445161] hover:text-[#001133]"
              )}
            >
              <div
                className={cn(
                  "flex items-center gap-2",
                  isAr && "flex-row-reverse"
                )}
              >
                <item.icon className="h-3.5 w-3.5" />
                <span>{item.label}</span>
              </div>
              {currentValue === item.name && (
                <div className="w-1 h-1 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center gap-2",
        isAr && "flex-row-reverse"
      )}
    >
      {/* Mode Toggle */}
      <div className="relative w-full sm:w-auto" ref={modeRef}>
        <button
          onClick={() => {
            setIsModeOpen(!isModeOpen);
            setIsCategoryOpen(false);
          }}
          className={cn(
            "flex items-center justify-between gap-3 h-11 px-4 bg-white border-2 border-[#DCE5FE] rounded-xl min-w-[120px] transition-all duration-300 group hover:border-primary hover:shadow-lg hover:shadow-primary/5",
            isModeOpen && "border-primary shadow-lg shadow-primary/5",
            isAr && "flex-row-reverse"
          )}
        >
          <div
            className={cn(
              "flex items-center gap-2",
              isAr && "flex-row-reverse"
            )}
          >
            <currentMode.icon className="h-4 w-4 text-primary" />
            <span className="font-extrabold text-sm text-[#001133] pt-1">
              {currentMode.label}
            </span>
          </div>
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 text-primary/50 transition-transform duration-300",
              isModeOpen && "rotate-180 text-primary"
            )}
          />
        </button>
        {/* eslint-disable-next-line react-hooks/static-components */}
        <DropdownList
          isOpen={isModeOpen}
          items={modes}
          currentValue={mode}
          onSelect={(val) => {
            setMode(val);
            setIsModeOpen(false);
          }}
        />
      </div>

      {/* Category Toggle */}
      <div className="relative w-full sm:w-auto" ref={categoryRef}>
        <button
          onClick={() => {
            setIsCategoryOpen(!isCategoryOpen);
            setIsModeOpen(false);
          }}
          className={cn(
            "flex items-center justify-between gap-3 h-11 px-4 bg-white border-2 border-[#DCE5FE] rounded-xl min-w-[140px] transition-all duration-300 group hover:border-primary hover:shadow-lg hover:shadow-primary/5",
            isCategoryOpen && "border-primary shadow-lg shadow-primary/5",
            isAr && "flex-row-reverse"
          )}
        >
          <div
            className={cn(
              "flex items-center gap-2",
              isAr && "flex-row-reverse"
            )}
          >
            <currentCategory.icon className="h-4 w-4 text-primary" />
            <span className="font-extrabold text-sm text-[#001133] pt-1">
              {currentCategory.label}
            </span>
          </div>
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 text-primary/50 transition-transform duration-300",
              isCategoryOpen && "rotate-180 text-primary"
            )}
          />
        </button>
        {/* eslint-disable-next-line react-hooks/static-components */}
        <DropdownList
          isOpen={isCategoryOpen}
          items={categories}
          currentValue={theme}
          onSelect={(val) => {
            setTheme(val);
            setIsCategoryOpen(false);
          }}
        />
      </div>
    </div>
  );
}
