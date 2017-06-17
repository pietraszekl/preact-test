import { h, Component } from "preact";
import User from "./User";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true
    };
  }
  componentDidMount() {
    fetch(this.props.config.urls.user)
      .then(resp => resp.json())
      .then(user => {
        this.setState({
          user,
          loading: false
        });
      })
      .catech(err => console.log(err));
  }
  render() {
    return (
      <div class="app">
        {this.state.loading
          ? <p>Loading ...</p>
          : <User
              image={this.state.user.avatar_url}
              name={this.state.user.name}
              login={this.state.user.login}
            />}

      </div>
    );
  }
}

export default App;
