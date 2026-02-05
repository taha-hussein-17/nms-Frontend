import { useTheme } from "../../../providers/ThemeContext";
import { DefaultBecomeInstructorHero } from "./DefaultBecomeInstructorHero";
import { KidsBecomeInstructorHero } from "./KidsBecomeInstructorHero";
import { CodersBecomeInstructorHero } from "./CodersBecomeInstructorHero";
import { AzhariBecomeInstructorHero } from "./AzhariBecomeInstructorHero";
import { UniBecomeInstructorHero } from "./UniBecomeInstructorHero";
import { type TFunction } from "i18next";

interface BecomeInstructorHeroProps {
  isAr: boolean;
  t: TFunction;
}

export const BecomeInstructorHero = ({
  isAr,
  t,
}: BecomeInstructorHeroProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsBecomeInstructorHero isAr={isAr} t={t} />;
    case "programmers":
      return <CodersBecomeInstructorHero isAr={isAr} t={t} />;
    case "azhari":
      return <AzhariBecomeInstructorHero isAr={isAr} t={t} />;
    case "uni":
      return <UniBecomeInstructorHero isAr={isAr} t={t} />;
    default:
      return <DefaultBecomeInstructorHero isAr={isAr} t={t} />;
  }
};
