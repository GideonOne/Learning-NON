import { createTheme } from '@mantine/core';
import { themeToVars } from '@mantine/vanilla-extract';

// Do not forget to pass theme to MantineProvider
export const theme = createTheme({
  fontFamily: "Kanit, sans-serif",
  focusRing: 'auto',
  colors: {
    black: ["#000000", "#1a1a1a", "#333333", "#4d4d4d", "#666666", "#808080", "#999999", "#b3b3b3", "#cccccc", "#e6e6e6"],
    white: ["#ffffff", "#f2f2f2", "#e6e6e6", "#d9d9d9", "#cccccc", "#bfbfbf", "#b3b3b3", "#a6a6a6", "#999999", "#8c8c8c"],
    red: ["#ff0000", "#e60000", "#cc0000", "#b30000", "#990000", "#800000", "#660000", "#4d0000", "#330000", "#1a0000"],
    blue: ["#0000ff", "#0000e6", "#0000cc", "#0000b3", "#000099", "#000080", "#000066", "#00004d", "#000033", "#00001a"],
    green: ["#00ff00", "#00e600", "#00cc00", "#00b300", "#009900", "#008000", "#006600", "#004d00", "#003300", "#001a00"],
    yellow: ["#ffff00", "#e6e600", "#cccc00", "#b3b300", "#999900", "#808000", "#666600", "#4d4d00", "#333300", "#1a1a00"],
  },
  other: {
    fontWeights: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
    fontSize: {
      xxs: 10,
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      xxl: 24,
      xxxl: 28,
      xxxxl: 32,
    }
  }

});

// CSS variables object, can be access in *.css.ts files
export const vars = themeToVars(theme);