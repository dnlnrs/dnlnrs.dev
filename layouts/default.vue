<template>
  <div>
    <Navbar />
    <section class="main-content">
      <nuxt />
    </section>
  </div>
</template>

<script>
import Navbar from '~/components/navbar'

export default {
  components: {
    Navbar
  }
}
</script>


