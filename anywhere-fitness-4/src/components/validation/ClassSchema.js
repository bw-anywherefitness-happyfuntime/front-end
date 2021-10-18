import * as yup from 'yup';

const classSchema = yup.object().shape({
    class_type: yup
        .string()
        .trim()
        .required('Please provide the class "Type" input field.')
        .min(2, 'Type must be at least 2 characters.'),
    class_location: yup
        .string
        .trim()
        .required('Please provide class location.'),
    class_duration: yup
        .string()
        .trim()
        .required('Duration field empty.'),
    class_date: yup
        .string()
        .trim()
        .required('Date field empty.'),
    class_time: yup
        .string()
        .trim()
        .required('Time field is empty'),
    class_intesity: yup
        .string()
        .trim()
        .required('Intesity field is empty.')
});

export default formSchema;

//class_type
//class_location
//class_duration
//class_date
//class_time
//intensity_level ->>>>>> number/10