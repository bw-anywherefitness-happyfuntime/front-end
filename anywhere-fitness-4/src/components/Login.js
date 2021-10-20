import React from 'react';
import './styles/Login.css';

export default function Login(props) {
    const {
        values,
        change,
        submit,
        disabled,
        errors,
        callErrors
    } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        console.log("submit called from Login.js");
        submit();
    }
    const onChange = evt => {
        const { name, value } = evt.target;
        change(name, value);
    }

    return (
        <div className="login">
            <form className="login-input login-form" onSubmit={onSubmit}>
                <label> Username:
                    <input
                        value={values.username}
                        onChange={onChange}
                        name="username"
                        type="text"
                    />
                </label>
                <label> Password:
                    <input
                        value={values.password}
                        onChange={onChange}
                        name="password"
                        type="password"
                    />
                </label>
                <div className="errors">
                    <div>{errors.username}</div>
                    <div>{errors.password}</div>
                </div>
                <div>{callErrors}</div>
                <div className="form-group submit">
                    <button id='submitBtn' disabled={disabled}>submit</button>
                </div>
            </form>
        </div>
    )
}
