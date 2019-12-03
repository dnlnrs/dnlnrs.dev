<template>
  <section class="hero is-fullheight">
    <Navbar />
    <div class="hero-body">
      <div class="container is-fluid">
        <nuxt />
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '~/components/navbar'

export default {
  components: {
    Navbar
  }
}
</script>


