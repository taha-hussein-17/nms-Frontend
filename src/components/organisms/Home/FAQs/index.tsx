import { useTheme } from "../../../../providers/ThemeContext";
import { DefaultFAQs } from "./DefaultFAQs";
import { KidsFAQs } from "./KidsFAQs";
import { CodersFAQs } from "./CodersFAQs";
import { AzhariFAQs } from "./AzhariFAQs";
import { UniFAQs } from "./UniFAQs";

export const FAQs = () => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsFAQs />;
    case "programmers":
      return <CodersFAQs />;
    case "azhari":
      return <AzhariFAQs />;
    case "uni":
      return <UniFAQs />;
    default:
      return <DefaultFAQs />;
  }
};
