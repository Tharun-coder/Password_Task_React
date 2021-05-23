import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Reset from "./PasswordReset";
import UpdatePass from "./UpdatePass";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/password_reset" component={Reset} />
          <Route exact path="/update_password" component={UpdatePass} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
