import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from '../containers/Home';
// import WaitingRoom from '../containers/WaitingRoom';
// import NotFound from '../containers/NotFound';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../temaConfig';
import Drawers from '../components/Drawers';

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

    <Drawers />

  </ThemeProvider>
)


export default App;