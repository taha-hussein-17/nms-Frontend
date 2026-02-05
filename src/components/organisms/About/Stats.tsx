import { useTheme } from "../../../providers/ThemeContext";
import { DefaultAboutStats } from "./DefaultAboutStats";
import { KidsAboutStats } from "./KidsAboutStats";

interface AboutStatsProps {
  isAr: boolean;
  t: any;
}

export const AboutStats = (props: AboutStatsProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsAboutStats {...props} />;
    default:
      return <DefaultAboutStats {...props} />;
  }
};
