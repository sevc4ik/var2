import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes';
import styled, { ThemeProvider } from 'styled-components';

const AppWrapper = styled.div`
  width: 100%;
  background: #fff;
`
const theme = {
  color: {
    primary: '#21A659',
  },
  device: {
    mobile: '(max-width: 670px)',
  }
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppWrapper>
          <AppRoutes/>
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
