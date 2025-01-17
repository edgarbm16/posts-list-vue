<template>
    <div class="counter">
        <h3>
            {{ counter }}
        </h3>
        <button @click="addCounter">
            Incrementar
        </button>
        <button @click="removeCounter">
            Decrementar
        </button>
    </div>
</template>

<script lang="ts">
 import {defineComponent} from "vue";
 export default defineComponent({
    name: 'CounterOption',
    components: {},
    data() {
        let counter = 0;
        return {
            counter
        };
    },
    methods: {
        addCounter() {
            this.counter++;
        },
        removeCounter() {
            this.counter--;
        }
    }
 });
</script>

<style>
 .counter {
    text-align: center;
    display: flex;
    margin: auto;
    column-gap: 1rem;
    max-width: 100%;
    justify-content: center;
    padding: 2rem 0 2rem 0;

  }
</style>