import { useTheme } from "../../../providers/ThemeContext";
import { DefaultCoursesList } from "./DefaultCoursesList";
import { KidsCoursesList } from "./KidsCoursesList";
import { CodersCoursesList } from "./CodersCoursesList";
import { AzhariCoursesList } from "./AzhariCoursesList";
import { UniCoursesList } from "./UniCoursesList";
import { type Course } from "../../../types";

interface CoursesListProps {
  isAr: boolean;
  filteredCourses: Course[];
  viewMode: "grid" | "list";
}

export const CoursesList = ({
  isAr,
  filteredCourses,
  viewMode,
}: CoursesListProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return (
        <KidsCoursesList
          isAr={isAr}
          filteredCourses={filteredCourses}
          viewMode={viewMode}
        />
      );
    case "programmers":
      return (
        <CodersCoursesList
          isAr={isAr}
          filteredCourses={filteredCourses}
          viewMode={viewMode}
        />
      );
    case "azhari":
      return (
        <AzhariCoursesList
          isAr={isAr}
          filteredCourses={filteredCourses}
          viewMode={viewMode}
        />
      );
    case "uni":
      return (
        <UniCoursesList
          isAr={isAr}
          filteredCourses={filteredCourses}
          viewMode={viewMode}
        />
      );
    default:
      return (
        <DefaultCoursesList
          isAr={isAr}
          filteredCourses={filteredCourses}
          viewMode={viewMode}
        />
      );
  }
};
