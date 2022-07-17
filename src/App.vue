<template>
  <component :is="`${layout}-layout`" v-if="layout" />
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import {useRoute} from 'vue-router';
import MainLayout from '@/layout/MainLayout.vue';
import AuthLayout from '@/layout/Authlayout.vue';

export default defineComponent({
  components: {
    MainLayout,
    AuthLayout
  },
  setup() {
    const route = useRoute();

    return {
      layout: computed(() => route.meta.layout)
    }
  },
})
</script>