import { useTheme } from "../../../providers/ThemeContext";
import { DefaultInstructorHero } from "./DefaultInstructorHero";
import { KidsInstructorHero } from "./KidsInstructorHero";
import type { Instructor } from "../../../types";

interface InstructorHeroProps {
  instructor: Instructor;
}

export const InstructorHero = (props: InstructorHeroProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsInstructorHero {...props} />;
    default:
      return <DefaultInstructorHero {...props} />;
  }
};
