import { useTheme } from "../../../../providers/ThemeContext";
import { DefaultTopInstructors } from "./DefaultTopInstructors";
import { KidsTopInstructors } from "./KidsTopInstructors";
import { CodersTopInstructors } from "./CodersTopInstructors";
import { AzhariTopInstructors } from "./AzhariTopInstructors";
import { UniTopInstructors } from "./UniTopInstructors";

export const TopInstructors = () => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsTopInstructors />;
    case "programmers":
      return <CodersTopInstructors />;
    case "azhari":
      return <AzhariTopInstructors />;
    case "uni":
      return <UniTopInstructors />;
    default:
      return <DefaultTopInstructors />;
  }
};
