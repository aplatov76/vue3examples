import {computed, watch} from 'vue';
import {useField, useForm} from 'vee-validate';
import * as yup from 'yup';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router'

export function useLoginForm(){
        const {value: email, errorMessage: emailErrorMessage, handleBlur: emailHandlerBlur} = useField('email', yup.string().trim().required().email());
        const {value: password, errorMessage: passwordErrorMessage, handleBlur: passwordHandlerBlur} = useField('password', yup.string().trim().required().min(6));
        const {handleSubmit, isSubmitting, submitCount} = useForm();
        const isTooManyAttemps = computed(() => submitCount.value >= 3);
        const store = useStore();
        const router = useRouter();

        const onSubmit = handleSubmit((values) => {
            try{
                store.dispatch('authModule/login', values);
                router.push('/')
            } catch(e){

            }
        })
        watch(isTooManyAttemps, (val) => {
            if(val){
                setTimeout(() => submitCount.value = 0, 1500)
                
            }
        } )
        return {
            email,
            password,
            emailErrorMessage,
            passwordErrorMessage,
            emailHandlerBlur,
            passwordHandlerBlur,
            onSubmit,
            isSubmitting,
            isTooManyAttemps
        }   
}