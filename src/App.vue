<template>
  <main id="app">
    <exchange-header></exchange-header>
    <div>
      <router-view
        class="container px-5 sm:px-20 py-20 mt-15 flex justify-center"
      ></router-view>
    </div>
  </main>
</template>

<!--
******************************
javaScript y export principal
******************************
-->
<script>
import exchangeHeader from "@/components/exchangeHeader.vue";
export default {
  name: "App",
  components: {
    exchangeHeader,
  },

  methods: {},
};
</script>

<!-- 
**********************
Style css App
**********************
-->
<style scoped>
div {
  display: flex;
  justify-content: center;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
