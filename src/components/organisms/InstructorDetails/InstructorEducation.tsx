import { useTheme } from "../../../providers/ThemeContext";
import { DefaultInstructorEducation } from "./DefaultInstructorEducation";
import { KidsInstructorEducation } from "./KidsInstructorEducation";
import type { Education } from "../../../types";

interface InstructorEducationProps {
  education: Education[];
}

export const InstructorEducation = (props: InstructorEducationProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsInstructorEducation {...props} />;
    default:
      return <DefaultInstructorEducation {...props} />;
  }
};
