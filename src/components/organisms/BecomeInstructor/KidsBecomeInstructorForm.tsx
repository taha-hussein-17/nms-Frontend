import { motion } from "framer-motion";
import { Button } from "../../atoms/Button";
import { Star, User, Mail, Briefcase, Rocket, Sparkles } from "lucide-react";
import { cn } from "../../../utils/cn";
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
  register: UseFormRegister<InstructorFormValues>;
  handleSubmit: UseFormHandleSubmit<InstructorFormValues>;
  onSubmit: (data: InstructorFormValues) => Promise<void>;
  errors: FieldErrors<InstructorFormValues>;
  isSubmitting: boolean;
}

export const KidsBecomeInstructorForm = ({
  isAr,
  register,
  handleSubmit,
  onSubmit,
  errors,
  isSubmitting,
}: BecomeInstructorFormProps) => {
  return (
    <section
      id="apply-form"
      className="py-32 relative overflow-hidden bg-sky-50"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center opacity-5" />

      {/* Decorative cartoon shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-pink-200 rounded-full blur-3xl opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-yellow-400 text-yellow-900 font-black text-sm uppercase tracking-widest shadow-lg"
            >
              <Star size={20} fill="currentColor" />
              <span>{isAr ? "انضم للمغامرة" : "Join the Adventure"}</span>
            </motion.div>
            <h2 className="text-4xl lg:text-7xl font-black text-sky-900">
              {isAr ? "دعنا نتعرف عليك!" : "Let's Get to Know You!"}
            </h2>
            <p className="text-xl text-sky-600 font-bold max-w-2xl mx-auto">
              {isAr
                ? "املأ هذا النموذج البسيط لنبدأ رحلتنا الممتعة معاً في عالم التعليم المبدع."
                : "Fill out this simple form to start our fun journey together in the world of creative education."}
            </p>
          </div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-[4rem] p-10 lg:p-16 shadow-2xl border-8 border-sky-100 relative overflow-hidden"
          >
            <Sparkles className="absolute top-10 right-10 text-yellow-300 w-12 h-12 rotate-12" />

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-10 relative z-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Full Name */}
                <div className="space-y-4">
                  <label className="text-sky-900 font-black text-xl px-4 block">
                    {isAr ? "اسمك الجميل" : "Your Cute Name"}
                  </label>
                  <div className="relative group">
                    <User
                      className={cn(
                        "absolute top-1/2 -translate-y-1/2 text-sky-300 group-focus-within:text-sky-500 transition-colors",
                        isAr ? "right-8" : "left-8"
                      )}
                    />
                    <input
                      {...register("fullName")}
                      placeholder={
                        isAr ? "اكتب اسمك هنا" : "Type your name here"
                      }
                      className={cn(
                        "w-full h-20 bg-sky-50 border-4 border-transparent focus:border-yellow-400 rounded-full outline-none transition-all font-black text-xl",
                        isAr ? "pr-20 text-right" : "pl-20 text-left"
                      )}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-500 text-sm font-black px-6">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-4">
                  <label className="text-sky-900 font-black text-xl px-4 block">
                    {isAr ? "بريدك الإلكتروني" : "Your Email"}
                  </label>
                  <div className="relative group">
                    <Mail
                      className={cn(
                        "absolute top-1/2 -translate-y-1/2 text-sky-300 group-focus-within:text-sky-500 transition-colors",
                        isAr ? "right-8" : "left-8"
                      )}
                    />
                    <input
                      {...register("email")}
                      placeholder="hello@fun.com"
                      className={cn(
                        "w-full h-20 bg-sky-50 border-4 border-transparent focus:border-yellow-400 rounded-full outline-none transition-all font-black text-xl",
                        isAr ? "pr-20 text-right" : "pl-20 text-left"
                      )}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm font-black px-6">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Specialty */}
              <div className="space-y-4">
                <label className="text-sky-900 font-black text-xl px-4 block">
                  {isAr
                    ? "ما هو تخصصك المبدع؟"
                    : "What's your creative specialty?"}
                </label>
                <div className="relative group">
                  <Briefcase
                    className={cn(
                      "absolute top-1/2 -translate-y-1/2 text-sky-300 group-focus-within:text-sky-500 transition-colors",
                      isAr ? "right-8" : "left-8"
                    )}
                  />
                  <input
                    {...register("specialty")}
                    placeholder={
                      isAr
                        ? "مثلاً: رسام كرتون، معلم علوم مرح..."
                        : "Ex: Cartoon artist, fun science teacher..."
                    }
                    className={cn(
                      "w-full h-20 bg-sky-50 border-4 border-transparent focus:border-yellow-400 rounded-full outline-none transition-all font-black text-xl",
                      isAr ? "pr-20 text-right" : "pl-20 text-left"
                    )}
                  />
                </div>
                {errors.specialty && (
                  <p className="text-red-500 text-sm font-black px-6">
                    {errors.specialty.message}
                  </p>
                )}
              </div>

              {/* Experience */}
              <div className="space-y-4">
                <label className="text-sky-900 font-black text-xl px-4 block">
                  {isAr
                    ? "أخبرنا عن مغامراتك السابقة"
                    : "Tell us about your past adventures"}
                </label>
                <textarea
                  {...register("experience")}
                  placeholder={
                    isAr ? "احكِ لنا قصتك..." : "Tell us your story..."
                  }
                  rows={4}
                  className={cn(
                    "w-full p-10 bg-sky-50 border-4 border-transparent focus:border-yellow-400 rounded-[3rem] outline-none transition-all font-black text-xl resize-none",
                    isAr ? "text-right" : "text-left"
                  )}
                />
                {errors.experience && (
                  <p className="text-red-500 text-sm font-black px-6">
                    {errors.experience.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-24 rounded-full text-3xl font-black bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white shadow-[0_12px_0_0_#C2410C] active:shadow-none active:translate-y-2 transition-all flex items-center justify-center gap-6"
              >
                {isSubmitting ? (
                  <div className="w-10 h-10 border-8 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    {isAr ? "انطلق الآن!" : "Launch Now!"}
                    <Rocket size={40} className={cn(isAr && "rotate-180")} />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
