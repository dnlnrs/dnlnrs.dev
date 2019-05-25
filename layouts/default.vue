<template>
  <div>
    <nav
      class="navbar header is-fixed-top"
      role="navigation"
      aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item logo" to="/" @click.native="mobileMenuActive = false">
          dnlrns
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
            Who am I
          </nuxt-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Résumé
            </a>
            <div class="navbar-dropdown is-boxed">
              <a target="_blank" href="https://drive.google.com/open?id=0B3RKPTAd6l8OVWpaYW5KdjlmbVE" class="navbar-item">
                <span class="icon">
                  <i class="fas fa-file-pdf"></i>
                </span>
                <p>Italian</p>
              </a>
              <a target="_blank" class="navbar-item inactive">
                <span class="icon">
                  <i class="fas fa-file-pdf"></i>
                </span>
                <p>English</p>
              </a>
            </div>
          </div>  
          <div class="navbar-item inactive">
            Stuff I found online
          </div>
        </div>
      </div>
    </nav>
    <section class="main-content">
      <nuxt />
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        class: 'has-navbar-fixed-top'
      }
    }
  },
  data () {
    return {
      mobileMenuActive: false
    }
  },
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
</style>


