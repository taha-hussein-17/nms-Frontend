import { useTheme } from "../../../providers/ThemeContext";
import { DefaultBecomeInstructorStats } from "./DefaultBecomeInstructorStats";
import { KidsBecomeInstructorStats } from "./KidsBecomeInstructorStats";
import { CodersBecomeInstructorStats } from "./CodersBecomeInstructorStats";
import { AzhariBecomeInstructorStats } from "./AzhariBecomeInstructorStats";
import { UniBecomeInstructorStats } from "./UniBecomeInstructorStats";
import { type TFunction } from "i18next";

interface BecomeInstructorStatsProps {
  t: TFunction;
}

export const BecomeInstructorStats = ({ t }: BecomeInstructorStatsProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsBecomeInstructorStats t={t} />;
    case "programmers":
      return <CodersBecomeInstructorStats t={t} />;
    case "azhari":
      return <AzhariBecomeInstructorStats t={t} />;
    case "uni":
      return <UniBecomeInstructorStats t={t} />;
    default:
      return <DefaultBecomeInstructorStats t={t} />;
  }
};
