import { useTheme } from "../../../../providers/ThemeContext";
import { DefaultSubscriptions } from "./DefaultSubscriptions";
import { KidsSubscriptions } from "./KidsSubscriptions";

export const Subscriptions = () => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsSubscriptions />;
    default:
      return <DefaultSubscriptions />;
  }
};
