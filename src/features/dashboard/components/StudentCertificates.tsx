import { useTranslation } from "react-i18next";
import { CheckCircle, Download } from "lucide-react";

export const StudentCertificates = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const certificates = [
    {
      id: 1,
      title: "Advanced React & Next.js",
      date: "2024-02-15",
      instructor: "Dr. Ahmed",
      grade: "A+",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black mb-2">
            {isAr ? "الشهادات" : "Certificates"}
          </h2>
          <p className="text-muted-foreground">
            {isAr
              ? "استعرض وحمل شهادات إتمام الدورات الخاصة بك"
              : "View and download your course completion certificates"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-card border border-secondary rounded-2xl p-6 relative overflow-hidden group hover:shadow-lg transition-all"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <CheckCircle className="w-24 h-24 text-primary" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {isAr ? "المحاضر:" : "Instructor:"} {cert.instructor}
                </p>
              </div>

              <div className="pt-4 border-t border-secondary flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  {cert.date}
                </span>
                <button className="flex items-center gap-2 text-primary hover:underline text-sm font-bold">
                  <Download className="w-4 h-4" />
                  {isAr ? "تحميل" : "Download"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
