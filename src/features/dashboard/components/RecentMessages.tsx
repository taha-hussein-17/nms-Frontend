import { Card } from "../../../components/atoms/Card";
import { Button } from "../../../components/atoms/Button";
import { MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { cn } from "../../../utils/cn";

export interface MessageItem {
  id: number;
  from: string;
  text: string;
  time: string;
}

export const RecentMessages = ({
  isAr,
  messages,
  theme,
}: {
  isAr: boolean;
  messages: MessageItem[];
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
        <MessageSquare className="w-5 h-5 text-[#0D358C]" />
        {isAr ? "الرسائل الأخيرة" : "Recent Messages"}
      </h2>
      <div className="space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className="flex gap-4 p-3 rounded-xl hover:bg-secondary/5 transition group cursor-pointer"
            onClick={() => navigate(ROUTES.DASHBOARD_MESSAGES)}
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center font-bold text-primary">
              {m.from.charAt(0)}
            </div>
            <div className="min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-bold text-sm truncate">{m.from}</h4>
                <span className="text-[10px] text-muted-foreground flex-shrink-0">
                  {m.time}
                </span>
              </div>
              <p className="text-xs text-muted-foreground truncate">{m.text}</p>
            </div>
          </div>
        ))}
        <Button
          size="sm"
          onClick={() => navigate(ROUTES.DASHBOARD_MESSAGES)}
          className="w-full text-xs font-bold bg-[#EBF0FD] border border-[#0D358C] text-[#0D358C] hover:bg-[#0D358C] hover:border-white hover:text-white flex items-center justify-center gap-2"
        >
          <MessageSquare className="w-4 h-4" />
          {isAr ? "كل الرسائل" : "All Messages"}
        </Button>
      </div>
    </Card>
  );
};
