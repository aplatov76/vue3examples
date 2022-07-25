<template>
    <div class="card">
        <h1 class="card-title">
            {{title}}
            <slot name="header" />
        </h1>
        <slot />
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        setup(props){
            document.title = `${props.title} | Title not found`
        }
    })
</script>