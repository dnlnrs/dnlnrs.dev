<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary is-fixed-top"
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
          <div class="navbar-item">
            Who am I
          </div>
          <div class="navbar-item">
            Résumé
          </div>
          <div class="navbar-item">
            Stuff I find online
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
  font-size 23px
</style>


