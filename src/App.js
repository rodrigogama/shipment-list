import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { ShipmentProvider } from './context/ShipmentContext';
import Shipment from './pages';
import { GlobalStyles, theme } from './styles';

library.add(faPhone);

const App = () => (
  <Fragment>
    <GlobalStyles />
    <ShipmentProvider>
      <ThemeProvider theme={theme}>
        <Shipment />
      </ThemeProvider>
    </ShipmentProvider>
  </Fragment>
);

export default App;
