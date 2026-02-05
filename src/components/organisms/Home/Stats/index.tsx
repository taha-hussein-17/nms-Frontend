import { useTheme } from "../../../../providers/ThemeContext";
import { DefaultStats } from "./DefaultStats";
import { KidsStats } from "./KidsStats";
import { CodersStats } from "./CodersStats";
import { AzhariStats } from "./AzhariStats";
import { UniStats } from "./UniStats";

export const Stats = () => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsStats />;
    case "programmers":
      return <CodersStats />;
    case "azhari":
      return <AzhariStats />;
    case "uni":
      return <UniStats />;
    default:
      return <DefaultStats />;
  }
};
