export function fetchUser(username) {
  return function(dispatch) {
    dispatch({
      type: "USER_FETCH",
      payload: username
    });
    console.log("actions, ", username);

    fetch(`https://api.github.com/users/${username}`)
      .then(resp => resp.json())
      .then(user => {
        dispatch({ type: "USER_FULFILLED", payload: user });
      })
      .catch(err => console.log(err));
  };
}
