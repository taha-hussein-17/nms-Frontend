import React from "react";
import { Card } from "../../../components/atoms/Card";
import { Button } from "../../../components/atoms/Button";
import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";
import { useTranslation } from "react-i18next";

export interface StatItem {
  key: string;
  label: string;
  value: string;
  icon: React.ElementType;
  color: string;
  bg: string;
}

export const StatsGrid = ({
  stats,
  theme,
  onView,
}: {
  stats: StatItem[];
  theme?: string;
  onView: (key: string) => void;
}) => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
      {stats.map((s, i) => {
        const Icon = s.icon;
        return (
          <motion.div
            key={s.key}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
          >
            <Card
              className={cn(
                "p-4 rounded-2xl",
                theme === "programmers"
                  ? "bg-black/40 border-emerald-500/20"
                  : ""
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn("p-3 rounded-xl", s.bg)}>
                    <Icon className={cn("w-5 h-5", s.color)} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                      {s.label}
                    </p>
                    <p className="text-2xl font-black">{s.value}</p>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="bg-[#0D358C] hover:bg-[#0D358C]/90 text-white h-8 px-4 text-xs font-bold"
                  onClick={() => onView(s.key)}
                >
                  {t("dashboard.view", "View")}
                </Button>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};
