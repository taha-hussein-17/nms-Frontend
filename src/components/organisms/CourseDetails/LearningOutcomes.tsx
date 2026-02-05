import { useTheme } from "../../../providers/ThemeContext";
import { DefaultLearningOutcomes } from "./DefaultLearningOutcomes";
import { KidsLearningOutcomes } from "./KidsLearningOutcomes";
import { type Course } from "../../../types";

interface LearningOutcomesProps {
  course: Course;
}

export const LearningOutcomes = ({ course }: LearningOutcomesProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsLearningOutcomes course={course} />;
    default:
      return <DefaultLearningOutcomes course={course} />;
  }
};
