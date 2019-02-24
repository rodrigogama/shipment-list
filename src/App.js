import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Shipment from './pages';
import { GlobalStyles, theme } from './styles';

library.add(faPhone);

const App = () => (
  <Fragment>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Shipment />
    </ThemeProvider>
  </Fragment>
);

export default App;
