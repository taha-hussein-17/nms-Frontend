export const THEME_CONFIGS = {
  default: {
    borderRadius: "rounded-2xl",
    buttonRadius: "rounded-full",
    fontFamily: "font-sans",
    navHeight: "h-16",
    containerMaxWidth: "max-w-[1440px]",
  },
  kids: {
    borderRadius: "rounded-[3rem]",
    buttonRadius: "rounded-[2rem]",
    fontFamily: "font-vazirmatn", // or something more playful
    navHeight: "h-18",
    containerMaxWidth: "max-w-[1200px]",
  },
  coders: {
    borderRadius: "rounded-none",
    buttonRadius: "rounded-sm",
    fontFamily: "font-mono",
    navHeight: "h-14",
    containerMaxWidth: "max-w-full",
  },
  azhari: {
    borderRadius: "rounded-lg",
    buttonRadius: "rounded-lg",
    fontFamily: "font-serif",
    navHeight: "h-16",
    containerMaxWidth: "max-w-[1300px]",
  },
  uni: {
    borderRadius: "rounded-xl",
    buttonRadius: "rounded-xl",
    fontFamily: "font-sans",
    navHeight: "h-16",
    containerMaxWidth: "max-w-[1440px]",
  },
};

export type ThemeType = keyof typeof THEME_CONFIGS;
