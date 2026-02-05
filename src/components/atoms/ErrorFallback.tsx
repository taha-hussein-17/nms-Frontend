import { Button } from "./Button";
import { useTranslation } from "react-i18next";

export const ErrorFallback = ({ onReload }: { onReload: () => void }) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-background px-4"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-md w-full bg-card border border-secondary rounded-3xl p-8 text-center">
        <h1 className="text-2xl font-black mb-3">
          {isAr ? "حدث خطأ غير متوقع" : "Unexpected Error Occurred"}
        </h1>
        <p className="text-muted-foreground mb-6">
          {isAr
            ? "يرجى إعادة تحميل الصفحة أو المحاولة لاحقاً"
            : "Please reload the page or try again later"}
        </p>
        <Button onClick={onReload} className="rounded-2xl">
          {isAr ? "إعادة التحميل" : "Reload"}
        </Button>
      </div>
    </div>
  );
};
