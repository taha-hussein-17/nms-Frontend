import { useTheme } from "../../../providers/ThemeContext";
import { DefaultContactHero } from "./DefaultContactHero";
import { KidsContactHero } from "./KidsContactHero";
import { CodersContactHero } from "./CodersContactHero";
import { AzhariContactHero } from "./AzhariContactHero";
import { UniContactHero } from "./UniContactHero";

interface ContactHeroProps {
  isAr: boolean;
}

export const ContactHero = ({ isAr }: ContactHeroProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsContactHero isAr={isAr} />;
    case "programmers":
      return <CodersContactHero isAr={isAr} />;
    case "azhari":
      return <AzhariContactHero isAr={isAr} />;
    case "uni":
      return <UniContactHero isAr={isAr} />;
    default:
      return <DefaultContactHero isAr={isAr} />;
  }
};
