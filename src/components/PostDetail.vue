<template>
    <div class="post">
        <h3>
            {{ props.title }}
        </h3>
        <p>
            {{ props.content }}
        </p>
        <input type="text" v-model="message">
        <button @click="handleClick">Hola</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
export default defineComponent({
    name: 'PostDetail',
    props: {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
            default: 'No content provided',
        }
    },
    emits: ["SayHi"],
    setup(props, {emit}){
        const handleClick = () => {
            emit('SayHi', message.value)
        }
        let message:Ref<string> = ref("");
        return{props, message, handleClick}
    }
})
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