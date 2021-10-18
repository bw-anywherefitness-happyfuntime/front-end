import * as yup from 'yup';

const signupSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('username is required'),
    password: yup
        .string()
        .trim()
        .required('please enter a password'),
    
});

export default signupSchema;