<template>
    <h4 class="text-center">Заявок пока нет</h4>
    <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>ФИО</th>
                <th>Телефон</th>
                <th>Сумма</th>
                <th>Статус</th>
                <th>Действие</th>
            </tr>
        </thead>
        <tbody v-if="request">
            <tr v-for="(item, index) in request" :key="item.id">
                <td>{{index}}</td>
                <td>{{item.fio}}</td>
                <td>{{item.phone}}</td>
                <td>{{currency(item.amount)}}</td>
                <td>{{item.status}}</td>
                <td></td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {currency} from '@/utils/currency';

export default defineComponent({
    props: ['request'],
    setup(){
        return {
            currency
        }
    }
})
</script>
<style scoped>

</style>