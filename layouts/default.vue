<template>
  <div>
    <nav
      class="navbar header is-fixed-top"
      role="navigation"
      aria-label="main navigation">
      <div class="navbar-brand">
        <a
          class="navbar-item logo"
          href="/">
          dnlrns
        </a>
        <div class="navbar-burger">
          <span/>
          <span/>
          <span/>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item inactive">
            Who am I
          </div>
          <a target="_blank" href="https://drive.google.com/open?id=0B3RKPTAd6l8OVWpaYW5KdjlmbVE" class="navbar-item">
            Résumé
          </a>
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
  data() {
    return {
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
</style>


