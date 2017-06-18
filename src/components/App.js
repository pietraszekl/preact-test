import { h, Component } from "preact";
import { Router } from "preact-router";
import { Home } from "./Home";
import Profile from "./Profile";
import Sandbox from "./Sandbox";
import Error from "./Error";

export class App extends Component {
  render() {
    return (
      <div class="app">
        <Router>
          <Home path="/" />
          <Profile path="/profile/:user" />
          <Sandbox path="/sandbox" />
          <Error default />
        </Router>
      </div>
    );
  }
}

export default App;
