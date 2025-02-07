<template>
  <div class="container" style="display: grid; row-gap: 2rem;">
        <div style="display: grid; row-gap: 2rem">
            <h1 style="font-size: 2rem; font-weight: 600;">
                {{ post.title }}
            </h1>
            <p>
                {{ post.content }}
            </p>
        </div>
        <router-link :to="{name: 'PostsList'}">Regresar</router-link>
  </div>
</template>

<script lang="ts" setup>
    import PostService from '@/services/PostService';
    import {onMounted} from 'vue'
    import {useRoute} from 'vue-router'

    const service = new PostService()
    const post = service.getPost()

    onMounted(async () => {
        const route = useRoute()
        let elm = route.params.id
        await service.fetchById(elm)    
    })
</script>