import { useTheme } from "../../../providers/ThemeContext";
import { DefaultCourseStats } from "./DefaultCourseStats";
import { KidsCourseStats } from "./KidsCourseStats";
import type { TFunction } from "i18next";
import type { Course } from "../../../types";

interface CourseStatsProps {
  course: Course;
  t: TFunction;
}

export const CourseStats = (props: CourseStatsProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsCourseStats {...props} />;
    default:
      return <DefaultCourseStats {...props} />;
  }
};
