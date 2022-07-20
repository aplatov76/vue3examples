<template>
    <nav class="navbar">
        <h3>Online Bank</h3>
        <ul class="navbar-menu">
            <li>
                <router-link to="/">Заявка</router-link>
            </li>
            <li>
                <router-link to="/help">Помощь</router-link>
            </li>
            <li>
                <a href="#">Сообщения</a>
            </li>
            <li>
                <a href="#" @click.prevent="logout">Выход</a>
            </li>                           
        </ul>
    </nav>
</template>

<script lang="ts">
import {defineComponent, onErrorCaptured, ref} from 'vue';
import {useRouter} from 'vue-router';
import {useStore} from 'vuex';


export default defineComponent({
    setup(){
        const router = useRouter();
        const store = useStore();

        return{
            logout: () => {
                store.commit('authModule/logout');
                router.push('/auth');
            }
        }
    }
})
</script>