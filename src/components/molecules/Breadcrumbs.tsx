import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "../../utils/cn";
import { useTranslation } from "react-i18next";

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <nav aria-label="Breadcrumb" className={cn("flex mb-6", className)}>
      <ol className="flex items-center space-x-2 md:space-x-4 rtl:space-x-reverse">
        <li className="flex items-center">
          <Link
            to="/"
            className="text-muted-foreground hover:text-primary transition-colors flex items-center"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight
              className={cn(
                "w-4 h-4 text-muted-foreground mx-1",
                isAr && "rotate-180"
              )}
            />
            {item.path ? (
              <Link
                to={item.path}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-sm font-bold text-foreground">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
