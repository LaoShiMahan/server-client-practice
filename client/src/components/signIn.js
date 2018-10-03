import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import SignInForm from './signInForm';

class SignIn extends Component {
    onSignIn = (fields) => {
        this.props.signIn(fields);
    }

    render() {
        return (
            <div className='SignIn'>
                {/* <p>message from server: { this.props.message }</p> */}
                <SignInForm onSubmit={this.onSignIn} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { message } = state.message.message;
    return { message }
}

SignIn = connect(mapStateToProps, { signIn })(SignIn);

export default SignIn;