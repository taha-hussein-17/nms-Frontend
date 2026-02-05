import { MotionValue } from "framer-motion";
import { useTheme } from "../../../providers/ThemeContext";
import { DefaultCourseHero } from "./DefaultCourseHero";
import { KidsCourseHero } from "./KidsCourseHero";
import type { TFunction } from "i18next";
import type { Course } from "../../../types";

interface CourseHeroProps {
  course: Course;
  t: TFunction;
  isEnrolled: boolean;
  heroOpacity: MotionValue<number>;
  heroScale: MotionValue<number>;
}

export const CourseHero = (props: CourseHeroProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsCourseHero {...props} />;
    default:
      return <DefaultCourseHero {...props} />;
  }
};
