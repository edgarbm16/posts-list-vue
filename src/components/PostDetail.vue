<template>
    <div class="post">
        <h3>
            {{ props.title }}
        </h3>
        <p>
            {{ props.content }}
        </p>
        <input type="text" v-model="message">
        <button @click="handleClick">Ejecutar</button>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, Ref } from 'vue';

const props = defineProps({
    title: String,
    content: String
});

const emit = defineEmits(['sayHi']);

const handleClick = () => {
    emit('sayHi', message.value)
}

let message:Ref<string> = ref("");

// export default defineComponent({
    // name: 'PostDetail',
    // props: {
    //     title: {
    //         type: String,
    //         required: true,
    //     },
    //     content: {
    //         type: String,
    //         required: true,
    //         default: 'No content provided',
    //     }
    // },
    // emits: ["sayHi"],
    // setup(props, {emit}){

        // return{props, message, handleClick}
    // }
// })
</script>


<style scoped>
.post{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: antiquewhite;
    width: 100%;
    height: 300px;
    text-align: center;
    padding: 20px;
}
</style>