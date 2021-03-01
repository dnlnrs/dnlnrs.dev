<template>
  <div class="flex flex-row flex-wrap items-center h-full">
    <div class="flex-grow">
      <div class="grid grid-flow-row place-content-center place-items-center">
        <div class="rounded block bg-local w-32 h-32 avatar bg-center bg-cover">
        </div>
        <div class="text-center text-xl">
          <p class="is-size-5">Hello! I'm <strong>Daniele</strong>, nice to meet you!</p>
          <p class="is-size-5">I'm a <em><strong>Full Stack Web Developer</strong></em> currently working as <strong><em>CTO</em></strong> @</p>
          <a href="https://www.bloovery.com" target="_blank">
            <img class="w-64" src="~/assets/images/logo-bloovery.png">
          </a>
        </div>
      </div>
    </div>
    <div class="flex-grow">
      <img width="70%" src="~/assets/images/programming_illustration.svg" alt="">
    </div>
  </div>
  <!-- <div class="columns is-vcentered">
    <div class="column is-6 has-text-centered">
      <figure class="image is-128x128">
        <img class="is-rounded" src="~/assets/images/avatar.png">
      </figure>
      <p class="is-size-5">Hello! I'm <strong>Daniele</strong>, nice to meet you!</p>
      <p class="is-size-5">I'm a <em><strong>Full Stack Web Developer</strong></em> currently working as <strong><em>CTO</em></strong> @</p>
      <a href="https://www.bloovery.com" target="_blank"><img class="current-company-logo" src="~/assets/images/logo-bloovery.png"></a>
    </div>
    <div class="column is-6 is-hidden-mobile has-text-centered">
      <img width="70%" src="~/assets/images/programming_illustration.svg" alt="">
    </div>
  </div> -->
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
  .avatar
    background-image: url("~assets/images/avatar.png")
</style>
