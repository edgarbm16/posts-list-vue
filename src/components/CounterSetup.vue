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

<script lang="ts" setup>
import { ref, Ref } from "vue";
let counter:Ref = ref(0)
const addCounter = ():void => {
    counter.value++;
}
const removeCounter = () => {
    counter.value--;
}
</script>

<style></style>