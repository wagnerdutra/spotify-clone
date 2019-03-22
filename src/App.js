import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes';

/* Browser router passa como props, informações da URL, por
isso muito importante usa-lo para englobar toda aplicação */

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <Content>
          <Header />
          <Routes />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  </BrowserRouter>
);

export default App;
