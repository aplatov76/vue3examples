<template>
  <div class="card">
    <h1 class="card-title">Список заявок</h1>
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