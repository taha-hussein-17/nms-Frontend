import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MainLayout } from "../../components/templates/MainLayout";
import { SEO } from "../../components/atoms/SEO";
import { Card } from "../../components/atoms/Card";
import { Button } from "../../components/atoms/Button";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, ArrowLeft, Timer } from "lucide-react";
import { ROUTES } from "../../constants/routes";
import { useAlert } from "../../hooks/useAlert";

const mockQuestions = [
  {
    id: 1,
    question: "ما هو ناتج 5 + 7؟",
    options: ["10", "11", "12", "13"],
    correct: 2,
  },
  {
    id: 2,
    question: "أي من هذه لغات برمجة؟",
    options: ["HTML", "CSS", "JavaScript", "كل ما سبق"],
    correct: 3,
  },
  {
    id: 3,
    question: "ما هي عاصمة مصر؟",
    options: ["القاهرة", "الإسكندرية", "أسوان", "الجيزة"],
    correct: 0,
  },
];

const TakeExamPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const { showConfirm, showToast } = useAlert();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !isSubmitted) {
      setIsSubmitted(true);
      showToast(
        isAr
          ? "انتهى الوقت، تم إرسال الإجابات تلقائياً"
          : "Time's up, answers submitted automatically",
        "warning"
      );
    }
  }, [timeLeft, isSubmitted, isAr, showToast]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswer = (optionIndex: number) => {
    setAnswers({ ...answers, [currentQuestion]: optionIndex });
  };

  const handleSubmit = async () => {
    const result = await showConfirm(
      isAr ? "هل أنت متأكد؟" : "Are you sure?",
      isAr
        ? "هل تريد إنهاء الاختبار وإرسال إجاباتك؟"
        : "Do you want to finish the exam and submit your answers?",
      isAr ? "نعم، إنهاء" : "Yes, finish",
      isAr ? "إلغاء" : "Cancel"
    );

    if (result.isConfirmed) {
      setIsSubmitted(true);
      showToast(
        isAr ? "تم إرسال الإجابات بنجاح" : "Answers submitted successfully",
        "success"
      );
    }
  };

  const calculateScore = () => {
    let score = 0;
    mockQuestions.forEach((q, index) => {
      if (answers[index] === q.correct) score++;
    });
    return (score / mockQuestions.length) * 100;
  };

  if (isSubmitted) {
    const score = calculateScore();
    return (
      <MainLayout>
        <SEO title={t("exams.completed_title", "تم الانتهاء من الاختبار")} />
        <div className="container mx-auto px-4 py-12 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card p-12 rounded-[3rem] border-2 border-primary shadow-xl"
          >
            <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={60} />
            </div>
            <h1 className="text-4xl font-black mb-4">
              {t("exams.finished", "أحسنت! لقد أتممت الاختبار")}
            </h1>
            <p className="text-xl text-muted-foreground font-bold mb-8">
              {t("exams.score_msg", "لقد حصلت على درجة")}: {score.toFixed(0)}%
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-secondary/50">
                <p className="text-sm text-muted-foreground font-bold">
                  {t("exams.correct_answers", "الإجابات الصحيحة")}
                </p>
                <p className="text-2xl font-black text-primary">
                  {
                    Object.values(answers).filter(
                      (a, i) => a === mockQuestions[i].correct
                    ).length
                  }{" "}
                  / {mockQuestions.length}
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-secondary/50">
                <p className="text-sm text-muted-foreground font-bold">
                  {t("exams.time_taken", "الوقت المستغرق")}
                </p>
                <p className="text-2xl font-black text-primary">
                  {formatTime(600 - timeLeft)}
                </p>
              </div>
            </div>
            <Button
              onClick={() => navigate(ROUTES.DASHBOARD_EXAMS)}
              size="lg"
              className="w-full rounded-2xl h-16 text-lg font-black"
            >
              {t("exams.back_to_dashboard", "العودة للوحة التحكم")}
            </Button>
          </motion.div>
        </div>
      </MainLayout>
    );
  }

  const question = mockQuestions[currentQuestion];

  return (
    <MainLayout>
      <SEO title={t("exams.taking_exam", "تأدية الاختبار")} />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-black">
              {t("exams.exam_id", "اختبار رقم")} #{id}
            </h1>
            <p className="text-muted-foreground font-bold">
              {t("exams.question_count", "سؤال")} {currentQuestion + 1}{" "}
              {t("exams.of", "من")} {mockQuestions.length}
            </p>
          </div>
          <div className="flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-2xl border border-primary/20">
            <Timer className="w-5 h-5 animate-pulse" />
            <span className="font-black text-xl tabular-nums">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-secondary rounded-full mb-12 overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{
              width: `${((currentQuestion + 1) / mockQuestions.length) * 100}%`,
            }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: isAr ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isAr ? 20 : -20 }}
            className="space-y-8"
          >
            <Card className="p-8 md:p-12 rounded-[2.5rem] border-2 border-secondary hover:border-primary/30 transition-colors">
              <h2 className="text-2xl md:text-3xl font-black mb-10 leading-relaxed">
                {question.question}
              </h2>

              <div className="grid grid-cols-1 gap-4">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className={`p-6 rounded-2xl text-right flex items-center justify-between group transition-all duration-300 border-2 ${
                      answers[currentQuestion] === index
                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                        : "bg-secondary/30 hover:bg-secondary/60 border-transparent"
                    }`}
                  >
                    <span className="text-lg font-black">{option}</span>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        answers[currentQuestion] === index
                          ? "border-white bg-white/20"
                          : "border-muted-foreground/30 group-hover:border-primary"
                      }`}
                    >
                      {answers[currentQuestion] === index && (
                        <div className="w-3 h-3 bg-white rounded-full" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            <div className="flex items-center justify-between gap-4">
              <Button
                variant="outline"
                disabled={currentQuestion === 0}
                onClick={() => setCurrentQuestion((p) => p - 1)}
                className="rounded-2xl h-14 px-8 font-black gap-2"
              >
                <ArrowRight className={isAr ? "" : "rotate-180"} size={20} />
                {t("common.previous", "السابق")}
              </Button>

              {currentQuestion === mockQuestions.length - 1 ? (
                <Button
                  onClick={handleSubmit}
                  disabled={answers[currentQuestion] === undefined}
                  className="rounded-2xl h-14 px-12 font-black gap-2 bg-green-600 hover:bg-green-700 text-white border-none shadow-lg shadow-green-600/20"
                >
                  {t("exams.submit", "إنهاء الاختبار")}
                  <CheckCircle2 size={20} />
                </Button>
              ) : (
                <Button
                  disabled={answers[currentQuestion] === undefined}
                  onClick={() => setCurrentQuestion((p) => p + 1)}
                  className="rounded-2xl h-14 px-12 font-black gap-2"
                >
                  {t("common.next", "التالي")}
                  <ArrowLeft className={isAr ? "" : "rotate-180"} size={20} />
                </Button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </MainLayout>
  );
};

export default TakeExamPage;
