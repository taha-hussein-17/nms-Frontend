import { useTheme } from "../../../../providers/ThemeContext";
import { DefaultInstructorCTA } from "./DefaultInstructorCTA";
import { KidsInstructorCTA } from "./KidsInstructorCTA";
import { CodersInstructorCTA } from "./CodersInstructorCTA";
import { AzhariInstructorCTA } from "./AzhariInstructorCTA";
import { UniInstructorCTA } from "./UniInstructorCTA";

export const InstructorCTA = () => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsInstructorCTA />;
    case "programmers":
      return <CodersInstructorCTA />;
    case "azhari":
      return <AzhariInstructorCTA />;
    case "uni":
      return <UniInstructorCTA />;
    default:
      return <DefaultInstructorCTA />;
  }
};
