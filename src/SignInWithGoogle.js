import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from './firebase'

class SignInGoogleBase extends Component {
    constructor(props) {
        super(props);

        this.state = { error: null };
    }

    onSubmit = event => {
        // event.preventDefault();
        this.props.firebase
            .doSignInWithGoogle()
            /*   .then(socialAuthUser => {
                 // Create a user in your Firebase Realtime Database too
               return this.props.firebase.user(socialAuthUser.user.uid).set({
                     username: socialAuthUser.user.displayName,
                     email: socialAuthUser.user.email,
                     roles: {},
                 }); 
                 console.log('socialuser');
                 
             })*/
          /*  .then(() => {
                this.setState({ error: null });
                this.props.history.push('/home');
            })
            .catch(error => {
                // if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                //     error.message = ERROR_MSG_ACCOUNT_EXISTS;
                // }

                this.setState({ error });
            });*/


        event.preventDefault();
    };

    render() {
        const { error } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <button type="submit">Sign In with Google</button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignInGoogle = compose(
    withRouter,
    withFirebase,
)(SignInGoogleBase);

export { SignInGoogle };