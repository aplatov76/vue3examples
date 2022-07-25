<template>
<the-navbar />
    <div class="container with-nav">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import TheNavbar from '@/components/TheNavbar.vue';

export default defineComponent({
    components: {TheNavbar}
})
</script>