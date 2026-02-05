import { useTheme } from "../../../providers/ThemeContext";
import { DefaultContactSupport } from "./DefaultContactSupport";
import { KidsContactSupport } from "./KidsContactSupport";
import { CodersContactSupport } from "./CodersContactSupport";
import { AzhariContactSupport } from "./AzhariContactSupport";
import { UniContactSupport } from "./UniContactSupport";

interface ContactSupportProps {
  isAr: boolean;
}

export const ContactSupport = ({ isAr }: ContactSupportProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsContactSupport isAr={isAr} />;
    case "programmers":
      return <CodersContactSupport isAr={isAr} />;
    case "azhari":
      return <AzhariContactSupport isAr={isAr} />;
    case "uni":
      return <UniContactSupport isAr={isAr} />;
    default:
      return <DefaultContactSupport isAr={isAr} />;
  }
};
