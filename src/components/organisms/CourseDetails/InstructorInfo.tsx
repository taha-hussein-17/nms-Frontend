import { useTheme } from "../../../providers/ThemeContext";
import { DefaultInstructorInfo } from "./DefaultInstructorInfo";
import { KidsInstructorInfo } from "./KidsInstructorInfo";
import { type Course } from "../../../types";

interface InstructorInfoProps {
  course: Course;
}

export const InstructorInfo = ({ course }: InstructorInfoProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsInstructorInfo course={course} />;
    default:
      return <DefaultInstructorInfo course={course} />;
  }
};
