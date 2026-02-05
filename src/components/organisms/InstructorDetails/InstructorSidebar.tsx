import { useTheme } from "../../../providers/ThemeContext";
import { DefaultInstructorSidebar } from "./DefaultInstructorSidebar";
import { KidsInstructorSidebar } from "./KidsInstructorSidebar";

interface InstructorSidebarProps {
  instructorName: string;
}

export const InstructorSidebar = (props: InstructorSidebarProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsInstructorSidebar {...props} />;
    default:
      return <DefaultInstructorSidebar {...props} />;
  }
};
