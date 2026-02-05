import { useTheme } from "../../../../providers/ThemeContext";
import { DefaultHero } from "./DefaultHero";
import { KidsHero } from "./KidsHero";
import { CodersHero } from "./CodersHero";
import { AzhariHero } from "./AzhariHero";
import { UniHero } from "./UniHero";

export const Hero = () => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsHero />;
    case "programmers":
      return <CodersHero />;
    case "azhari":
      return <AzhariHero />;
    case "uni":
      return <UniHero />;
    default:
      return <DefaultHero />;
  }
};
