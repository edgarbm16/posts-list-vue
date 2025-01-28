<template>
    <div>
        <h1>
            Lista de Posts
        </h1>
        <ul>
            <!-- Usando setup normal -->
            <!-- <li v-for="post in posts" :key="post.id">
                {{ post.title }}
            </li> -->
            <!-- Usando Option API -->
            <!-- <li v-for="post in posts.value" v-bind:key="post.id">
                {{ post.title }}
            </li> -->
            <!-- Usando Composition API -->
            <li v-for="post in posts" :key="post.id">
                {{ post.title }}
            </li>
        </ul>
    </div>
</template>

<!-- Usando setup normal -->
<!-- <script lang="ts">
    import { defineComponent, onMounted } from 'vue';
    import PostService from '@/services/PostService';

    export default defineComponent({
        name: 'PostsList',
        setup(){
            const service = new PostService()
            const posts = service.getPosts()
            onMounted(async() => {
                await service.fetchAll()
            });

            return {posts}
        }
    });
</script> -->

<!-- Usando Option API -->
<!-- <script lang="ts">
    import PostService from '@/services/PostService';
    import { defineComponent, onMounted } from 'vue';

    export default defineComponent({
        name: 'PostsList',
        data(){
            const service = new PostService()
            const posts = service.getPosts()
            return {posts, service}
        },
        async mounted() {
            await this.service.fetchAll()
        }
    })
</script> -->

<!-- Usando Composition API -->
<script lang="ts" setup>
    import { defineComponent, onMounted } from 'vue';
    import PostService from '@/services/PostService';

    const service = new PostService()
    const posts = service.getPosts()
    
    onMounted(async() => {
        await service.fetchAll()
    });
</script>

<style scoped></style>