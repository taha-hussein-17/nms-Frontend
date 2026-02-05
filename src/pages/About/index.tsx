import { MainLayout } from "../../components/templates/MainLayout";
import { useTranslation } from "react-i18next";
import { useAlert } from "../../providers/AlertContext";
import { SEO } from "../../components/atoms/SEO";
import { AboutHero } from "../../components/organisms/About/Hero";
import { AboutVision } from "../../components/organisms/About/Vision";
import { AboutValues } from "../../components/organisms/About/Values";
import { AboutStats } from "../../components/organisms/About/Stats";
import { AboutCTA } from "../../components/organisms/About/CTA";

const About = () => {
  const { i18n, t } = useTranslation();
  const { showAlert } = useAlert();
  const isAr = i18n.language === "ar";

  const handleShowAlert = () => {
    showAlert({
      title: t("about.alert.title"),
      message: t("about.alert.message"),
      type: "question",
      actions: [
        {
          label: t("about.alert.confirm"),
          onClick: () => {
            showAlert({
              title: t("about.alert.success_title"),
              message: t("about.alert.success_message"),
              type: "success",
            });
          },
          variant: "default",
        },
        {
          label: t("about.alert.cancel"),
          onClick: () => console.log("Cancelled"),
          variant: "outline",
        },
      ],
    });
  };

  return (
    <MainLayout>
      <SEO title={t("about.title")} description={t("about.description")} />

      <AboutHero isAr={isAr} t={t} handleShowAlert={handleShowAlert} />
      <AboutVision isAr={isAr} t={t} />
      <AboutValues isAr={isAr} t={t} />
      <AboutStats isAr={isAr} t={t} />
      <AboutCTA isAr={isAr} />
    </MainLayout>
  );
};

export default About;
