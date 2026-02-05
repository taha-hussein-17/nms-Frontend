import { memo } from "react";
import { useTheme } from "../../providers/ThemeContext";
import { DefaultCourseCard } from "./DefaultCourseCard";
import { KidsCourseCard } from "./KidsCourseCard";
import { CodersCourseCard } from "./CodersCourseCard";
import { AzhariCourseCard } from "./AzhariCourseCard";
import { UniCourseCard } from "./UniCourseCard";
import type { Course } from "../../types";

interface CourseCardProps {
  course: Course;
  variant?: "vertical" | "horizontal";
}

export const CourseCard = memo((props: CourseCardProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsCourseCard {...props} />;
    case "programmers":
      return <CodersCourseCard {...props} />;
    case "azhari":
      return <AzhariCourseCard {...props} />;
    case "uni":
      return <UniCourseCard {...props} />;
    default:
      return <DefaultCourseCard {...props} />;
  }
});
