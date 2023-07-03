import { EFontSizes, ELetterSpacing, MEDIA_QUERY } from "./constant";
import { colors } from "./palette";

export const cssBaseline = {
  styleOverrides: `
      @font-face {
        font-family: 'CircularXXWeb-Light';
        font-weight: 300;
        src: url('https://arrive-cdn.azureedge.net/dev/fonts/CircularXXWeb-Light.woff2') format('woff2');
      }
      
      @font-face {
        font-family: 'CircularXX';
        font-weight: 400;
        src: url('https://arrive-cdn.azureedge.net/dev/fonts/CircularXXWeb-Regular.woff2') format('woff2');
      }
      
      @font-face {
        font-family: 'CircularXX';
        font-weight: 500;
        src: url('https://arrive-cdn.azureedge.net/dev/fonts/CircularXXTT-Book.ttf') format('truetype');
      }
      
      @font-face {
        font-family: 'CircularXX';
        font-weight: 600;
        src: url('https://arrive-cdn.azureedge.net/dev/fonts/CircularXXWeb-Medium.woff2') format('woff2');
      }
      
      @font-face {
        font-family: 'CircularXX';
        font-weight: 700;
        src: url('https://arrive-cdn.azureedge.net/dev/fonts/CircularXXWeb-Bold.woff2') format('woff2');
      }
    `,
};

const typography = {
  fontFamily: `'CircularXX', "Open Sans", sans-serif`,
  allVariants: {
    fontFamily: `'CircularXX', "Open Sans", sans-serif`,
  },
  h1: {
    fontWeight: 400,
    fontSize: EFontSizes.xxxlarge,
    color: colors.grease,
    letterSpacing: ELetterSpacing.negativeLarge,
    lineHeight: "115%",
    [MEDIA_QUERY]: {
      fontSize: EFontSizes.xxlarge,
    },
  },
  h2: {
    fontWeight: 400,
    fontSize: EFontSizes.xxlarge,
    letterSpacing: ELetterSpacing.negativeMedium,
    lineHeight: "125%",
    [MEDIA_QUERY]: {
      fontSize: EFontSizes.xlarge,
    },
  },
  h3: {
    fontWeight: 500,
    fontSize: EFontSizes.xlarge,
    letterSpacing: ELetterSpacing.negativeSmall,
    lineHeight: "115%",
    [MEDIA_QUERY]: {
      fontSize: EFontSizes.large,
    },
  },
  h4: {
    fontWeight: 500,
    fontSize: EFontSizes.large,
    letterSpacing: ELetterSpacing.medium,
    lineHeight: "125%",
    [MEDIA_QUERY]: {
      fontSize: EFontSizes.normal,
      lineHeight: "120%",
    },
  },
  h5: {
    fontWeight: 500,
    fontSize: EFontSizes.normal,
    letterSpacing: ELetterSpacing.medium,
    lineHeight: "120%",
    [MEDIA_QUERY]: {
      fontSize: EFontSizes.medium,
      letterSpacing: "0",
    },
  },
  h6: {
    fontWeight: 500,
    fontSize: EFontSizes.medium,
    letterSpacing: ELetterSpacing.cero,
    lineHeight: "115%",
    [MEDIA_QUERY]: {
      fontSize: EFontSizes.normal,
      lineHeight: "135%",
    },
  },
  subtitle1: {
    fontWeight: 500,
    fontSize: EFontSizes.normal,
    letterSpacing: ELetterSpacing.medium,
    lineHeight: "120%",
    [MEDIA_QUERY]: {
      fontSize: EFontSizes.medium,
      letterSpacing: ELetterSpacing.cero,
    },
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: EFontSizes.medium,
    letterSpacing: ELetterSpacing.cero,
    lineHeight: "115%",
    [MEDIA_QUERY]: {
      fontSize: EFontSizes.normal,
      lineHeight: "135%",
    },
  },
  body1: {
    fontWeight: 400,
    fontSize: EFontSizes.normal,
    letterSpacing: ELetterSpacing.medium,
    lineHeight: "140%",
    [MEDIA_QUERY]: {
      fontSize: EFontSizes.medium,
    },
  },
  body2: {
    fontWeight: 400,
    fontSize: EFontSizes.medium,
    letterSpacing: ELetterSpacing.cero,
    lineHeight: "140%",
    [MEDIA_QUERY]: {
      fontSize: EFontSizes.default,
      lineHeight: "130%",
    },
  },
  caption: {
    fontWeight: 400,
    fontSize: EFontSizes.default,
    letterSpacing: ELetterSpacing.medium,
    lineHeight: "110%",
    [MEDIA_QUERY]: {
      fontSize: EFontSizes.small,
      lineHeight: "120%",
    },
  },
  overline: {
    fontWeight: 400,
    fontSize: EFontSizes.medium,
    letterSpacing: ELetterSpacing.large,
    lineHeight: "140%",
    [MEDIA_QUERY]: {
      fontSize: EFontSizes.default,
      lineHeight: "130%",
    },
  },
};

export default typography;
