import { h, Component } from "preact";
import linkState from "linkstate";
import User from "./User";

export class Sandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true
    };
    this.submit = this.submit.bind(this);
  }
  submit() {
    console.log(this.state.text);
  }
  componentDidMount() {
    fetch("https://api.github.com/users/pietraszekl")
      .then(resp => resp.json())
      .then(user => {
        this.setState({
          user,
          loading: false
        });
      })
      .catch(err => console.log(err));
  }
  render(props, { loading, user, text = "" }) {
    return (
      <div class="sandbox">
        {loading
          ? <p>Loading ...</p>
          : <div>
              <User
                image={user.avatar_url}
                name={user.name}
                login={user.login}
              />
              <form onSubmit={this.submit} action="javascript:">
                <input
                  type="text"
                  class="input"
                  value={text}
                  onInput={linkState(this, "text")}
                />
                <pre>
                  <code>{JSON.stringify(this.state.text, null, 2)}</code>
                </pre>

              </form>
            </div>}

      </div>
    );
  }
}

export default Sandbox;
