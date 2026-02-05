import { useTheme } from "../../../../providers/ThemeContext";
import { DefaultContactUs } from "./DefaultContactUs";
import { KidsContactUs } from "./KidsContactUs";

export const ContactUs = () => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsContactUs />;
    default:
      return <DefaultContactUs />;
  }
};
