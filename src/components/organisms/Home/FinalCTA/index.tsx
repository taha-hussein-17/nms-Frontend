import { useTheme } from "../../../../providers/ThemeContext";
import { DefaultFinalCTA } from "./DefaultFinalCTA";
import { KidsFinalCTA } from "./KidsFinalCTA";
import { CodersFinalCTA } from "./CodersFinalCTA";
import { AzhariFinalCTA } from "./AzhariFinalCTA";
import { UniFinalCTA } from "./UniFinalCTA";

export const FinalCTA = () => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsFinalCTA />;
    case "programmers":
      return <CodersFinalCTA />;
    case "azhari":
      return <AzhariFinalCTA />;
    case "uni":
      return <UniFinalCTA />;
    default:
      return <DefaultFinalCTA />;
  }
};
