import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "../../utils/cn";
import { Button } from "../atoms/Button";
import { useTranslation } from "react-i18next";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages.map((page, index) => {
      if (page === "...") {
        return (
          <div
            key={`ellipsis-${index}`}
            className="flex items-center justify-center w-10 h-10"
          >
            <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
          </div>
        );
      }

      return (
        <Button
          key={page}
          variant={currentPage === page ? "primary" : "ghost"}
          size="icon"
          onClick={() => onPageChange(page as number)}
          className={cn(
            "w-10 h-10 rounded-full",
            currentPage === page
              ? "bg-primary text-primary-foreground"
              : "text-foreground hover:bg-secondary"
          )}
        >
          {page}
        </Button>
      );
    });
  };

  if (totalPages <= 1) return null;

  return (
    <div
      className={cn(
        "flex items-center justify-center space-x-2 rtl:space-x-reverse",
        className
      )}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 rounded-full border-secondary hover:bg-secondary"
      >
        {isAr ? (
          <ChevronRight className="w-4 h-4" />
        ) : (
          <ChevronLeft className="w-4 h-4" />
        )}
      </Button>

      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        {renderPageNumbers()}
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 rounded-full border-secondary hover:bg-secondary"
      >
        {isAr ? (
          <ChevronLeft className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </Button>
    </div>
  );
};
