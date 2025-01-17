<template>
    <div>
        <h1>
            Hello World
        </h1>
    </div>
</template>

<script lang="ts" setup>
    import { onMounted, onUpdated, onUnmounted } from 'vue';
    onMounted(() => {
        console.log('mounted');
    })
    onUpdated(() => {
        console.log('updated');
    })
    onUnmounted(() => {
        console.log('unmounted');
    })
</script>

<!-- <script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CycleComponent',
    created() {
        console.log('created');
    },
    mounted() {
        console.log('mounted');
    },
    updated() {
        console.log('updated');
    },
    unmounted() {
        console.log('unmounted');
    }
})
</script> -->

<style scoped></style>