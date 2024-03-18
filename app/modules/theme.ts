export const BLUEISH_BLACK = "#191922";
export const GRAPHITE_GRAY = "#2B2B34";
export const WHITE = "#FFFFFF";
export const SLATE_GRAY = "#686D81";
export const SKY_BLUE = "#38BDD4";
export const DARK_SLATE_GRAY = "#464650";

export interface Theme {
  backgroundColorPrimary: string;
  backgroundColorSecondary: string;
  textPrimary: string;
  textSecondary: string;
  Primary: string;
  border: string;
}

let theme: Theme = {
  backgroundColorPrimary: BLUEISH_BLACK,
  backgroundColorSecondary: GRAPHITE_GRAY,
  textPrimary: WHITE,
  textSecondary: SLATE_GRAY,
  Primary: SKY_BLUE,
  border: DARK_SLATE_GRAY,
};

export const setTheme = (newTheme: Partial<Theme>) => {
  theme = { ...theme, ...newTheme };
};

export const getTheme = (): Theme => {
  return theme;
};
