import { useTheme } from "../../../providers/ThemeContext";
import { DefaultCoursesSidebar } from "./DefaultCoursesSidebar";
import { KidsCoursesSidebar } from "./KidsCoursesSidebar";
import { CodersCoursesSidebar } from "./CodersCoursesSidebar";
import { AzhariCoursesSidebar } from "./AzhariCoursesSidebar";
import { UniCoursesSidebar } from "./UniCoursesSidebar";
import { type TFunction } from "i18next";

interface CoursesSidebarProps {
  isAr: boolean;
  t: TFunction;
  isSidebarOpen: boolean;
  levels: string[];
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
  durations: string[];
  selectedDuration: string;
  setSelectedDuration: (duration: string) => void;
  ratings: number[];
  selectedRating: number;
  setSelectedRating: (rating: number) => void;
}

export const CoursesSidebar = (props: CoursesSidebarProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsCoursesSidebar {...props} />;
    case "programmers":
      return <CodersCoursesSidebar {...props} />;
    case "azhari":
      return <AzhariCoursesSidebar {...props} />;
    case "uni":
      return <UniCoursesSidebar {...props} />;
    default:
      return <DefaultCoursesSidebar {...props} />;
  }
};
