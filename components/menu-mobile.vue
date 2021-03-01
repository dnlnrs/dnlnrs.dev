
<template>
  <div class="menu-mobile-container transition-all ease-in-out absolute top-14 bg-primary shadow-inner h-full md:hidden flex rounded-r-lg flex-col" :class="{'w-10/12': isActive === true, 'w-0': isActive === false}">
    <div v-for="(item, index) of menuItems" :key="index" class="w-full text-xl pt-4 font-light">
      <nuxt-link class="text-white py-3 px-2 rounded-lg font-light" :to="item.url">
        <span class="icon">
          <i :class="`las la-${item.icon}`"></i>
        </span>
        <span>{{ item.label }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuMobile',
  props: {
    menuItems: {
      type: Array,
      default: () => ([])
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>
