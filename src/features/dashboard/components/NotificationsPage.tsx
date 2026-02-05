import { useTranslation } from "react-i18next";
import {
  Bell,
  Check,
  Info,
  AlertCircle,
  MessageSquare,
  Trash2,
  CheckCheck,
  Terminal,
  Zap,
  Shield,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../../../utils/cn";
import { Button } from "../../../components/atoms/Button";
import { Card } from "../../../components/atoms/Card";
import { useTheme } from "../../../providers/ThemeContext";

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "info" | "success" | "warning" | "message";
  read: boolean;
}

const NotificationsPage = () => {
  const { i18n } = useTranslation();
  const { theme } = useTheme();
  const isAr = i18n.language === "ar";
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: isAr ? "مرحباً بك في أكاديمية WAKP" : "Welcome to WAKP Academy",
      description: isAr
        ? "استكشف أحدث الكورسات التعليمية المتاحة الآن."
        : "Explore the latest educational courses available now.",
      time: "2m ago",
      type: "info",
      read: false,
    },
    {
      id: "2",
      title: isAr ? "تم اكتمال الدفع" : "Payment Successful",
      description: isAr
        ? "تم تفعيل اشتراكك في كورس البرمجة بنجاح."
        : "Your subscription to the Programming course is active.",
      time: "1h ago",
      type: "success",
      read: false,
    },
    {
      id: "3",
      title: isAr ? "رسالة جديدة من المدرب" : "New Message from Instructor",
      description: isAr
        ? "لديك تعليق جديد على الواجب الخاص بك."
        : "You have a new comment on your assignment.",
      time: "3h ago",
      type: "message",
      read: true,
    },
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const getThemeConfig = () => {
    switch (theme) {
      case "kids":
        return {
          titleClass: "text-pink-600 font-kids",
          icon: <Zap className="w-8 h-8 text-yellow-400" />,
          cardClass: "bg-pink-50/50 border-pink-100 rounded-[2rem]",
          buttonClass:
            "rounded-full bg-pink-500 hover:bg-pink-600 shadow-pink-200",
          fontClass: "font-kids",
        };
      case "programmers":
        return {
          titleClass: "text-emerald-500 font-mono uppercase tracking-tighter",
          icon: <Terminal className="w-8 h-8 text-emerald-500" />,
          cardClass: "bg-black/40 border-emerald-500/20 rounded-none",
          buttonClass:
            "rounded-none bg-emerald-500 hover:bg-emerald-600 text-black font-bold border border-emerald-500/30",
          fontClass: "font-mono",
        };
      case "azhari":
        return {
          titleClass: "text-emerald-900 font-serif font-bold",
          icon: <Shield className="w-8 h-8 text-emerald-700" />,
          cardClass: "bg-emerald-50/30 border-emerald-100 rounded-xl",
          buttonClass: "rounded-xl bg-emerald-800 hover:bg-emerald-900",
          fontClass: "font-serif",
        };
      case "uni":
        return {
          titleClass: "text-slate-900 font-sans font-bold",
          icon: <Target className="w-8 h-8 text-maroon-700" />,
          cardClass: "bg-slate-50 border-slate-200 rounded-lg",
          buttonClass: "rounded-lg bg-maroon-700 hover:bg-maroon-800",
          fontClass: "font-sans",
        };
      default:
        return {
          titleClass: "text-foreground font-black",
          icon: <Bell className="w-8 h-8 text-primary" />,
          cardClass: "glass border-2 rounded-[2.5rem]",
          buttonClass: "rounded-full",
          fontClass: "",
        };
    }
  };

  const config = getThemeConfig();

  const getTypeIcon = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return <Check className="w-5 h-5 text-green-500" />;
      case "warning":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case "message":
        return <MessageSquare className="w-5 h-5 text-blue-500" />;
      default:
        return (
          <Info
            className={cn(
              "w-5 h-5",
              theme === "programmers" ? "text-emerald-500" : "text-primary"
            )}
          />
        );
    }
  };

  return (
    <div className={cn("space-y-6", config.fontClass)}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "p-3 rounded-2xl bg-primary/10",
              theme === "programmers" && "rounded-none bg-emerald-500/10"
            )}
          >
            {config.icon}
          </div>
          <div>
            <h1 className={cn("text-3xl", config.titleClass)}>
              {isAr ? "الإشعارات" : "Notifications"}
            </h1>
            <p className="text-muted-foreground mt-1">
              {theme === "programmers"
                ? "> SYSTEM_STATUS: OK"
                : isAr
                  ? "تابع آخر التحديثات والرسائل الخاصة بك"
                  : "Follow your latest updates and messages"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={markAllAsRead}
            className={cn(
              config.buttonClass,
              "bg-transparent border-primary/20"
            )}
          >
            <CheckCheck className="w-4 h-4 mr-2" />
            {isAr ? "تحديد الكل كمقروء" : "Mark all as read"}
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {notifications.length === 0 ? (
          <Card className={cn("p-12 text-center", config.cardClass)}>
            <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-20" />
            <p className="text-muted-foreground font-bold">
              {isAr ? "لا توجد إشعارات حالياً" : "No notifications yet"}
            </p>
          </Card>
        ) : (
          notifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={cn(
                  "p-6 transition-all duration-300",
                  config.cardClass,
                  !notification.read && "border-primary/30 bg-primary/5"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "p-3 rounded-xl",
                        theme === "programmers"
                          ? "bg-emerald-500/10 rounded-none"
                          : "bg-background shadow-sm"
                      )}
                    >
                      {getTypeIcon(notification.type)}
                    </div>
                    <div>
                      <h3
                        className={cn(
                          "font-bold text-foreground",
                          !notification.read && "text-primary"
                        )}
                      >
                        {notification.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {notification.description}
                      </p>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-black mt-2 block">
                        {notification.time}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => deleteNotification(notification.id)}
                      className="p-2 rounded-lg hover:bg-red-500/10 hover:text-red-500 text-muted-foreground transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
