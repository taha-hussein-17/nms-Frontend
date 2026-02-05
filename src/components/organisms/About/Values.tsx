import { useTheme } from "../../../providers/ThemeContext";
import { DefaultAboutValues } from "./DefaultAboutValues";
import { KidsAboutValues } from "./KidsAboutValues";

interface AboutValuesProps {
  isAr: boolean;
  t: any;
}

export const AboutValues = (props: AboutValuesProps) => {
  const { theme } = useTheme();

  switch (theme) {
    case "kids":
      return <KidsAboutValues {...props} />;
    default:
      return <DefaultAboutValues {...props} />;
  }
};
