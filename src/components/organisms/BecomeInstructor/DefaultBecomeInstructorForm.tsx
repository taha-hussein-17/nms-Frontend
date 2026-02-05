import { Reveal } from "../../atoms/Reveal";
import { Button } from "../../atoms/Button";
import { FileText, User, Mail, Briefcase, Send } from "lucide-react";
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

export const DefaultBecomeInstructorForm = ({
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
      className="py-32 relative overflow-hidden bg-secondary/20"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/grid.svg')] bg-center opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-black uppercase tracking-widest backdrop-blur-md mb-6">
                <FileText className="w-4 h-4" />
                {isAr ? "نموذج التقديم" : "Application Form"}
              </div>
              <h2 className="text-4xl lg:text-6xl font-black mb-6 text-white">
                {t("become_instructor.form.title")}
              </h2>
              <p className="text-xl text-muted-foreground font-medium">
                {t("become_instructor.form.description")}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-card glass border-2 border-white/10 rounded-[3rem] p-10 lg:p-16 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -ml-32 -mb-32" />

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-8 relative z-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Full Name */}
                    <div className="space-y-3">
                      <label
                        className={cn(
                          "text-sm font-black text-foreground/70 uppercase tracking-widest px-2 block",
                          isAr ? "text-right" : "text-left"
                        )}
                      >
                        {t("become_instructor.form.full_name")}
                      </label>
                      <div className="relative group/input">
                        <div
                          className={cn(
                            "absolute top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within/input:text-primary transition-colors",
                            isAr ? "right-6" : "left-6"
                          )}
                        >
                          <User className="w-5 h-5" />
                        </div>
                        <input
                          {...register("fullName")}
                          placeholder={t(
                            "become_instructor.form.full_name_placeholder"
                          )}
                          className={cn(
                            "w-full h-16 bg-secondary/50 border-2 border-transparent focus:border-primary/30 focus:bg-background rounded-2xl outline-none transition-all font-bold text-lg",
                            isAr ? "pr-16 text-right" : "pl-16 text-left"
                          )}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-red-500 text-sm font-bold px-2">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-3">
                      <label
                        className={cn(
                          "text-sm font-black text-foreground/70 uppercase tracking-widest px-2 block",
                          isAr ? "text-right" : "text-left"
                        )}
                      >
                        {t("become_instructor.form.email")}
                      </label>
                      <div className="relative group/input">
                        <div
                          className={cn(
                            "absolute top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within/input:text-primary transition-colors",
                            isAr ? "right-6" : "left-6"
                          )}
                        >
                          <Mail className="w-5 h-5" />
                        </div>
                        <input
                          {...register("email")}
                          placeholder="example@email.com"
                          className={cn(
                            "w-full h-16 bg-secondary/50 border-2 border-transparent focus:border-primary/30 focus:bg-background rounded-2xl outline-none transition-all font-bold text-lg",
                            isAr ? "pr-16 text-right" : "pl-16 text-left"
                          )}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-sm font-bold px-2">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Specialty */}
                  <div className="space-y-3">
                    <label
                      className={cn(
                        "text-sm font-black text-foreground/70 uppercase tracking-widest px-2 block",
                        isAr ? "text-right" : "text-left"
                      )}
                    >
                      {t("become_instructor.form.specialty")}
                    </label>
                    <div className="relative group/input">
                      <div
                        className={cn(
                          "absolute top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within/input:text-primary transition-colors",
                          isAr ? "right-6" : "left-6"
                        )}
                      >
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <input
                        {...register("specialty")}
                        placeholder={t(
                          "become_instructor.form.specialty_placeholder"
                        )}
                        className={cn(
                          "w-full h-16 bg-secondary/50 border-2 border-transparent focus:border-primary/30 focus:bg-background rounded-2xl outline-none transition-all font-bold text-lg",
                          isAr ? "pr-16 text-right" : "pl-16 text-left"
                        )}
                      />
                    </div>
                    {errors.specialty && (
                      <p className="text-red-500 text-sm font-bold px-2">
                        {errors.specialty.message}
                      </p>
                    )}
                  </div>

                  {/* Experience */}
                  <div className="space-y-3">
                    <label
                      className={cn(
                        "text-sm font-black text-foreground/70 uppercase tracking-widest px-2 block",
                        isAr ? "text-right" : "text-left"
                      )}
                    >
                      {t("become_instructor.form.experience")}
                    </label>
                    <textarea
                      {...register("experience")}
                      placeholder={t(
                        "become_instructor.form.experience_placeholder"
                      )}
                      rows={5}
                      className={cn(
                        "w-full p-8 bg-secondary/50 border-2 border-transparent focus:border-primary/30 focus:bg-background rounded-[2rem] outline-none transition-all font-bold text-lg resize-none",
                        isAr ? "text-right" : "text-left"
                      )}
                    />
                    {errors.experience && (
                      <p className="text-red-500 text-sm font-bold px-2">
                        {errors.experience.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-20 rounded-2xl text-xl font-black shadow-2xl shadow-primary/20 flex items-center justify-center gap-4"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        {t("become_instructor.form.submit")}
                        <Send
                          className={cn(
                            "w-6 h-6",
                            isAr ? "rotate-180" : "rotate-0"
                          )}
                        />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
