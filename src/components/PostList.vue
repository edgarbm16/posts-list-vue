<template>
    <div class="container">
        <PostDetail v-for="elm in info" :key="elm.title" :title="elm.title" :content="elm.content"
        @sayHi="showAlert" />
    </div>
</template>

<script lang="ts" setup>
import PostDetail from './PostDetail.vue';

interface Post {
    title: string;
    content: string;
}

let info:Array<Post> = [
    {
        title: 'Post 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, ex vitae efficitur tincidunt, justo nunc ultricies neque, id lobortis felis lectus vel velit.',
    },
    {
        title: 'Post 2',
        content: ''
    },
    {
        title: 'Post 3',
        content: 'Ut at nunc vel neque tristique ullamcorper. Sed convallis, ipsum vel scelerisque cursus, felis velit imperdiet massa, vel bibendum risus lacus vel velit.',
    },
    {
        title: 'Post 4',
        content: 'Proin vel ex vel ex ultricies tristique. Nulla facilisi. Donec vel velit vel metus imperdiet viverra. Sed vitae velit vel arcu pellentesque feugiat.',
    },
    {
        title: 'Post 5',
        content: 'Integer dignissim diam vel ex euismod, non pellentesque neque consectetur. Donec facilisis, lectus vel consectetur congue, felis mauris posuere ex, id aliquet nunc felis nec nisi.',
    }
]

function showAlert(msg:string){
    alert(msg);
}
</script>

<style scoped>
.container {
    display: flex;
    gap: 10px;
}
</style>