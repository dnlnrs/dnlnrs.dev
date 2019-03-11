<template>
  <div class="columns is-vcentered">
    <div class="column is-6 has-text-centered hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <figure class="image is-128x128">
            <img class="is-rounded" src="~/assets/images/avatar.png">
          </figure>
          <p class="is-size-5">Hello! I'm <strong>Daniele</strong>, nice to meet you!</p>
          <p class="is-size-5">I'm a <em>Full Stack Web Developer</em> currently working @</p>
          <a href="https://www.weroad.it" target="_blank"><img class="logo-wr" src="~/assets/images/logo-wr.svg"></a>
        </div>
      </div>
    </div>
    <div class="column is-6 with-bg is-hidden-mobile"></div>
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
section
  height 100vh
figure.image
  margin 0 auto
  margin-bottom 20px
.logo-wr
  padding-top: 10px
.with-bg
  background-image url("../assets/images/bg2.jpeg")
  background-position center center
  background-size cover
.column
  height 100vh
</style>
