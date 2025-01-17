<template>
    <div class="card">
        <h3>
            Artículo 
        </h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit velit molestias sequi distinctio non? Nostrum dicta mollitia, provident voluptatum ut pariatur ducimus, ex similique cupiditate laudantium voluptates, nesciunt sit quis?
        </p>
        <PostButton />    
    </div>
</template>

<script lang="ts" setup>
    import PostButton from './PostButton.vue'
</script>

<style scoped>
    .card {
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        column-gap: 5rem;
        color: black;
    }
</style>