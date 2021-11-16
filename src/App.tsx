import React, { ReactElement } from 'react';

import { Tour, TourCard } from './components';
import { Container } from './styled/Container';
import { Nullable } from './types/Nullable';

import { GlobalStyle } from 'styled/global';

const App = (): Nullable<ReactElement> => {
  const q = false;
  const w = true;
  return (
    <Container>
      <GlobalStyle />
      {q && <TourCard />}
      {w && <Tour />}
    </Container>
  );
};

export default App;
