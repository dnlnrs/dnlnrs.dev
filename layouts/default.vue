<template>
  <section class="font-body">
    <Navbar :menu-items="menuItems" @toggleMobileMenu="toggleMobileMenu" />
    <MenuMobile :menu-items="menuItems" :is-active="mobileMenuActive" />
    <div class="container mx-auto h-screen -my-16">
      <nuxt />
    </div>
  </section>
</template>

<script>
import Navbar from '~/components/navbar'
import MenuMobile from '~/components/menu-mobile'

export default {
  components: {
    Navbar,
    MenuMobile
  },
  data: () => ({
    mobileMenuActive: false,
    menuItems: [
      { label: 'Who am I', url: '/who-am-i', icon: 'user' },
      { label: 'Résumé', url: 'https://drive.google.com/file/d/19KGcsqEoaJAqgnSmGSzksLA4xhSLTrZ_/view?usp=sharing', icon: 'file-pdf' },
      { label: 'Snippets', url: '/snippets', icon: 'code' },
      { label: 'Blog', url: '/blog', icon: 'newspaper' },
    ]
  }),
  methods: {
    toggleMobileMenu (flag) {
      this.mobileMenuActive = flag
    }
  }
}
</script>


