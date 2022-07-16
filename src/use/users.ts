import {ref, Ref} from 'vue';
import { useFetch } from "./fetch";

interface User {
    id: number,
    name: string,
    email: string

}

type UsableUsers = Promise<{users: Ref<User[] | undefined>}>

export async function useUsers(): UsableUsers{
    const laoding: Ref<boolean> = ref(false)
    const {response: users, request} = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');
    console.log('request')
    if(!laoding.value){
        await request()
        laoding.value = true
    }

    return {users}

}