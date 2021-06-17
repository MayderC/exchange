<!-- Template build using Tailwind  -->
<template>
  <header class="shadow">
    <nav>
      <nav
        class="flex items-center justify-between flex-wrap bg-yellow-500 p-6"
      >
        <div
          class="
            flex
            items-center
            justify-between
            flex-shrink-0
            text-white
            mr-6
          "
        >
          <div class="icon"><ex-icon></ex-icon></div>
          <span
            ><router-link to="/" class="font-semibold text-xl tracking-tight"
              >Exchange</router-link
            ></span
          >
        </div>
        <ex-menu></ex-menu>
        <div
          class="
            hidden
            sm:block
            w-full
            blok
            flex-grow
            lg:flex lg:items-center lg:wauto
          "
        >
          <div class="text-sm lg:flex-grow"></div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<!-- Template/component styles -->

<style scoped>
header {
  width: 100%;
}

.icon {
  margin-right: 15px;
}

span {
  text-shadow: 7px 7px 15px rgba(0, 0, 0, 0.5);
}
</style>

<!-- component js -->

<script>
import exMenu from "@/components/exMenu";
import exIcon from "./exIcon.vue";
import ExMenu from "./exMenu.vue";
export default {
  name: "exchange-header",
  components: {
    exIcon,
    exMenu,
    ExMenu,
  },
};
</script>
