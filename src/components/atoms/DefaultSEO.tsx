import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export const DefaultSEO = () => {
  const { t } = useTranslation();
  const siteTitle =
    t("common.site_name") || "WAKP - National Management System";
  const description =
    t("common.site_description") ||
    "Empowering education through technology. Join the #1 learning platform.";
  const keywords =
    t("common.site_keywords") ||
    "education, learning, courses, instructors, platform, national management system, wakp, academy ,lms";
  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="theme-color" content="#10B981" />
      <meta name="color-scheme" content="dark light" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};
