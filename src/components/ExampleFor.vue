<template>
    <div>
        <ul>
            <li v-for="country in countries" :key="country">{{ country }}</li>
        </ul>
        <ul>
            <li v-for="(food, index) in foods" v-bind:key="index">{{ food }}</li>
        </ul>
        <ul>
            <li v-for="fruit in fruits" :key="fruit.color">{{ fruit.color }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import {Ref, ref} from 'vue'
let countries:Ref<Array<string>> = ref([
    'USA',
    'India',
    'China',
    'Japan', 
    'Germany', 
    'France', 
    'United Kingdom', 
    'Italy', 
    'Canada', 
    'Australia'
])
let foods:Ref<Array<string>> = ref([
    'Soda',
    'Soda',
    'Bread',
    'Pizza', 
    'Salad'
])
interface IFruit {
    name: string;
    color: string;
}
let fruits:Ref<Array<IFruit>> = ref([
    {
        name: 'Apple',
        color: 'Green'
    },
    {
        name: 'Orange',
        color: 'Orange'
    },
    {
        name: 'Banana',
        color: 'Yellow'
    },
    {
        name: 'Strawberry',
        color: 'Red'
    },
    {
        name: 'Grapes',
        color: 'Purple'
    }
])
</script>

<style scoped></style>