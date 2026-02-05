import { Reveal } from "../../atoms/Reveal";
import { Button } from "../../atoms/Button";
import { PenTool, Send, Sparkles } from "lucide-react";
import { cn } from "../../../utils/cn";
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

export const AzhariBecomeInstructorForm = ({
  isAr,
  t,
  register,
  handleSubmit,
  onSubmit,
  errors,
  isSubmitting,
}: BecomeInstructorFormProps) => {
  return (
    <section
      id="apply-form"
      className="py-24 relative overflow-hidden bg-[#fdfbf7] dark:bg-[#1a1f1a] font-serif"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#8b7355]/10 border border-[#8b7355]/20 text-[#8b7355] text-sm font-bold italic mb-6">
                <PenTool className="w-4 h-4" />
                {isAr
                  ? "طلب الانضمام لركب العلم"
                  : "Application for Knowledge Legacy"}
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-[#2d3a2d] dark:text-[#e2e8e2]">
                {t("become_instructor.form.title")}
              </h2>
              <p className="text-[#2d3a2d]/60 dark:text-[#e2e8e2]/60 italic text-lg">
                {t("become_instructor.form.description")}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative bg-white dark:bg-[#2d3a2d]/20 border-2 border-[#8b7355]/10 rounded-3xl p-8 md:p-12 shadow-sm">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-8 relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Full Name */}
                  <div className="space-y-3">
                    <label
                      className={cn(
                        "text-sm font-bold text-[#2d3a2d]/70 dark:text-[#e2e8e2]/70 italic block px-2",
                        isAr ? "text-right" : "text-left"
                      )}
                    >
                      {t("become_instructor.form.full_name")}
                    </label>
                    <input
                      {...register("fullName")}
                      placeholder={t(
                        "become_instructor.form.full_name_placeholder"
                      )}
                      className={cn(
                        "w-full h-14 bg-[#fdfbf7] dark:bg-[#1a1f1a]/40 border-b-2 border-transparent focus:border-[#8b7355] text-[#2d3a2d] dark:text-[#e2e8e2] outline-none transition-all px-4 italic",
                        isAr ? "text-right" : "text-left"
                      )}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-3">
                    <label
                      className={cn(
                        "text-sm font-bold text-[#2d3a2d]/70 dark:text-[#e2e8e2]/70 italic block px-2",
                        isAr ? "text-right" : "text-left"
                      )}
                    >
                      {t("become_instructor.form.email")}
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="example@email.com"
                      className={cn(
                        "w-full h-14 bg-[#fdfbf7] dark:bg-[#1a1f1a]/40 border-b-2 border-transparent focus:border-[#8b7355] text-[#2d3a2d] dark:text-[#e2e8e2] outline-none transition-all px-4 italic",
                        isAr ? "text-right" : "text-left"
                      )}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Specialty */}
                  <div className="space-y-3">
                    <label
                      className={cn(
                        "text-sm font-bold text-[#2d3a2d]/70 dark:text-[#e2e8e2]/70 italic block px-2",
                        isAr ? "text-right" : "text-left"
                      )}
                    >
                      {t("become_instructor.form.specialty")}
                    </label>
                    <input
                      {...register("specialty")}
                      placeholder={isAr ? "مجال تخصصك..." : "Your specialty..."}
                      className={cn(
                        "w-full h-14 bg-[#fdfbf7] dark:bg-[#1a1f1a]/40 border-b-2 border-transparent focus:border-[#8b7355] text-[#2d3a2d] dark:text-[#e2e8e2] outline-none transition-all px-4 italic",
                        isAr ? "text-right" : "text-left"
                      )}
                    />
                  </div>

                  {/* Experience */}
                  <div className="space-y-3">
                    <label
                      className={cn(
                        "text-sm font-bold text-[#2d3a2d]/70 dark:text-[#e2e8e2]/70 italic block px-2",
                        isAr ? "text-right" : "text-left"
                      )}
                    >
                      {t("become_instructor.form.experience")}
                    </label>
                    <input
                      {...register("experience")}
                      placeholder={
                        isAr ? "عدد سنوات الخبرة..." : "Years of experience..."
                      }
                      className={cn(
                        "w-full h-14 bg-[#fdfbf7] dark:bg-[#1a1f1a]/40 border-b-2 border-transparent focus:border-[#8b7355] text-[#2d3a2d] dark:text-[#e2e8e2] outline-none transition-all px-4 italic",
                        isAr ? "text-right" : "text-left"
                      )}
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-16 bg-[#2d3a2d] hover:bg-[#1a241a] text-white font-bold text-lg rounded-xl flex items-center justify-center gap-3 shadow-lg transition-transform active:scale-95"
                  >
                    {isSubmitting ? (
                      <Sparkles className="w-5 h-5 animate-pulse text-[#8b7355]" />
                    ) : (
                      <>
                        <Send
                          className={cn("w-5 h-5", isAr ? "rotate-180" : "")}
                        />
                        {isAr ? "إرسال طلب الانضمام" : "Submit Application"}
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
