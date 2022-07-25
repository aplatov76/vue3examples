import axios from '@/axios/request';
import { Commit, Dispatch } from 'vuex';
import RequestInterface from '@/interfaces/request.interface';
import store from '../index';

interface StateInterface {
    requests: RequestInterface[]
}
interface DataResponse {
    name: string
}

export default {
    namespaced: true,
    state(){
        return {
            requests: []
        }
    },
    mutations: {
        setRequest(state: StateInterface, requests: []){
            state.requests = requests;
        },
        addRequest(state: StateInterface, request: RequestInterface){
            state.requests.push(request)
        }
    },
    getters: {
        requests(state: StateInterface){
            return state.requests;
        }
    },
    actions: {
       async create({ commit, dispatch }: { commit: Commit, dispatch: Dispatch }, payload: RequestInterface){
         try {
           const token = store.getters['authModule/token']
           const res =  await axios.post<DataResponse>(`/requests.json?auth=${token}`, payload);
           //data: {data: RequestInterface}
           commit('addRequest', {...payload, id: res.data.name});
           console.log(res.data.name);
           dispatch('setMessage', {
               value: 'Заявка успешно создана',
               type: 'primary'
           }, {root: true});
         } catch(e){
            dispatch('setMessage', {
                value: e,
                type: 'danger'
            }, {root: true})
         }
       }
    }
}