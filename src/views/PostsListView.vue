<template>
    <div class="container">
        <h1 class="h1 lead initialism" style="font-weight: 600; padding-bottom: 2rem; font-size: 2rem;">
            Lista de Posts
        </h1>
        <div>
            <ul class="row" style="row-gap: 2rem;">
                <!-- Usando setup normal -->
                <!-- <li v-for="post in posts" :key="post.id">
                    {{ post.title }}
                </li> -->
                <!-- Usando Option API -->
                <!-- <li v-for="post in posts.value" v-bind:key="post.id">
                    {{ post.title }}
                </li> -->
                <!-- Usando Composition API -->
                <li class="col" v-for="post in posts" :key="post.id" style="
                    list-style-type: none;
                    display: flex;
                    justify-content: center;
                ">
                    <div class="card" style="width: 20rem; height: 10rem;">
                        <div class="card-body" style="height: 100%;">
                            <div style="
                                height: 8rem;
                                display: flex;
                                justify-content: space-between;
                                flex-direction: column;
                            ">
                                <div>
                                    <h5 class="card-title">{{ post.title }}</h5>
                                    <p class="card-text"></p>
                                </div>
                                <router-link :to="{name: 'PostsDetail', params: {id: post.id}}" class="btn btn-primary">
                                    Ver post
                                </router-link>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
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

<style scoped lang="scss">
    h1 {
        color: $red;
    }
</style>