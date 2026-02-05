import { useTheme } from "../../../../providers/ThemeContext";
import { DefaultAboutUs } from "./DefaultAboutUs";
import { KidsAboutUs } from "./KidsAboutUs";
import { CodersAboutUs } from "./CodersAboutUs";
import { AzhariAboutUs } from "./AzhariAboutUs";
import { UniAboutUs } from "./UniAboutUs";

export const AboutUs = () => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsAboutUs />;
    case "programmers":
      return <CodersAboutUs />;
    case "azhari":
      return <AzhariAboutUs />;
    case "uni":
      return <UniAboutUs />;
    default:
      return <DefaultAboutUs />;
  }
};
