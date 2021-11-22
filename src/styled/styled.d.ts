// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export  interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
      secondaryDark: string,
      error: string;
      mainHover: string;
    };

    fonts: {
      text: string,
      heading: string
    }
  }
}