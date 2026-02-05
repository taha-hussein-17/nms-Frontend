import { useTheme } from "../../../providers/ThemeContext";
import { DefaultCoursesSearchFilter } from "./DefaultCoursesSearchFilter";
import { KidsCoursesSearchFilter } from "./KidsCoursesSearchFilter";
import { CodersCoursesSearchFilter } from "./CodersCoursesSearchFilter";
import { AzhariCoursesSearchFilter } from "./AzhariCoursesSearchFilter";
import { UniCoursesSearchFilter } from "./UniCoursesSearchFilter";
import type { TFunction } from "i18next";

interface CoursesSearchFilterProps {
  isAr: boolean;
  t: TFunction;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  isSortOpen: boolean;
  setIsSortOpen: (open: boolean) => void;
  currentSortLabel?: string;
  sortOptions: { value: string; label: string }[];
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
}

export const CoursesSearchFilter = (props: CoursesSearchFilterProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsCoursesSearchFilter {...props} />;
    case "programmers":
      return <CodersCoursesSearchFilter {...props} />;
    case "azhari":
      return <AzhariCoursesSearchFilter {...props} />;
    case "uni":
      return <UniCoursesSearchFilter {...props} />;
    default:
      return <DefaultCoursesSearchFilter {...props} />;
  }
};
