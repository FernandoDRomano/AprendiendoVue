<template>
    <div>
        <h3>Listado de Posts ({{ cantidadPosts }})</h3>
        <Post 
            v-for="post in posts" 
            :key="post.id"
            :post="post"
            >
        </Post>
    </div>
</template>

<script>
    import Post from '@/components/Post.vue'
    import PostsService from '../services/PostsService.js'

    export default {
        name: 'Posts',
        created() {
            PostsService.get()
                .then(posts => this.posts = posts.data)
                .catch( error => console.error(error))
        },
        data() {
            return {
                posts: []
            }
        },
        computed: {
            cantidadPosts(){
                return this.posts.length
            }
        },
        components: {
            Post
        }
    }
</script>