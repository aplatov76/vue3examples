<template>
    <form class="card" @submit.prevent="onSubmit">
        <h1>Войти в систему</h1>
        <div class="form-control" :class="['form-control', {invalid: false}]">
            <label for="email">Email</label>
            <Field type="email" name="email" id="email" v-model="email" />
            
        </div>
        <div :class="['form-control', {invalid: passwordErrorMessage}]">
            <label for="password">Пароль</label>
            <Field type="password" name="password" id="password" v-model="password" @blur="passwordHandlerBlur" />
            <small v-if="passwordErrorMessage"> {{passwordErrorMessage}}</small>
        </div>

        <button class="btn primary" :disabled="isSubmitting || isTooManyAttemps">Войти</button>
    </form>
</template>

<script lang="js">
import {defineComponent} from 'vue';
import {useRoute} from 'vue-router';
import {useStore} from 'vuex';
import {useLoginForm} from '@/use/login-form.js';
import { Form, Field } from 'vee-validate';

export default defineComponent({
    components: {
        Form,
        Field,
    },
    setup(){
        const route = useRoute();
        const store = useStore();
        const {message} = route.query;
        if(message){
            store.dispatch('setMessage', {value: 'Неверный пароль', type: 'danger'})
        }
        return {...useLoginForm()}
    }
})
</script>