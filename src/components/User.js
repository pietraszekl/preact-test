import { h } from "preact";

export function User(props) {
  return (
    <div class="box">
      <div class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src={props.image} />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>{props.name} <small>@{props.login}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
