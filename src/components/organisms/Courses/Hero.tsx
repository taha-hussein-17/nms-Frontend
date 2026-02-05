import { type TFunction } from "i18next";
import { useTheme } from "../../../providers/ThemeContext";
import { DefaultCoursesHero } from "./DefaultCoursesHero";
import { KidsCoursesHero } from "./KidsCoursesHero";
import { CodersCoursesHero } from "./CodersCoursesHero";
import { AzhariCoursesHero } from "./AzhariCoursesHero";
import { UniCoursesHero } from "./UniCoursesHero";

interface CoursesHeroProps {
  isAr: boolean;
  t: TFunction;
}

export const CoursesHero = ({ isAr, t }: CoursesHeroProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsCoursesHero isAr={isAr} t={t} />;
    case "programmers":
      return <CodersCoursesHero isAr={isAr} t={t} />;
    case "azhari":
      return <AzhariCoursesHero isAr={isAr} t={t} />;
    case "uni":
      return <UniCoursesHero isAr={isAr} t={t} />;
    default:
      return <DefaultCoursesHero isAr={isAr} t={t} />;
  }
};
