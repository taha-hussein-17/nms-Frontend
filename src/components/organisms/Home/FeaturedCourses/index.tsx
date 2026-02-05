import { useTheme } from "../../../../providers/ThemeContext";
import { DefaultFeaturedCourses } from "./DefaultFeaturedCourses";
import { KidsFeaturedCourses } from "./KidsFeaturedCourses";
import { CodersFeaturedCourses } from "./CodersFeaturedCourses";
import { AzhariFeaturedCourses } from "./AzhariFeaturedCourses";
import { UniFeaturedCourses } from "./UniFeaturedCourses";

export const FeaturedCourses = () => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsFeaturedCourses />;
    case "programmers":
      return <CodersFeaturedCourses />;
    case "azhari":
      return <AzhariFeaturedCourses />;
    case "uni":
      return <UniFeaturedCourses />;
    default:
      return <DefaultFeaturedCourses />;
  }
};
