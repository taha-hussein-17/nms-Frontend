import { Card } from "../../../components/atoms/Card";
import { Button } from "../../../components/atoms/Button";
import { cn } from "../../../utils/cn";
import { ListTodo, Calendar as CalendarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

export interface UpcomingItem {
  id: number;
  title: string;
  date: string;
  type: "assignment" | "exam";
}

export const UpcomingTasks = ({
  isAr,
  upcoming,
  theme,
}: {
  isAr: boolean;
  upcoming: UpcomingItem[];
  theme?: string;
}) => {
  const navigate = useNavigate();
  return (
    <Card
      className={cn(
        "p-6 rounded-2xl",
        theme === "programmers" ? "bg-black/40 border-emerald-500/20" : ""
      )}
    >
      <h2 className="text-lg font-extrabold mb-6 flex items-center gap-2 text-[#0D358C]">
        <ListTodo className="w-5 h-5 text-[#0D358C]" />
        {isAr ? "المهام القادمة" : "Upcoming Tasks"}
      </h2>
      <div className="space-y-4">
        {upcoming.map((u) => (
          <div
            key={u.id}
            className="flex items-center gap-4 p-3 rounded-xl bg-secondary/5 hover:bg-secondary/10 transition group cursor-pointer"
            onClick={() =>
              navigate(
                u.type === "exam"
                  ? ROUTES.DASHBOARD_EXAMS
                  : ROUTES.DASHBOARD_ASSIGNMENTS
              )
            }
          >
            <div
              className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs",
                u.type === "exam"
                  ? "bg-red-100 text-red-600"
                  : "bg-blue-100 text-blue-600"
              )}
            >
              {u.type === "exam" ? "EX" : "AS"}
            </div>
            <div>
              <h4 className="font-bold text-sm group-hover:text-primary transition-colors">
                {u.title}
              </h4>
              <p className="text-xs text-muted-foreground">{u.date}</p>
            </div>
          </div>
        ))}
        <Button
          size="sm"
          onClick={() => navigate(ROUTES.DASHBOARD_CALENDAR)}
          className="w-full text-xs font-bold bg-[#EBF0FD] border border-[#0D358C] text-[#0D358C] hover:bg-[#0D358C] hover:border-white hover:text-white flex items-center justify-center gap-2"
        >
          <CalendarIcon className="w-4 h-4" />
          {isAr ? "عرض التقويم الكامل" : "View Full Calendar"}
        </Button>
      </div>
    </Card>
  );
};
