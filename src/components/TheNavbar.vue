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
                <a href="#">Выход</a>
            </li>                           
        </ul>
    </nav>
</template>

<script lang="ts">
import {defineComponent, onErrorCaptured, ref} from 'vue'

export default defineComponent({
    
})
</script>