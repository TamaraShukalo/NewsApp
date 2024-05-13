export type FontWeight = keyof typeof FONT_WEIGHTS;

export const FONT_WEIGHTS = {
  thin: '200',
  light: '300',
  regular: '400',
  medium: '500',
  bold: '700',
  black: '900',
} as const;

export type FontFamily = 'primary';

export const FONTS: {[font in FontFamily]: {[weight in FontWeight]: string}} = {
  primary: {
    thin: 'Roboto-Thin', // 100
    light: 'Roboto-Light', // 300
    regular: 'Roboto-Regular', // 400
    medium: 'Roboto-Medium', // 500
    bold: 'Roboto-Bold', // 700
    black: 'Roboto-Black', // 900
  },
};
