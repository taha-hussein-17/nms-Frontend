import { useTheme } from "../../../providers/ThemeContext";
import { DefaultAboutCTA } from "./DefaultAboutCTA";
import { KidsAboutCTA } from "./KidsAboutCTA";

interface AboutCTAProps {
  isAr: boolean;
}

export const AboutCTA = (props: AboutCTAProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsAboutCTA {...props} />;
    default:
      return <DefaultAboutCTA {...props} />;
  }
};
