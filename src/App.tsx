import React, { ReactElement } from 'react';

import { ThemeProvider } from 'styled-components';

import { Tour, TourCard } from './components';
import { Container } from './styled/Container';
import { Nullable } from './types/Nullable';

import { GlobalStyle } from 'styled/global';
import { myTheme } from 'styled/theme';

const App = (): Nullable<ReactElement> => {
  const q = true;
  const w = false;
  return (
    <ThemeProvider theme={myTheme}>
      <Container>
        <GlobalStyle />
        {q && <TourCard />}
        {w && <Tour />}
      </Container>
    </ThemeProvider>
  );
};

export default App;
