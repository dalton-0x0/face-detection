import React from "react";
const Fragment = React.Fragment;

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (e) => {
    this.setState({ signInEmail: e.target.value });
  };

  onPasswordChange = (e) => {
    this.setState({ signInPassword: e.target.value });
  };

  onSubmitSignIn = () => {
    fetch("https://rocky-falls-33914.herokuapp.com/signin", {
      method: "post",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.addUser(user);
          this.props.onRouteChange("home");
        }
      })
      .catch(() => {
        this.props.onRouteChange("home");
      });
  };
  render() {
    // eslint-disable-next-line
    const { onRouteChange } = this.props;
    return (
      <Fragment>
        <article className="br3 ba dark-gray b--white-40 mv4 w-100 w-100-m w-50-l mw6 center shadow-3">
          <main className="pa2 black-80 w-60">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0 white">Sign In</legend>
                <div className="mt3">
                  <label
                    className="db fw6 lh-copy f4 white"
                    htmlFor="email-address"
                  >
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white-90 white"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className="mv1">
                  <label className="db fw6 lh-copy f4 white" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white-90 white"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  onClick={this.onSubmitSignIn}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib white b--white-90"
                  type="submit"
                  value="Sign in"
                />
              </div>
            </div>
          </main>
        </article>
      </Fragment>
    );
  }
}

export default SignIn;
