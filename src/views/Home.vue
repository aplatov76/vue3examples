<template>
  <app-page title="Список заявок">
    <template #header>
      <button class="btn primary" @click="toogle">Создать</button>
    </template>
    <request-table :request="request" />
    <teleport to="body">
      <app-modal v-if="modal" title="Создать заявку" @close="toogle" >
        <request-modal @created="toogle" />
      </app-modal>
    </teleport>
  </app-page>
</template>
<script lang="ts">
import {computed, defineComponent} from 'vue'
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import AppPage from '@/components/ui/AppPage.vue';
import AppModal from '@/components/ui/AppModal.vue';
import RequestTable from '@/components/request/RequestTable.vue';
import RequestModal from '@/components/request/RequestModal.vue';
import { useStore } from 'vuex';


export default defineComponent({
  components: { AppPage, RequestTable, AppModal, RequestModal },
  
  setup(){
    const router = useRouter();
    const modal = ref(false);
    const store = useStore();
    
    return {
      //title: 'How work ts with VueJS?',
      //navigate: () => router.push('/')
      request: computed(() => store.getters['requestModule/requests']),
      modal,
      toogle: () => modal.value = !modal.value,
    }
  }
})
</script>