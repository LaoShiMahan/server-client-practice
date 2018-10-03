import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SignInForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form
                onSubmit={ handleSubmit }
                className="sign-up-form"
            >
                <Field
                    name="email"
                    type="email"
                    component="input"
                />
                <Field
                    name="password"
                    type="password"
                    component="input"
                />
                <button>Submit</button>
            </form>
        );
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;