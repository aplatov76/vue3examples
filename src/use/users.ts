import {ref, Ref} from 'vue';
import { useFetch } from "./fetch";

export async function useUsers(): Promise<any>{
    const laoding: Ref<boolean> = ref(false)
    const {response: users, request} = useFetch('https://jsonplaceholder.typicode.com/users');
    console.log('request')
    if(!laoding.value){
        await request()
        laoding.value = true
    }

    return {users}

}