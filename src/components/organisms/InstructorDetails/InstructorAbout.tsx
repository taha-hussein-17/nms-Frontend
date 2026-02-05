import { useTheme } from "../../../providers/ThemeContext";
import { DefaultInstructorAbout } from "./DefaultInstructorAbout";
import { KidsInstructorAbout } from "./KidsInstructorAbout";

interface InstructorAboutProps {
  bio: string;
  skills: string[];
}

export const InstructorAbout = (props: InstructorAboutProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsInstructorAbout {...props} />;
    default:
      return <DefaultInstructorAbout {...props} />;
  }
};
