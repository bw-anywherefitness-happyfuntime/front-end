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
        <div className="signup">
            <h2>SIGN UP</h2>
            <form className="signup-input signup-form" onSubmit={onSubmit}>
                <div className='signup-col signup-col-1'>
                    <label> Username:
                        <br />
                        <input
                            value={values.username}
                            onChange={onChange}
                            name="username"
                            type="text"
                        />
                    </label>
                </div>
                <div className='signup-col signup-col-2'>
                    <label> Password:
                        <br />
                        <input
                            value={values.password}
                            onChange={onChange}
                            name="password"
                            type="password"
                        />
                    </label>
                </div>
                <div className='signup-col signup-col-3'>
                    <label> Secret Code:
                        <br />
                        <input
                            value={values.secret}
                            onChange={onChange}
                            name="secret"
                            type="text"
                        />
                    </label>
                </div>
                <div className='signup-col signup-col-4'>
                    <label>Role:
                        <br />
                        <select id="role-dropdown" disabled={role_disabled} value={values.role} name="role" onChange={onChange}>
                            <option value="">-- select a role --</option>
                            <option value="client">I am a Client.</option>
                            <option value="instructor">I am an Instructor.</option>
                        </select>
                    </label>
                </div>
                <div className="errors">
                    <div style={{ color: 'red' }}>{errors.password}</div>
                    <div style={{ color: 'red' }}>{errors.username}</div>
                </div>
                <div style={{ color: 'red' }}>{callErrors}</div>
                <button className='submit-signup' disabled={submit_disabled}>{values.role === "client" ? 'get fit af' : 'make em cry'}</button>

            </form>
        </div>
    )
}


// SIGN UP FORM
//username
//password
//Auth code =>>>>>> instructor: makemesuperman ->>>>> string