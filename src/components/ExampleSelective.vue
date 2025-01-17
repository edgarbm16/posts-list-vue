<template>
    <div>
        <p v-if="age >= 18">
            Eres mayor de edad
        </p>
        <p v-else>
            Eres menor de edad
        </p>
    </div>
    <div>
        <p v-show="num >= 100">
            Es mayor que 100
        </p>
        <p v-show="num < 100">
            Es menor que 100
        </p>
    </div>
</template>

<script lang="ts" setup>
    let age = 12
    let num = 120
</script>

<style scoped>
</style>