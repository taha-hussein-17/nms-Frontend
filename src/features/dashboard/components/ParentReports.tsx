import { useTranslation } from "react-i18next";
import { BarChart3, Users, Award, TrendingUp, Calendar } from "lucide-react";
import { Card } from "../../../components/atoms/Card";
import { Button } from "../../../components/atoms/Button";
import { motion } from "framer-motion";

interface ChildReport {
  id: string;
  name: string;
  overallProgress: number;
  completedCourses: number;
  attendance: string;
  latestAchievement: string;
}

export const ParentReports = () => {
  const { t } = useTranslation();

  // Mock data for children's reports
  const childrenReports: ChildReport[] = [
    {
      id: "child1",
      name: t("parent_reports.child_name_1", "Ahmed Mohamed"),
      overallProgress: 75,
      completedCourses: 3,
      attendance: "90%",
      latestAchievement: t(
        "parent_reports.achievement_1",
        "Completed Algebra Course"
      ),
    },
    {
      id: "child2",
      name: t("parent_reports.child_name_2", "Lina Ali"),
      overallProgress: 60,
      completedCourses: 2,
      attendance: "85%",
      latestAchievement: t(
        "parent_reports.achievement_2",
        "Improved Math Grade by 15%"
      ),
    },
    {
      id: "child3",
      name: t("parent_reports.child_name_3", "Omar Hassan"),
      overallProgress: 90,
      completedCourses: 5,
      attendance: "98%",
      latestAchievement: t(
        "parent_reports.achievement_3",
        "Top Student in Science Project"
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-black">
          {t("dashboard.sidebar.reports", "Reports")}
        </h2>
        <p className="text-muted-foreground font-bold mt-1">
          {t(
            "parent_reports.subheading",
            "Overview of your children's academic performance and progress"
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {childrenReports.map((child, index) => (
          <motion.div
            key={child.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 rounded-[2rem] border border-secondary">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-black text-xl flex items-center gap-2">
                  <Users className="text-primary" size={24} />
                  {child.name}
                </h3>
                <Button variant="ghost" size="sm">
                  {t("parent_reports.view_details", "View Details")}
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted-foreground">
                      {t("parent_reports.overall_progress", "Overall Progress")}
                    </p>
                    <h4 className="text-lg font-black">
                      {child.overallProgress}%
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center">
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted-foreground">
                      {t(
                        "parent_reports.completed_courses",
                        "Completed Courses"
                      )}
                    </p>
                    <h4 className="text-lg font-black">
                      {child.completedCourses}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted-foreground">
                      {t("parent_reports.attendance", "Attendance")}
                    </p>
                    <h4 className="text-lg font-black">{child.attendance}</h4>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/10 text-yellow-500 flex items-center justify-center">
                    <BarChart3 size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted-foreground">
                      {t(
                        "parent_reports.latest_achievement",
                        "Latest Achievement"
                      )}
                    </p>
                    <h4 className="text-lg font-black">
                      {child.latestAchievement}
                    </h4>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
