// Importamos las referencias de typescript
import {ref, Ref} from 'vue'
import IPost from '@/interfaces/IPost'

// Definimos las clase
class PostService {
    // Generamos el elemento
    private posts:Ref<Array<IPost>>
    private post:Ref<IPost>

    // Creamos el constructor con post vacio
    constructor() {
        this.posts = ref<Array<IPost>>([])
        this.post = ref<IPost>({})
    }

    // Solicitamos los datos del posts
    getPosts():Ref<Array<IPost>> {
        return this.posts
    }

    // Solicitamos los datos del post
    getPost():Ref<IPost> {
        return this.post
    }

    // Obtenemos los datos de los posts de la API. Usamos una función asyncrona e implementamos fetch.
    async fetchAll(): Promise<void> {
        try {
            const url = 'https://jsonplaceholder.org/posts'
            const response = await fetch(url)
            const json = await response.json()
            this.posts.value = await json
        } catch (error) {
            console.log(error);   
        }
    }

    // Obtenemos los datos de los post de la API. Usamos una función asyncrona e implementamos fetch.
    async fetchById(id: string | Array<string>): Promise<void> {
        try {
            const url = `https://jsonplaceholder.org/posts/${id}`
            const response = await fetch(url)
            const json = await response.json()
            this.post.value = await json
        } catch (error) {
            console.log(error);   
        }
    }

    
}

export default PostService