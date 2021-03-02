
<template>
  <div class="menu-mobile-container transform transition-transform duration-150 absolute top-14 bottom-0 bg-primary w-10/12 shadow-inner h-full md:hidden flex rounded-r-lg flex-col" :class="{'translate-x': isActive === true, '-translate-x-full': isActive === false}">
    <ul class="pt-3 pl-3">
      <li v-for="(item, index) of menuItems" :key="index" class="flex items-center font-light text-white is-active">
        <nuxt-link class="text-white py-3 px-2 rounded-lg font-light" :to="item.url">
          <span class="icon">
            <i :class="`las la-${item.icon}`"></i>
          </span>
          <span>{{ item.label }}</span>
        </nuxt-link>
      </li>
    </ul>
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
