<template>
  <nav class="navbar header" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item logo" to="/" @click.native="mobileMenuActive = false">
        dnlnrs
      </nuxt-link>
      <div :class="`navbar-burger ${mobileMenuActive ? 'is-active' : ''}`" @click="toggleMobileMenu">
        <span/>
        <span/>
        <span/>
      </div>
    </div>
    <div :class="`navbar-menu ${mobileMenuActive ? 'is-active' : ''}`">
      <div class="navbar-end">
        <nuxt-link class="navbar-item" to="/who-am-i" @click.native="mobileMenuActive = false">
          <span class="icon">
            <i class="las la-user"></i>
          </span>
          <span>Who am I</span>
        </nuxt-link>
        <a class="navbar-item" href="https://drive.google.com/file/d/19KGcsqEoaJAqgnSmGSzksLA4xhSLTrZ_/view?usp=sharing" target="_blank">
          <span class="icon">
            <i class="las la-file-pdf"></i>
          </span>
          <span>Résumé</span>
        </a>
        <div class="navbar-item inactive">
          Stuff I found online
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    mobileMenuActive: false
  }),
  methods: {
    toggleMobileMenu () {
      this.mobileMenuActive = !this.mobileMenuActive
    }
  }
}
</script>

<style lang="stylus" scoped>
.logo
  font-family 'Fonarto', sans-serif
  font-size 25px
.inactive
  opacity .5
.nuxt-link-active
  color: #008080;
.navbar-item
  i
    font-size: 1.2rem
</style>