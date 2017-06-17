import { h } from "preact";
import User from "./User";

const users = [
  {
    image: "https://avatars0.githubusercontent.com/u/525704?v=3&s=460",
    name: "Lukasz Pietraszek"
  }
];

export function App() {
  return (
    <div class="app">
      {users.map(user => <User {...user} key={user.name} />)}
    </div>
  );
}

export default App;
