<template>
  <nav class="flex flex-wrap items-center justify-between h-16">
    <div class="brand">
      <nuxt-link class="logo text-3xl text-primary pl-3" to="/" @click.native="mobileMenuActive = false">
        dnlnrs
      </nuxt-link>
    </div>
    <div class="menu flex flex-row pr-3 space-x-4">
      <div>
        <nuxt-link class="hover:bg-coolGray-200 hover:text-primary py-3 px-2 rounded-lg font-light" to="/who-am-i" @click.native="mobileMenuActive = false">
          <span class="icon">
            <i class="las la-user"></i>
          </span>
          <span>Who am I</span>
        </nuxt-link>
      </div>
      <div>
        <a class="hover:bg-coolGray-200 hover:text-primary py-3 px-2 rounded-lg font-light" href="https://drive.google.com/file/d/19KGcsqEoaJAqgnSmGSzksLA4xhSLTrZ_/view?usp=sharing" target="_blank">
          <span class="icon">
            <i class="las la-file-pdf"></i>
          </span>
          <span>Résumé</span>
        </a>
      </div>
      <div>
        <nuxt-link class="hover:bg-coolGray-200 hover:text-primary py-3 px-2 rounded-lg font-light" to="/snippets" @click.native="mobileMenuActive = false">
          <span class="icon">
            <i class="las la-code"></i>
          </span>
          <span>Snippets</span>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link class="hover:bg-coolGray-200 hover:text-primary py-3 px-2 rounded-lg font-light" to="/blog" @click.native="mobileMenuActive = false">
          <span class="icon">
            <i class="las la-newspaper"></i>
          </span>
          <span>Blog</span>
        </nuxt-link>
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
</style>
