import React from 'react';
import './styles/Signup.css';

export default function Signup(props) {
    const {
        values,
        change,
        submit,
        submit_disabled,
        role_disabled,
        errors,
        callErrors
    } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        // console.log("submit called from Signup.js");
        submit();
    }
    const onChange = evt => {
        const { name, value } = evt.target;
        change(name, value);
    }

    return (
        <div className="login">
            <form className="signup-input signup-form" onSubmit={onSubmit}>
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
                <label> Secret Code:
                    <input
                        value={values.secret}
                        onChange={onChange}
                        name="secret"
                        type="text"
                    />
                </label>
                <label>Role:
                    <select id="role-dropdown" disabled={role_disabled} value={values.role} name="role" onChange={onChange}>
                        <option value="">-- select a role --</option>
                        <option value="client">I am a Client.</option>
                        <option value="instructor">I am an Instructor.</option>
                    </select>
                </label>
                <div className="errors">
                    <div>{errors.username}</div>
                    <div>{errors.password}</div>
                </div>
                <div>{callErrors}</div>
                <button id='submitBtn' disabled={submit_disabled}>{values.role === "client" ? 'get fit af' : 'make em cry'}</button>

            </form>
        </div>
    )
}


// SIGN UP FORM
//username
//password
//Auth code =>>>>>> instructor: makemesuperman ->>>>> string