import { useTranslation } from "react-i18next";
import {
  Search,
  Send,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Terminal,
  MessageSquare,
  Shield,
  Heart,
} from "lucide-react";
import { cn } from "../../../utils/cn";
import { useTheme } from "../../../providers/ThemeContext";

export const StudentMessages = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const isAr = i18n.language === "ar";

  const getThemeConfig = () => {
    switch (theme) {
      case "kids":
        return {
          containerClass: "bg-pink-50/50 border-pink-100",
          headerIcon: <Heart className="w-5 h-5 text-pink-500" />,
          avatarBg: "bg-pink-100 text-pink-600",
          bubbleClass: "bg-white border-pink-100 rounded-[2rem]",
          buttonClass: "bg-pink-500 hover:bg-pink-600 shadow-pink-200",
          fontClass: "font-kids",
        };
      case "programmers":
        return {
          containerClass: "bg-black/40 border-emerald-500/20",
          headerIcon: <Terminal className="w-5 h-5 text-emerald-500" />,
          avatarBg: "bg-emerald-500/10 text-emerald-500",
          bubbleClass:
            "bg-emerald-500/5 border-emerald-500/20 rounded-none font-mono text-emerald-400",
          buttonClass:
            "bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-none",
          fontClass: "font-mono",
        };
      case "azhari":
        return {
          containerClass: "bg-emerald-50/30 border-emerald-100",
          headerIcon: <Shield className="w-5 h-5 text-emerald-700" />,
          avatarBg: "bg-emerald-100 text-emerald-800",
          bubbleClass: "bg-white border-emerald-100 rounded-xl font-serif",
          buttonClass: "bg-emerald-800 hover:bg-emerald-900 rounded-xl",
          fontClass: "font-serif",
        };
      case "uni":
        return {
          containerClass: "bg-slate-50 border-slate-200",
          headerIcon: <MessageSquare className="w-5 h-5 text-maroon-700" />,
          avatarBg: "bg-maroon-50 text-maroon-700",
          bubbleClass: "bg-white border-slate-200 rounded-lg",
          buttonClass: "bg-maroon-700 hover:bg-maroon-800 rounded-lg",
          fontClass: "font-sans",
        };
      default:
        return {
          containerClass: "glass border-2",
          headerIcon: <MessageSquare className="w-5 h-5 text-primary" />,
          avatarBg: "bg-primary/10 text-primary",
          bubbleClass: "bg-background border rounded-[2rem]",
          buttonClass: "bg-primary hover:scale-105 shadow-primary/20",
          fontClass: "",
        };
    }
  };

  const config = getThemeConfig();

  return (
    <div
      className={cn(
        "h-full flex flex-col overflow-hidden shadow-2xl shadow-primary/5",
        config.containerClass,
        config.fontClass
      )}
    >
      <div className="p-6 border-b flex items-center justify-between bg-background/50 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center font-bold",
                config.avatarBg
              )}
            >
              AI
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-background" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              {config.headerIcon}
              <h3 className="font-black text-foreground">
                {isAr ? "الدعم الفني" : "Technical Support"}
              </h3>
            </div>
            <p className="text-xs text-emerald-500 font-bold uppercase tracking-tighter">
              {isAr ? "متصل الآن" : "Online"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-3 rounded-2xl hover:bg-primary/5 transition-colors text-muted-foreground">
            <Phone className="w-5 h-5" />
          </button>
          <button className="p-3 rounded-2xl hover:bg-primary/5 transition-colors text-muted-foreground">
            <Video className="w-5 h-5" />
          </button>
          <button className="p-3 rounded-2xl hover:bg-primary/5 transition-colors text-muted-foreground">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-slate-50/30 dark:bg-slate-900/30">
        <div className="flex justify-center">
          <span className="px-4 py-1 rounded-full bg-primary/5 text-[10px] font-black text-primary uppercase tracking-widest">
            {isAr ? "اليوم" : "Today"}
          </span>
        </div>

        <div
          className={cn(
            "flex gap-4 max-w-[80%]",
            isAr ? "flex-row" : "flex-row"
          )}
        >
          <div
            className={cn(
              "w-10 h-10 rounded-2xl shrink-0 flex items-center justify-center font-bold",
              config.avatarBg
            )}
          >
            AI
          </div>
          <div className="space-y-2">
            <div
              className={cn(
                "p-5 rounded-tl-none border shadow-sm text-sm leading-relaxed",
                config.bubbleClass
              )}
            >
              {theme === "programmers" && (
                <span className="text-emerald-500/50 block mb-2 font-mono text-[10px]">
                  # system_message:
                </span>
              )}
              {isAr
                ? "مرحباً بك! كيف يمكنني مساعدتك اليوم في رحلتك التعليمية؟"
                : "Welcome! How can I help you with your learning journey today?"}
            </div>
            <span className="text-[10px] text-muted-foreground font-bold px-2">
              10:00 AM
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 bg-background/50 backdrop-blur-md border-t">
        <div className="relative flex items-center gap-4">
          <button className="p-3 rounded-2xl hover:bg-primary/5 transition-colors text-muted-foreground">
            <Paperclip className="w-5 h-5" />
          </button>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder={t("dashboard.type_message")}
              className={cn(
                "w-full h-14 bg-background border-2 border-primary/5 rounded-2xl px-6 focus:outline-none focus:border-primary/20 transition-all font-medium",
                theme === "programmers" &&
                  "rounded-none font-mono border-emerald-500/20"
              )}
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-xl hover:bg-primary/5 transition-colors text-muted-foreground">
              <Search className="w-5 h-5" />
            </button>
          </div>
          <button
            className={cn(
              "h-14 w-14 flex items-center justify-center transition-all shadow-lg",
              config.buttonClass,
              theme !== "programmers" && "rounded-2xl"
            )}
          >
            <Send className={cn("w-6 h-6", isAr && "rotate-180")} />
          </button>
        </div>
      </div>
    </div>
  );
};
