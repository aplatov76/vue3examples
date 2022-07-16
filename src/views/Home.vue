<template>
  <div class="card">
    <h1>{{title}}</h1>



    <button class="btn" @click="navigate" >Открыть пользователей</button>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import {useRouter} from 'vue-router';

export default defineComponent({
  setup(){
    const router = useRouter();

    return {
      title: 'How work ts with VueJS?',
      navigate: () => router.push('/')
    }
  }
})
</script>