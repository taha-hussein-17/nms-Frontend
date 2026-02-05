import { Card } from "../atoms/Card";
import { cn } from "../../utils/cn";

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
}

export const StatCard = ({ label, value, icon, color, bg }: StatCardProps) => {
  return (
    <Card className="p-8 glass border-2 border-transparent hover:border-primary/10 transition-all duration-500 rounded-[2.5rem]">
      <div className="flex items-center gap-6">
        <div className={cn("p-4 rounded-2xl", bg)}>
          <div className={color}>{icon}</div>
        </div>
        <div>
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">
            {label}
          </p>
          <p className="text-3xl font-black">{value}</p>
        </div>
      </div>
    </Card>
  );
};
