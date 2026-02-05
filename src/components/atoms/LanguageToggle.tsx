import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import { Button } from "../atoms/Button";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 h-10 rounded-xl border-2 border-primary/20 text-primary bg-primary/5 hover:bg-primary/10 transition-all shadow-sm"
      title={i18n.language === "ar" ? "English" : "العربية"}
    >
      <Languages className="w-4.5 h-4.5 text-primary" />
      <span className="text-sm font-black uppercase tracking-wider">
        {i18n.language === "ar" ? "EN" : "AR"}
      </span>
    </Button>
  );
};
