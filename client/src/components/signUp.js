import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessage, signUp } from '../actions';
import SignUpForm from './signUpForm';

class SignUp extends Component {
    componentDidMount() {
        this.props.fetchMessage();
    }

    onSignUp = (fields) => {
        this.props.signUp(fields);
    }

    render() {
        return (
            <div className='signup'>
                {/* <p>message from server: { this.props.message }</p> */}
                <SignUpForm onSubmit={this.onSignUp} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { message } = state.message.message;
    return { message }
}

SignUp = connect(mapStateToProps, { fetchMessage, signUp })(SignUp);

export default SignUp;