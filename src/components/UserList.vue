<template>
    <div>
        <h2>User list</h2>
        <ul class="list">
            <li class="list-item" v-for="user in users" :key="user.id">
                {{user.name}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import {useUsers} from '@/use/users'
import {defineComponent} from 'vue'
export default defineComponent({
    async setup(){
        const {users} = await useUsers()
        return{
            users
        }
    }
})
</script>