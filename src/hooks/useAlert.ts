import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useTranslation } from "react-i18next";

const MySwal = withReactContent(Swal);

export const useAlert = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const showToast = (
    title: string,
    icon: "success" | "error" | "warning" | "info" = "success"
  ) => {
    return MySwal.fire({
      toast: true,
      position: isAr ? "top-left" : "top-right",
      icon,
      title,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
      customClass: {
        popup: "rounded-2xl border-2 border-primary/20 shadow-xl",
      },
    });
  };

  const showConfirm = (
    title: string,
    text: string,
    confirmButtonText: string,
    cancelButtonText: string
  ) => {
    return MySwal.fire({
      title,
      text,
      icon: "question",
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      confirmButtonColor: "var(--primary)",
      cancelButtonColor: "var(--secondary)",
      customClass: {
        popup: "rounded-[2rem] border-2 border-primary/10 shadow-2xl",
        confirmButton: "rounded-xl px-6 py-2 font-black",
        cancelButton: "rounded-xl px-6 py-2 font-black",
      },
    });
  };

  return { showToast, showConfirm };
};
