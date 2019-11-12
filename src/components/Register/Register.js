import React from "react";
const Fragment = React.Fragment;

export const Register = ({onRouteChange}) => {
	return (
        <Fragment>
            <article className="br3 ba dark-gray b--white-40 mv4 w-100 w-100-m w-50-l mw6 center shadow-3">
            <main className = "pa2 black-80 w-60" >
                <div className = "measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0 white">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f4 white" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white-90" type="text" name="name" id="name" />
                        </div>
                        <div className="mv1">
                            <label className="db fw6 lh-copy f4 white" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white-90" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mv1">
                            <label className="db fw6 lh-copy f4 white" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white-90" type="password" name="password"  id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input onClick={()=> onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib white b--white-90" type="submit" value="Register"/>
                    </div>
                </div>
            </main>
            </article>
        </Fragment>
    );
};
