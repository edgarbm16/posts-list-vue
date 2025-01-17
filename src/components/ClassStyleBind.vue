<template>
    <div>
        <p :class="{'danger' : hasErrors}">
            El mensaje se envio correctamente
        </p>
        <p :style="{ backgroundColor : '#ccc', color : c}">
            El mensaje se envio correctamente
        </p>
        <button v-on:click="handleClick()">
            Cambiar color
        </button>
    </div>
</template>

<script lang="ts" setup>
    import {ref} from 'vue'
    let hasErrors = true;

    let c = ref('#eeee');
    const handleClick = () => {c.value = '#ff0000'}
</script>

<style>
.danger{
    color: red;
}
</style>