<template>
  <div>
    <nav class="flex flex-wrap items-center justify-between h-16 relative">
      <div class="brand w-full h-full pt-3 md:w-auto flex flex-row">
        <div class="menu-mobile-trigger visible md:invisible" @click="toggleMobileMenu()">
          <i class="las la-bars text-2xl pl-3 pt-1 pr-3 text-primary visible md:invisible cursor-pointer"></i>
        </div>
        <a class="logo text-3xl text-primary pl-5 md:pl-3 bg-white" href="/">
          dnlnrs
        </a>
      </div>
      <div class="menu flex flex-row pr-3 space-x-4 invisible md:visible">
        <div v-for="(item, index) of menuItems" :key="index">
          <nuxt-link class="hover:bg-coolGray-200 hover:text-primary py-3 px-2 rounded-lg font-light" :to="item.url">
            <span class="icon">
              <i :class="`las la-${item.icon}`"></i>
            </span>
            <span>{{ item.label }}</span>
          </nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      default: () => ([])
    }
  },
  data: () => ({
    mobileMenuActive: false,
  }),
  methods: {
    toggleMobileMenu () {
      this.mobileMenuActive = !this.mobileMenuActive
      this.$emit('toggleMobileMenu', this.mobileMenuActive)
    }
  }
}
</script>

<style lang="stylus" scoped>
.logo
  font-family 'Fonarto', sans-serif
</style>
