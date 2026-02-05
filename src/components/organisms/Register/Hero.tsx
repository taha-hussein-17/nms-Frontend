import { useTheme } from "../../../providers/ThemeContext";
import { DefaultRegisterHero } from "./DefaultRegisterHero";
import { KidsRegisterHero } from "./KidsRegisterHero";

export const RegisterHero = () => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsRegisterHero />;
    default:
      return <DefaultRegisterHero />;
  }
};
