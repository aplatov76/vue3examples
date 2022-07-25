import {useForm, useField} from 'vee-validate';
import * as yup from 'yup';

export function useRequestForm(fn){
    const {isSubmitting, handleSubmit} =  useForm({
        initialValues: {
            status: 'active'
        }
    });
    const {value: fio, errorMessage : fError, handleBlur: fBlur} = useField('fio',
        yup.string()
            .trim()
            .required('Поле обязательно')
    );
    const {value: phone, errorMessage: pError, handleBlur: pBlur} = useField('phone',
            yup.string()
                .trim()
                .required('Телефон не может быть пустым')
    );
    const {value: amount, errorMessage: aError, handleBlur: aBlur} = useField('amount',
            yup.number()
               .required()
               .min(0, 'Cумма не может быть меньше 0')
    );
    const {value: status, errorMessage: sError, handleBlur: sBlur} = useField('status');

    const onSubmit = handleSubmit(fn);

    return {
        isSubmitting,
        onSubmit,
        status,
        fio,
        phone,
        amount,
        fError,
        aError,
        pError,
        sError,
        fBlur,
        pBlur,
        aBlur,
        sBlur
    }
}