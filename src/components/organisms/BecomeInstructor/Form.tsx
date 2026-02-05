import { useTheme } from "../../../providers/ThemeContext";
import { DefaultBecomeInstructorForm } from "./DefaultBecomeInstructorForm";
import { KidsBecomeInstructorForm } from "./KidsBecomeInstructorForm";
import { CodersBecomeInstructorForm } from "./CodersBecomeInstructorForm";
import { AzhariBecomeInstructorForm } from "./AzhariBecomeInstructorForm";
import { UniBecomeInstructorForm } from "./UniBecomeInstructorForm";
import type { TFunction } from "i18next";
import type {
  UseFormRegister,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";

export interface InstructorFormValues {
  fullName: string;
  email: string;
  specialty: string;
  experience: string;
}

interface BecomeInstructorFormProps {
  isAr: boolean;
  t: TFunction;
  register: UseFormRegister<InstructorFormValues>;
  handleSubmit: UseFormHandleSubmit<InstructorFormValues>;
  onSubmit: (data: InstructorFormValues) => Promise<void>;
  errors: FieldErrors<InstructorFormValues>;
  isSubmitting: boolean;
}

export const BecomeInstructorForm = (props: BecomeInstructorFormProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsBecomeInstructorForm {...props} />;
    case "programmers":
      return <CodersBecomeInstructorForm {...props} />;
    case "azhari":
      return <AzhariBecomeInstructorForm {...props} />;
    case "uni":
      return <UniBecomeInstructorForm {...props} />;
    default:
      return <DefaultBecomeInstructorForm {...props} />;
  }
};
