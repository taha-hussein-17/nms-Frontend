import { useTranslation } from "react-i18next";
import { MessageSquare } from "lucide-react";
import { Card } from "../../../components/atoms/Card";

interface Message {
  id: string;
  from: string;
  text: string;
  time: string;
}

export const ParentMessages = () => {
  const { t } = useTranslation();

  // Mock data for parent messages
  const parentMessages: Message[] = [
    {
      id: "msg1",
      from: t("parent_messages.teacher_name_1", "Ms. Sarah"),
      text: t(
        "parent_messages.message_text_1",
        "Your child, Ahmed, performed well in the last math test."
      ),
      time: "10:30 AM",
    },
    {
      id: "msg2",
      from: t("parent_messages.admin_name_1", "School Admin"),
      text: t(
        "parent_messages.message_text_2",
        "Reminder: Parent-teacher conferences are scheduled for next week."
      ),
      time: "Yesterday",
    },
    {
      id: "msg3",
      from: t("parent_messages.teacher_name_2", "Mr. John"),
      text: t(
        "parent_messages.message_text_3",
        "Please check the new assignment for English class."
      ),
      time: "2 days ago",
    },
  ];

  return (
    <div className="h-full flex flex-col glass rounded-[2.5rem] overflow-hidden border-2 shadow-2xl shadow-primary/5">
      <div className="p-6 border-b flex items-center justify-between bg-background/50 backdrop-blur-md">
        <h3 className="font-black text-foreground">
          {t("dashboard.messages", "Messages")}
        </h3>
      </div>

      <div className="flex-1 overflow-y-auto p-8 space-y-4 bg-slate-50/30 dark:bg-slate-900/30">
        {parentMessages.length > 0 ? (
          parentMessages.map((message) => (
            <Card
              key={message.id}
              className="p-4 rounded-2xl flex items-start gap-3"
            >
              <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-sm">{message.from}</p>
                  <span className="text-xs text-muted-foreground">
                    {message.time}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {message.text}
                </p>
              </div>
            </Card>
          ))
        ) : (
          <div className="text-center text-muted-foreground py-10">
            {t("parent_messages.no_messages", "No messages to display.")}
          </div>
        )}
      </div>
    </div>
  );
};
