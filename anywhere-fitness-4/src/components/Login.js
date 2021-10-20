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
                <div className='login-col'>
                    <label> Username:
                        <input
                            value={values.username}
                            onChange={onChange}
                            name="username"
                            type="text"
                        />
                    </label>
                </div>
                <div className='login-col'>
                    <label> Password:
                        <input
                            value={values.password}
                            onChange={onChange}
                            name="password"
                            type="password"
                        />
                    </label>
                </div>
                <div className="errors">
                    <div style={{ color: 'red' }}>{errors.username}</div>
                    <div style={{ color: 'red' }}>{errors.password}</div>
                </div>
                <div style={{ color: 'red' }}>{callErrors}</div>
                <div className="form-group submit">
                    <button className='submit-login' disabled={disabled}>submit</button>
                </div>
            </form>
        </div>
    )
}
