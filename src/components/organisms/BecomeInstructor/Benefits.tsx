import { useTheme } from "../../../providers/ThemeContext";
import { DefaultBecomeInstructorBenefits } from "./DefaultBecomeInstructorBenefits";
import { KidsBecomeInstructorBenefits } from "./KidsBecomeInstructorBenefits";
import { CodersBecomeInstructorBenefits } from "./CodersBecomeInstructorBenefits";
import { AzhariBecomeInstructorBenefits } from "./AzhariBecomeInstructorBenefits";
import { UniBecomeInstructorBenefits } from "./UniBecomeInstructorBenefits";
import type { TFunction } from "i18next";

interface BecomeInstructorBenefitsProps {
  t: TFunction;
}

export const BecomeInstructorBenefits = ({
  t,
}: BecomeInstructorBenefitsProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsBecomeInstructorBenefits t={t} />;
    case "programmers":
      return <CodersBecomeInstructorBenefits t={t} />;
    case "azhari":
      return <AzhariBecomeInstructorBenefits t={t} />;
    case "uni":
      return <UniBecomeInstructorBenefits t={t} />;
    default:
      return <DefaultBecomeInstructorBenefits t={t} />;
  }
};
