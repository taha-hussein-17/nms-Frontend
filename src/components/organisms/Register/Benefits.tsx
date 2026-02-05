import { useTheme } from "../../../providers/ThemeContext";
import { DefaultRegisterBenefits } from "./DefaultRegisterBenefits";
import { KidsRegisterBenefits } from "./KidsRegisterBenefits";

export const RegisterBenefits = () => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsRegisterBenefits />;
    default:
      return <DefaultRegisterBenefits />;
  }
};
