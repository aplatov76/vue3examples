import { Commit, Dispatch } from 'vuex';
import axios from 'axios';
import AuthInterface from '@/interfaces/auth';

interface StateInterface {
    token: string | null
}

const TOKEN_KEY = 'jwt-token';

export default {
    namespaced: true,
    state(){
        return {
            token: localStorage.getItem(TOKEN_KEY)
        }
    },
    mutations: {
        setToken(state: StateInterface, token: string){
            state.token = token;
            localStorage.setItem(TOKEN_KEY, token);

        },
        logout(state: StateInterface){
            state.token = null;
            localStorage.removeItem(TOKEN_KEY);
        }
    },
    actions: {
        async login({ commit, dispatch }: { commit: Commit, dispatch: Dispatch }, payload: AuthInterface){
            
            try{
                const {data} = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`, {...payload, returnSecureToken: true})
                commit('setToken', data.idToken)
            } catch(e: any){
                dispatch('setMessage', {value: e.response.data.error.message, type: 'danger'}, {root: true})
                console.dir(e.response.data.error.message);
                throw new Error(e)
            } 
        }
    },
    getters: {
        token(state: StateInterface){
            return state.token
        },
        isAuthenticated(state: StateInterface){
            return !!state.token
        }
    }
}