import { useTranslation } from "react-i18next";
import { MainLayout } from "../../components/templates/MainLayout";
import { Card } from "../../components/atoms/Card";
import { Button } from "../../components/atoms/Button";
import { cn } from "../../utils/cn";
import { ArrowRight } from "lucide-react";

interface Payment {
  id: string;
  childName: string;
  courseTitle: string;
  amount: string;
  date: string;
  status: "Paid" | "Pending" | "Failed";
}

const PaymentStatus = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const parentPayments: Payment[] = [
    {
      id: "PAY-001",
      childName: isAr ? "أحمد محمد" : "Ahmed Mohamed",
      courseTitle: isAr ? "دورة الرياضيات المتقدمة" : "Advanced Math Course",
      amount: "$150.00",
      date: isAr ? "10 يناير، 2024" : "Jan 10, 2024",
      status: "Paid",
    },
    {
      id: "PAY-002",
      childName: isAr ? "سارة علي" : "Sara Ali",
      courseTitle: isAr ? "دورة اللغة الإنجليزية" : "English Language Course",
      amount: "$120.00",
      date: isAr ? "15 يناير، 2024" : "Jan 15, 2024",
      status: "Pending",
    },
    {
      id: "PAY-003",
      childName: isAr ? "أحمد محمد" : "Ahmed Mohamed",
      courseTitle: isAr ? "دورة الفيزياء" : "Physics Course",
      amount: "$180.00",
      date: isAr ? "20 فبراير، 2024" : "Feb 20, 2024",
      status: "Paid",
    },
    {
      id: "PAY-004",
      childName: isAr ? "ليلى خالد" : "Laila Khaled",
      courseTitle: isAr ? "دورة الكيمياء" : "Chemistry Course",
      amount: "$160.00",
      date: isAr ? "01 مارس، 2024" : "Mar 01, 2024",
      status: "Failed",
    },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-black mb-8">
          {t("payment_status.parent_payments", "Children's Payments")}
        </h1>

        <Card className="p-6 rounded-2xl">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {t("payment_status.child_name", "Child Name")}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {t("payment_status.course_title", "Course Title")}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {t("payment_status.amount", "Amount")}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {t("payment_status.date", "Date")}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {t("payment_status.status", "Status")}
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {t("payment_status.actions", "Actions")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {parentPayments.map((payment) => (
                  <tr key={payment.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                      {payment.childName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      {payment.courseTitle}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                      {payment.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      {payment.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={cn(
                          "px-2 inline-flex text-xs leading-5 font-semibold rounded-full",
                          payment.status === "Paid" &&
                            "bg-emerald-100 text-emerald-800",
                          payment.status === "Pending" &&
                            "bg-yellow-100 text-yellow-800",
                          payment.status === "Failed" &&
                            "bg-red-100 text-red-800"
                        )}
                      >
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost" size="sm">
                        {t("payment_status.view_details", "View Details")}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default PaymentStatus;
