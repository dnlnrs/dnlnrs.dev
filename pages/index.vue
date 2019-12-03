<template>
  <div class="columns is-vcentered">
    <div class="column is-6 has-text-centered">
      <figure class="image is-128x128">
        <img class="is-rounded" src="~/assets/images/avatar.png">
      </figure>
      <p class="is-size-5">Hello! I'm <strong>Daniele</strong>, nice to meet you!</p>
      <p class="is-size-5">I'm a <em><strong>Full Stack Web Developer</strong></em> currently working as <strong><em>CTO</em></strong> @</p>
      <a href="https://www.bloovery.com" target="_blank"><img class="current-company-logo" src="~/assets/images/logo-bloovery.png"></a>
    </div>
    <div class="column is-6 is-hidden-mobile"></div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
  figure.image
    margin 0 auto
    margin-bottom 20px
  .current-company-logo
    padding-top 10px
    max-width 12rem
</style>
