import { useTheme } from "../../../../providers/ThemeContext";
import { DefaultPopularCategories } from "./DefaultPopularCategories";
import { KidsPopularCategories } from "./KidsPopularCategories";
import { CodersPopularCategories } from "./CodersPopularCategories";
import { AzhariPopularCategories } from "./AzhariPopularCategories";
import { UniPopularCategories } from "./UniPopularCategories";

export const PopularCategories = () => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsPopularCategories />;
    case "programmers":
      return <CodersPopularCategories />;
    case "azhari":
      return <AzhariPopularCategories />;
    case "uni":
      return <UniPopularCategories />;
    default:
      return <DefaultPopularCategories />;
  }
};
