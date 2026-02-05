import { useTranslation } from "react-i18next";
import { Mail, Phone, Sparkles, Rocket, Star, PartyPopper } from "lucide-react";
import { Button } from "../../../atoms/Button";
import { cn } from "../../../../utils/cn";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "الاسم يجب أن يكون حرفين على الأقل"),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  subject: z.string().min(5, "الموضوع يجب أن يكون 5 أحرف على الأقل"),
  message: z.string().min(10, "الرسالة يجب أن تكون 10 أحرف على الأقل"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const KidsContactUs = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    reset();
  };

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      label: isAr ? "أرسل لنا رسالة" : "Send us a Message",
      value: "hello@kids-academy.com",
      color: "text-blue-500",
      bg: "bg-blue-100",
      desc: isAr ? "سنرد عليك بسرعة البرق!" : "We'll reply at lightning speed!",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      label: isAr ? "اتصل بنا" : "Call Us",
      value: "+20 123 456 7890",
      color: "text-green-500",
      bg: "bg-green-100",
      desc: isAr ? "نحب سماع صوتك!" : "We love hearing your voice!",
    },
    {
      icon: <PartyPopper className="w-8 h-8" />,
      label: isAr ? "الدعم الودود" : "Friendly Support",
      value: isAr ? "دائماً هنا للمساعدة" : "Always here to help",
      color: "text-pink-500",
      bg: "bg-pink-100",
      desc: isAr ? "بكل حب وابتسامة" : "With love and smiles",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-sky-50">
      {/* Cartoon clouds or shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-60 blur-xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full opacity-60 blur-xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-yellow-400 text-yellow-900 font-black text-lg shadow-lg"
          >
            <Sparkles size={24} />
            <span>{isAr ? "هل لديك سؤال؟" : "Have a Question?"}</span>
          </motion.div>
          <h2 className="text-5xl lg:text-7xl font-black text-sky-900">
            {isAr ? "تحدث معنا!" : "Talk to Us!"}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ x: isAr ? 50 : -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-[3rem] shadow-xl border-4 border-white hover:border-sky-200 transition-all flex items-center gap-6 group"
              >
                <div
                  className={cn(
                    "w-20 h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-12 shadow-inner",
                    info.bg,
                    info.color
                  )}
                >
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-sky-900 font-black text-xl">
                    {info.label}
                  </h4>
                  <p className="text-sky-600 font-bold">{info.value}</p>
                  <p className="text-sky-400 text-sm">{info.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="bg-white p-10 lg:p-14 rounded-[4rem] shadow-2xl border-8 border-sky-100 relative overflow-hidden"
            >
              {/* Decorative stars */}
              <Star className="absolute top-5 right-5 text-yellow-300 w-12 h-12 rotate-12" />
              <Star className="absolute bottom-5 left-5 text-pink-300 w-10 h-10 -rotate-12" />

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sky-900 font-black px-4">
                      {isAr ? "اسمك الجميل" : "Your Cute Name"}
                    </label>
                    <input
                      {...register("name")}
                      className="w-full h-16 bg-sky-50 border-4 border-transparent focus:border-yellow-400 rounded-full px-8 outline-none font-bold text-lg transition-all"
                      placeholder={isAr ? "اكتب اسمك هنا" : "Type your name"}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sky-900 font-black px-4">
                      {isAr ? "بريدك الإلكتروني" : "Your Email"}
                    </label>
                    <input
                      {...register("email")}
                      className="w-full h-16 bg-sky-50 border-4 border-transparent focus:border-yellow-400 rounded-full px-8 outline-none font-bold text-lg transition-all"
                      placeholder="me@fun.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sky-900 font-black px-4">
                    {isAr ? "عن ماذا تريد إخبارنا؟" : "What's on your mind?"}
                  </label>
                  <input
                    {...register("subject")}
                    className="w-full h-16 bg-sky-50 border-4 border-transparent focus:border-yellow-400 rounded-full px-8 outline-none font-bold text-lg transition-all"
                    placeholder={isAr ? "عنوان الرسالة" : "Message subject"}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sky-900 font-black px-4">
                    {isAr ? "رسالتك" : "Your Message"}
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full p-8 bg-sky-50 border-4 border-transparent focus:border-yellow-400 rounded-[3rem] outline-none font-bold text-lg transition-all resize-none"
                    placeholder={isAr ? "اكتب هنا..." : "Write here..."}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-20 bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white rounded-full text-2xl font-black shadow-[0_8px_0_0_#C2410C] active:shadow-none active:translate-y-2 transition-all flex items-center justify-center gap-4"
                >
                  {isSubmitting ? (
                    <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{isAr ? "أرسل المغامرة!" : "Send Adventure!"}</span>
                      <Rocket size={32} className={cn(isAr && "rotate-180")} />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
