import { useTheme } from "../../../providers/ThemeContext";
import { DefaultRelatedCourses } from "./DefaultRelatedCourses";
import { KidsRelatedCourses } from "./KidsRelatedCourses";
import { type Course } from "../../../types";

interface RelatedCoursesProps {
  courses: Course[];
}

export const RelatedCourses = ({ courses }: RelatedCoursesProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsRelatedCourses courses={courses} />;
    default:
      return <DefaultRelatedCourses courses={courses} />;
  }
};
