import {
  Moon,
  Sun,
  Baby,
  Code,
  GraduationCap,
  School,
  Palette,
  Layout,
} from "lucide-react";
import { useTheme } from "../../providers/ThemeContext";
import { cn } from "../../utils/cn";

export function ThemeToggle() {
  const { theme, mode, setTheme, setMode } = useTheme();

  const modes = [
    { name: "light", label: "Light", icon: Sun },
    { name: "dark", label: "Dark", icon: Moon },
    { name: "system", label: "System", icon: Palette },
  ];

  const categories = [
    { name: "default", label: "General", icon: Layout },
    { name: "kids", label: "Kids", icon: Baby },
    { name: "coders", label: "Coders", icon: Code },
    { name: "azhari", label: "Azhari", icon: School },
    { name: "uni", label: "University", icon: GraduationCap },
  ];

  const currentMode = modes.find((m) => m.name === mode) || modes[0];
  const currentCategory =
    categories.find((c) => c.name === theme) || categories[0];
  const ModeIcon = currentMode.icon;
  const CategoryIcon = currentCategory.icon;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2">
      {/* Mode Toggle */}
      <div className="relative flex items-center group w-full sm:w-auto">
        <div className="absolute left-3 pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
          <ModeIcon className="h-4 w-4" />
        </div>
        <select
          value={mode}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e) => setMode(e.target.value as any)}
          className={cn(
            "appearance-none bg-secondary/80 border border-gray-300 dark:border-gray-600 rounded-xl py-2 pl-9 pr-4 text-sm font-bold",
            "hover:bg-secondary transition-all cursor-pointer outline-none focus:ring-2 focus:ring-primary/20",
            "w-full sm:w-[120px]"
          )}
        >
          {modes.map((m) => (
            <option
              key={m.name}
              value={m.name}
              className="bg-background text-foreground"
            >
              {m.label}
            </option>
          ))}
        </select>
      </div>

      {/* Category Toggle */}
      <div className="relative flex items-center group w-full sm:w-auto">
        <div className="absolute left-3 pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
          <CategoryIcon className="h-4 w-4" />
        </div>
        <select
          value={theme}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e) => setTheme(e.target.value as any)}
          className={cn(
            "appearance-none bg-secondary/80 border border-gray-300 dark:border-gray-600 rounded-xl py-2 pl-9 pr-4 text-sm font-bold",
            "hover:bg-secondary transition-all cursor-pointer outline-none focus:ring-2 focus:ring-primary/20",
            "w-full sm:w-[140px]"
          )}
        >
          {categories.map((c) => (
            <option
              key={c.name}
              value={c.name}
              className="bg-background text-foreground"
            >
              {c.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
