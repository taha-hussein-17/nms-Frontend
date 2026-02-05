import { useTheme } from "../../../providers/ThemeContext";
import { DefaultInstructorExperience } from "./DefaultInstructorExperience";
import { KidsInstructorExperience } from "./KidsInstructorExperience";
import type { Experience } from "../../../types";

interface InstructorExperienceProps {
  experience: Experience[];
}

export const InstructorExperience = (props: InstructorExperienceProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsInstructorExperience {...props} />;
    default:
      return <DefaultInstructorExperience {...props} />;
  }
};
