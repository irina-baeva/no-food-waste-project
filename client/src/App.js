import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
// import Landing from "./components/layout/Landing";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Login from "./components/authentification/Login";
import Register from "./components/authentification/Register";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Alert from "./components/layout/Alert";
// Redux
import { Provider } from "react-redux";
import store from "./store.js";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import Dashboard from "./components/dashboard/Dashboard";
import GlobalStat from "./components/dashboard/GlobalStat";
import LocalStat from "./components/dashboard/LocalStat";
import PrivateRoute from "./components/routing/PrivateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const palette = {
  primary: { main: "#80CBC4", contrastText: "#FAFAFA" },
  secondary: { main: "#B2DFDB", contrastText: "#FAFAFA" },
};
const themeName = "Monte Carlo Aqua Island Badger";
let theme = createMuiTheme({ palette, themeName });

function App() {
  //we use use effect
  useEffect(() => {
    store.dispatch(loadUser(), []);
  });
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Fragment>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <section className="container">
              <Alert />
              <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <Route exact path="/global-stat" component={GlobalStat} />
                <Route exact path="/local-stat" component={LocalStat} />
              </Switch>
            </section>
          </Fragment>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
