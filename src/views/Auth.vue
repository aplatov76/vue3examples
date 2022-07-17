<template>
    <form class="card" @submit.prevent="onSubmit">
        <h1>Войти в систему</h1>
        <div class="form-control" :class="['form-control', {invalid: emailErrorMessage}]">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" @blur="emailHandlerBlur">
            <small v-if="emailErrorMessage"> {{emailErrorMessage}}</small>
        </div>
        <div :class="['form-control', {invalid: passwordErrorMessage}]">
            <label for="password">Пароль</label>
            <input type="password" id="password" v-model="password" @blur="passwordHandlerBlur">
            <small v-if="passwordErrorMessage"> {{passwordErrorMessage}}</small>
        </div>

        <button class="btn primary" :disabled="isSubmitting || isTooManyAttemps">Войти</button>
    </form>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useLoginForm} from '@/use/login-form';

export default defineComponent({
    setup(){
        return {...useLoginForm()}
    }
})
</script>