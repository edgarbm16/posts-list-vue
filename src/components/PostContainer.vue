<template>
    <div class="container">
        <PostCard/>
        <PostCard/>
        <PostCard/>
    </div>
</template>

<script lang="ts" setup>
import PostCard from './PostCard.vue';
</script>

<style scoped>
   .container{
     display: flex;
     justify-content: center;
     align-items: center;
     background-color: #f1f1f1;
     max-width: 100%;
     padding: 7rem;
     column-gap: 1rem;
   }
</style>