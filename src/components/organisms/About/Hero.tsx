import { useTheme } from "../../../providers/ThemeContext";
import { DefaultAboutHero } from "./DefaultAboutHero";
import { KidsAboutHero } from "./KidsAboutHero";

interface AboutHeroProps {
  isAr: boolean;
  t: any;
  handleShowAlert: () => void;
}

export const AboutHero = (props: AboutHeroProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsAboutHero {...props} />;
    default:
      return <DefaultAboutHero {...props} />;
  }
};
