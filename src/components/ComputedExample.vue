<template>
    <div>
        <!-- <input v-model="message" type="text">
        <br><br>
        <h3>
            {{ message }}
        </h3>
        <h3>
            {{  reverse }}
        </h3> -->
        <h1 v-custom-size-modify.xl.blue>Solicitud</h1>
        <h2 v-custom-size-arg:2xl>Factura</h2>
        <label v-font-size>Subtotal</label>
        <input  v-font-size type="number" v-model="subtotal">
        <h3 v-custom-size="90">
            Total Impuestos: {{ totalVat }} ({{  vat }}%)
        </h3>
    </div>
</template>

<script lang="ts" setup>

    import {computed, Ref, ref} from 'vue'

    const vat = 21;
    let subtotal:Ref<number> = ref(0);

    const totalVat =  computed(() => (vat*subtotal.value) / 100)

    // import { defineComponent, ref, Ref, computed} from 'vue';

    // export default defineComponent({
        // name: 'ComputedExample',
        // setup(){
            // let message:Ref<string> = ref('');
            // const reverse = computed(() => message.value.split('').reverse().join(''));
        //     return {
        //         message,
        //         reverse,
        //     }
        // }
        // data() {
        //     return {
        //         message: '',
        //     }
        // },
        // computed: {
        //     reverse():string{
        //         return this.message.split('').reverse().join('');
        //     }
        // }           
    // })
</script>

<style scoped>

</style>