import * as yup from 'yup';

const classSchema = yup.object().shape({
    type: yup
        .string()
        .trim()
        .required('Please provide the class "Type" input field.')
        .min(2, 'Type must be at least 2 characters.'),
    location: yup
        .string
        .trim()
        .required('Please provide class location.'),
    duration: yup
        .string()
        .trim()
        .required('Duration field empty.'),
    date: yup
        .string()
        .trim()
        .required('Date field empty.'),
    time: yup
        .string()
        .trim()
        .required('Time field is empty'),
    intesity: yup
        .number()
        .trim()
        .required('Intesity field is empty.')
        .max(10, 'Intensity cannot be more than 10.')
});

export default formSchema;

//class_type
//class_location
//class_duration
//class_date
//class_time
//intensity_level ->>>>>> number/10