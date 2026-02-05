import { useTheme } from "../../../providers/ThemeContext";
import { DefaultInstructorCourses } from "./DefaultInstructorCourses";
import { KidsInstructorCourses } from "./KidsInstructorCourses";
import type { Course } from "../../../types";

interface InstructorCoursesProps {
  instructorName: string;
  courses: Course[];
}

export const InstructorCourses = (props: InstructorCoursesProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsInstructorCourses {...props} />;
    default:
      return <DefaultInstructorCourses {...props} />;
  }
};
