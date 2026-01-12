export type FontFace = {
  family: string;
  file: string;
  weight: number | `${number} ${number}`;
  style: 'normal' | 'italic';
};

export const Fonts = {
  serif: {
    display: 'Libre Caslon Display',
    text: 'Libre Caslon Text',
    accent: 'Linden Hill',
  },
  sans: {
    ui: 'Graphik',
    text: 'Libre Franklin',
  },
} as const;

export const FontFaces: readonly FontFace[] = [
  { family: Fonts.serif.display, file: '/assets/LibreCaslonDisplay-Regular.ttf', weight: 400, style: 'normal' },
  { family: Fonts.serif.text, file: '/assets/LibreCaslonText-Regular.ttf', weight: 400, style: 'normal' },
  { family: Fonts.serif.text, file: '/assets/LibreCaslonText-Italic.ttf', weight: 400, style: 'italic' },
  { family: Fonts.serif.text, file: '/assets/LibreCaslonText-Bold.ttf', weight: 700, style: 'normal' },
  { family: Fonts.serif.accent, file: '/assets/LindenHill-Regular.ttf', weight: 400, style: 'normal' },
  { family: Fonts.serif.accent, file: '/assets/LindenHill-Italic.ttf', weight: 400, style: 'italic' },
  { family: Fonts.sans.text, file: '/assets/LibreFranklin-VariableFont_wght.ttf', weight: '100 900', style: 'normal' },
  { family: Fonts.sans.text, file: '/assets/LibreFranklin-Italic-VariableFont_wght.ttf', weight: '100 900', style: 'italic' },
  { family: Fonts.sans.ui, file: '/assets/Graphik-Medium-Trial.otf', weight: 500, style: 'normal' },
  { family: Fonts.sans.ui, file: '/assets/Graphik-Bold-Trial.otf', weight: 700, style: 'normal' },
] as const;

export type TypeStyle = {
  family: string;
  size: number;
  lineHeight: number;
  weight?: number;
  style?: 'normal' | 'italic';
};

export const Typography = {
  displayLarge: { family: Fonts.serif.text, size: 40, lineHeight: 48, weight: 700 },
  headline: { family: Fonts.serif.text, size: 22, lineHeight: 34, weight: 400 },
  tourTitle: { family: Fonts.serif.accent, size: 28, lineHeight: 34, weight: 400 },
  title1: { family: Fonts.serif.text, size: 22, lineHeight: 28, weight: 700 },
  title2: { family: Fonts.serif.text, size: 18, lineHeight: 36, weight: 700 },
  body: { family: Fonts.serif.text, size: 14, lineHeight: 22, weight: 400 },
  callout: { family: Fonts.sans.text, size: 16, lineHeight: 22, weight: 400 },
  subhead: { family: Fonts.sans.text, size: 15, lineHeight: 20, weight: 400 },
  footnote: { family: Fonts.sans.text, size: 13, lineHeight: 18, weight: 400 },
  caption: { family: Fonts.sans.text, size: 12, lineHeight: 16, weight: 400 },
  cta: { family: Fonts.sans.ui, size: 12, lineHeight: 14, weight: 700 },
  buttonLabel: { family: Fonts.sans.ui, size: 12, lineHeight: 14, weight: 700 },
} satisfies Record<string, TypeStyle>;
