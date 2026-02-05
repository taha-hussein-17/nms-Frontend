import { useTheme } from "../../../providers/ThemeContext";
import { DefaultCourseFAQ } from "./DefaultCourseFAQ";
import { KidsCourseFAQ } from "./KidsCourseFAQ";

export const CourseFAQ = () => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsCourseFAQ faqs={[]} />;
    default:
      return <DefaultCourseFAQ />;
  }
};
