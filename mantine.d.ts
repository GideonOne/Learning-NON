// mantine.d.ts
import { MantineThemeOther } from '@mantine/core';

declare module '@mantine/core' {
  export interface MantineThemeOther {
    fontWeights: {
      thin: number;
      light: number;
      normal: number;
      medium: number;
      semiBold: number;
      bold: number;
      extraBold: number;
      black: number;
    };
    fontSize: {
      xxs: number;
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
      xxxl: number;
      xxxxl: number;
    };
  }
}
