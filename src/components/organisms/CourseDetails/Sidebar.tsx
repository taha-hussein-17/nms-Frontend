import { useTheme } from "../../../providers/ThemeContext";
import { DefaultCourseSidebar } from "./DefaultCourseSidebar";
import { KidsCourseSidebar } from "./KidsCourseSidebar";
import { type Course } from "../../../types";

interface CourseSidebarProps {
  course: Course;
}

export const CourseSidebar = (props: CourseSidebarProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsCourseSidebar {...props} />;
    default:
      return <DefaultCourseSidebar {...props} />;
  }
};
