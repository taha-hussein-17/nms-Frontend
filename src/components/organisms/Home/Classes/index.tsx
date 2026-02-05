import { useTheme } from "../../../../providers/ThemeContext";
import { DefaultClasses } from "./DefaultClasses";
import { KidsClasses } from "./KidsClasses";
import { CodersClasses } from "./CodersClasses";
import { AzhariClasses } from "./AzhariClasses";
import { UniClasses } from "./UniClasses";

export const Classes = () => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsClasses />;
    case "programmers":
      return <CodersClasses />;
    case "azhari":
      return <AzhariClasses />;
    case "uni":
      return <UniClasses />;
    default:
      return <DefaultClasses />;
  }
};
