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
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small">
                  <span class="fa fa-reply" />
                </span>
              </a>
              <a class="level-item">
                <span class="icon is-small">
                  <span class="fa fa-retweet" />
                </span>
              </a>
              <a class="level-item">
                <span class="icon is-small">
                  <span class="fa fa-heart" />
                </span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default User;
