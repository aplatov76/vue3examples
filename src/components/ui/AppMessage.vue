<template>
    <div v-if="message" :class="['alert', message.type]">
        <p class="alert-title">

        </p>
        <p>{{message.value}}</p>
        <span class="alert-close" @click="close">&times;</span>
    </div>
</template>

<script lang="ts">
    import {defineComponent, onErrorCaptured, ref} from 'vue';
    import Vue from 'vue';
    import {computed} from 'vue';
    import {useStore} from 'vuex';

    export default defineComponent({
        setup(){
            const store = useStore();
            const message = computed(() => store.state.message)

            const close = () => {
                store.dispatch('setMessage', null)
            }

            return {
                message,
                close
            }
        }
    })
</script>