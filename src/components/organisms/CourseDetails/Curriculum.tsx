import { useTheme } from "../../../providers/ThemeContext";
import { DefaultCurriculum } from "./DefaultCurriculum";
import { KidsCurriculum } from "./KidsCurriculum";
import { type Course } from "../../../types";

interface CurriculumProps {
  course: Course;
  id: string | undefined;
  isEnrolled: boolean;
}

export const Curriculum = (props: CurriculumProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsCurriculum {...props} />;
    default:
      return <DefaultCurriculum {...props} />;
  }
};
