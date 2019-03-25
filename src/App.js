import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import { Wrapper, Container, Content } from './styles/components';
import ErrorBox from './components/ErrorBox/index';

import store from './store';

import Routes from './routes';

/* Browser router passa como props, informações da URL, por
isso muito importante usa-lo para englobar toda aplicação */

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <GlobalStyle />
        <Container>
          <Sidebar />
          <Content>
            <ErrorBox />
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
