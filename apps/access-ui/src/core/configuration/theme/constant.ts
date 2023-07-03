export enum EFontSizes {
  xxsmall = '6px',
  xsmall = '8px',
  small = '10px',
  default = '12px',
  medium = '14px',
  normal = '17px',
  large = '22px',
  xlarge = '26px',
  xxlarge = '32px',
  xxxlarge = '42px',
}

export enum ELetterSpacing {
  negativeLarge = '-0.75px',
  negativeMedium = '-0.35px',
  negativeSmall = '-0.15px',
  cero = '0px',
  small = '0.1px',
  medium = '0.25px',
  large = '0.75px',
}

export enum EBreakpoints {
  xs = '600px',
}

export const MEDIA_QUERY = `@media (max-width:${EBreakpoints.xs})`;
