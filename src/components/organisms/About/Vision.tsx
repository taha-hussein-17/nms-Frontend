import { useTheme } from "../../../providers/ThemeContext";
import { DefaultAboutVision } from "./DefaultAboutVision";
import { KidsAboutVision } from "./KidsAboutVision";

interface AboutVisionProps {
  isAr: boolean;
  t: any;
}

export const AboutVision = (props: AboutVisionProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsAboutVision {...props} />;
    default:
      return <DefaultAboutVision {...props} />;
  }
};
