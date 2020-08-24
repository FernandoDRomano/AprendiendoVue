<template>
    <article>
        <h4>{{ post.title }}</h4>
        <p>{{ post.body }}</p>
    </article>
</template>

<script>
    export default {
        name: 'Post',
        props: ['post']
    }
</script>

<style lang="scss" scoped>
    article{
        border: 1px solid grey;
        padding: 1rem 2rem;
        margin: .5rem;

        h4{
            color: brown;
            font-size: 1.2rem;
        }

        p{
            font-size: .8rem;
            color: darkslateblue;
        }
    }
</style>