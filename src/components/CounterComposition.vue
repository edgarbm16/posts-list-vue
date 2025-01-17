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
import { defineComponent, ref, Ref } from "vue";
export default defineComponent ({
    setup() {
        let counter:Ref = ref(0)
        const addCounter = ():void => {
            counter.value++;
        }
        const removeCounter = () => {
            counter.value--;
        }
        return {counter, addCounter, removeCounter}
    }
});
</script>

<style></style>