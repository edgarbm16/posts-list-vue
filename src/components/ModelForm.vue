<template>
    <div>
        <form>
            <input type="text" v-model="inputText"/>
            <input type="checkbox" v-model="agree"/> Acepto términos y condiciones
            <select v-model="country">
                <option value="MX">MX</option>
                <option value="US">US</option>
                <option value="CA">CA</option>
            </select>
        </form>
        <h3>
            {{ inputText }}
        </h3>
    </div>
</template>

<script lang="ts" setup>
    import {Ref, ref} from 'vue'

    let inputText:Ref<string> = ref('')
    let agree: Ref<boolean> = ref(false)
    let country: Ref<string> = ref('MX')
</script>

<style>
</style>