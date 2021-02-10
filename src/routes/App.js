import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import WaitingRoom from '../containers/WaitingRoom';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from '../containers/NotFound';
import Home from '../containers/Home';
import theme from '../../temaConfig';
import Layout from '../components/Layout';
// import PageLogin from '../containers/PageLogin';
// import RememberPass from '../containers/RememberPass';
import WaitingRoom from '../containers/WaitingRoom'

const App = () =>

(
  <ThemeProvider theme={theme}>
    <Layout />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={WaitingRoom} />
        {/* <Route exact path="/login" component={PageLogin} />
        <Route exact path="/remember" component={RememberPass} /> */}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    <Layout />
  </ThemeProvider>
)


export default App;