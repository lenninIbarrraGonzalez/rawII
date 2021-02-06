import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from '../containers/Home';
// import WaitingRoom from '../containers/WaitingRoom';
// import NotFound from '../containers/NotFound';
import { ThemeProvider } from '@material-ui/core/styles';
import Contenedor from '../components/Contenedor';
import theme from '../../temaConfig';
import Navbar from '../components/Navbar';

const App = () =>
// <BrowserRouter>
//   <Switch>
//     <Route exact path="/" component={Home} />
//     <Route exact path="/waitingroom" component={WaitingRoom} />
//     <Route component={NotFound} />
//   </Switch>
// </BrowserRouter>
(
  <ThemeProvider theme={theme}>
    <Navbar />
    <Contenedor />
  </ThemeProvider>
)


export default App;