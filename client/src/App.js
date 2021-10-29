import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Primary from "./screens/Primary";
import { createBrowserHistory } from "history";
import AdminLoginContainer from "./screens/AdminLogin";
import AdminPageContainer from "./screens/AdminPage";
import {useEffect} from "react";
import {getUser} from "./redux/user.reducer";
import {connect} from "react-redux";
import {getPromocodes} from "./redux/promocodes.reducer";

function App(props) {
  useEffect( () => {
    Promise.all([props.getUser(), props.getPromocodes()]);
  });

  const customHistory = createBrowserHistory();
  return (
    <Router history={customHistory}>
      <Switch>
        <Route exact path="/" component={Primary} />
        <Route exact path="/adminlogin" component={AdminLoginContainer} />
        <Route exact path="/adminpage" component={AdminPageContainer} />
      </Switch>
    </Router>
  );
}

const AppContainer = connect(null, {
  getUser,
  getPromocodes,
})(App)

export default AppContainer;
