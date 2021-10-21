import * as yup from 'yup';

const signupSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .min(6, 'username must be at least 6 characters')
        .required('username is required'),
    password: yup
        .string()
        .trim()
        .min(6, 'password must be at least 6 characters')
        .required('please enter a password'),
    secret: yup.string(),
    role: yup.string().oneOf(["makemesuperman", "client"], "choose a role"),
});

export default signupSchema;