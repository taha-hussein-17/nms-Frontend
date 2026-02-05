import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../providers/ThemeContext";
import { THEME_CONFIGS } from "../../constants/themeRegistry";
import {
  GraduationCap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Cloud,
  Sun,
} from "lucide-react";
import { ROUTES } from "../../constants/routes";
import { Button } from "../atoms/Button";
import { cn } from "../../utils/cn";

export const Footer = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const config =
    THEME_CONFIGS[theme as keyof typeof THEME_CONFIGS] || THEME_CONFIGS.default;
  const isKids = theme === "kids";
  const isCoders = theme === "programmers";
  const isAzhari = theme === "azhari";
  const isUni = theme === "uni";

  const footerLinks = {
    platform: [
      { name: t("nav.courses"), href: ROUTES.COURSES },
      { name: t("nav.exams"), href: ROUTES.EXAMS },
      { name: t("nav.calendar"), href: ROUTES.CALENDAR },
      { name: t("nav.instructors"), href: ROUTES.INSTRUCTORS },
      { name: t("nav.about"), href: ROUTES.ABOUT },
      { name: t("nav.services"), href: ROUTES.SERVICES },
      { name: t("nav.contact"), href: ROUTES.CONTACT },
    ],
    support: [
      { name: t("footer.become_instructor"), href: ROUTES.BECOME_INSTRUCTOR },
      { name: t("home.faqs.title"), href: "#" },
      { name: t("footer.terms"), href: ROUTES.TERMS },
      { name: t("footer.privacy"), href: ROUTES.PRIVACY },
    ],
    social: [
      { icon: Facebook, href: "#", name: "Facebook" },
      { icon: Twitter, href: "#", name: "Twitter" },
      { icon: Instagram, href: "#", name: "Instagram" },
      { icon: Linkedin, href: "#", name: "Linkedin" },
      { icon: Github, href: "#", name: "Github" },
    ],
  };

  return (
    <footer
      className={cn(
        "bg-card border-t-2 border-border/40 pt-24 pb-12 relative overflow-hidden",
        isKids &&
          "bg-secondary/10 border-t-8 border-secondary/20 rounded-t-[5rem] mt-20",
        isCoders &&
          "bg-black text-green-500 border-t-4 border-green-500 font-mono",
        isAzhari && "bg-primary/5 border-t-4 border-primary/20",
        isUni && "bg-primary/10 border-t-4 border-primary/30"
      )}
    >
      {isKids && (
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            className="relative block w-full h-[50px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-background"
            ></path>
          </svg>
        </div>
      )}

      {isKids && (
        <>
          <Cloud className="absolute top-10 left-10 text-white/40 w-16 h-16 animate-bounce" />
          <Sun className="absolute top-20 right-20 text-yellow-400/20 w-24 h-24 animate-spin-slow" />
        </>
      )}

      <div
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
          config.containerMaxWidth
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to={ROUTES.HOME} className="flex items-center gap-3 group">
              <div
                className={cn(
                  "bg-primary p-2.5 text-primary-foreground shadow-lg shadow-primary/30 group-hover:rotate-6 transition-transform",
                  config.borderRadius,
                  isCoders && "bg-green-500 text-black shadow-green-500/50",
                  isAzhari && "bg-primary shadow-primary/20",
                  isUni && "bg-primary shadow-primary/20"
                )}
              >
                <GraduationCap className="w-7 h-7" />
              </div>
              <span
                className={cn(
                  "text-2xl font-black bg-clip-text text-transparent bg-gradient-to-l from-primary to-blue-600",
                  isKids && "text-3xl",
                  isCoders &&
                    "font-mono text-green-500 tracking-normal bg-none",
                  isAzhari && "font-serif tracking-tight"
                )}
              >
                {isKids ? "WAKP Kids" : "WAKP Academy"}
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed text-sm font-bold">
              {t("footer.platform_desc")}
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "w-11 h-11 bg-secondary/50 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group hover:-translate-y-1",
                    config.borderRadius
                  )}
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 tracking-tight">
              {t("footer.platform")}
            </h4>
            <ul className="space-y-5">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-all flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:scale-150 group-hover:bg-primary transition-all"></span>
                    <span className="text-sm font-semibold">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 tracking-tight">
              {t("footer.support")}
            </h4>
            <ul className="space-y-5">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-all flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:scale-150 group-hover:bg-primary transition-all"></span>
                    <span className="text-sm font-semibold">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary/30 p-8 rounded-[2rem] border border-border/50">
            <h4 className="font-black text-lg mb-4 tracking-tight">
              {t("footer.newsletter")}
            </h4>
            <p className="text-sm text-muted-foreground mb-6">
              {t("footer.newsletter_desc")}
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder={t("footer.email_placeholder")}
                className="w-full bg-background border-2 border-slate-200 rounded-2xl px-5 py-3.5 text-sm font-bold focus:border-primary focus:bg-white outline-none transition-all shadow-sm"
              />
              <Button className="w-full h-12 rounded-xl font-bold">
                {t("footer.subscribe")}
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-bold text-muted-foreground">
            © {new Date().getFullYear()} WAKP Academy.{" "}
            {t("common.all_rights_reserved")}
          </p>
          <div className="flex gap-8">
            <Link
              to={ROUTES.PRIVACY}
              className="text-xs font-black text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              to={ROUTES.TERMS}
              className="text-xs font-black text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
            >
              {t("footer.terms")}
            </Link>
            <Link
              to="/cookies"
              className="text-xs font-black text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
            >
              {t("footer.cookies")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
