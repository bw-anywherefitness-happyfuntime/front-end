import React from 'react';
import './styles/Login.css';

export default function Login(props) {
    const {
        values,
        change,
        submit,
        disabled,
        errors,
    } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        console.log("submit called from Login.js");
        // submit();
    }
    const onChange = evt => {
        // console.log("change detected in Login.js")
        const { name, value } = evt.target;
        // const valueToUse = type === "checkbox" ? checked : value;
        change(name, value);
    }

    return (
        <div className="login">
            <form className="input form" onSubmit={onSubmit}>
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
                <div className="form-group submit">
                    <button id='submitBtn' disabled={disabled}>submit</button>
                </div>
            </form>
        </div>
    )
}

// LOG IN FORM
//username
//password
