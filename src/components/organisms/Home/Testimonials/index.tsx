import { useTheme } from "../../../../providers/ThemeContext";
import { DefaultTestimonials } from "./DefaultTestimonials";
import { KidsTestimonials } from "./KidsTestimonials";
import { CodersTestimonials } from "./CodersTestimonials";
import { AzhariTestimonials } from "./AzhariTestimonials";
import { UniTestimonials } from "./UniTestimonials";

export const Testimonials = () => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsTestimonials />;
    case "programmers":
      return <CodersTestimonials />;
    case "azhari":
      return <AzhariTestimonials />;
    case "uni":
      return <UniTestimonials />;
    default:
      return <DefaultTestimonials />;
  }
};
