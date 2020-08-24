<template>
  <section>
    <Logo></Logo>
    <div class="about">
      <h1>Posts traidos usando Service</h1>
      <Posts></Posts>
    </div>
  </section>
</template>

<script>

import Logo from '@/components/Logo.vue'
import Posts from '@/components/Posts.vue'

export default {
  components: {
    Logo,
    Posts
  }
}

</script>
