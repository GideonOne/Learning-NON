import { createTheme } from '@mantine/core';
import { themeToVars } from '@mantine/vanilla-extract';


// Do not forget to pass theme to MantineProvider
export const theme = createTheme({
  fontFamily: "Kanit, sans-serif",
});

// CSS variables object, can be access in *.css.ts files
export const vars = themeToVars(theme);