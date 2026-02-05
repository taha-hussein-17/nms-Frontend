import { useTheme } from "../../../providers/ThemeContext";
import { DefaultRegisterFormCard } from "./DefaultRegisterFormCard";
import { KidsRegisterFormCard } from "./KidsRegisterFormCard";

export const RegisterFormCard = () => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsRegisterFormCard />;
    default:
      return <DefaultRegisterFormCard />;
  }
};
