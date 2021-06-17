<template>
  <div class="about">
    <div class="about__title">
      <h2 class="text-6xl text-gray-700">Exchange</h2>
    </div>
    <div class="about__body">
      <p class="text-2xl text-center">
        App creada por mi persona con el framework Vuejs, consumiendo recursos
        de la Api de CoinCape. Con el proposito de aprender, siguiendo la clase
        de Platzi sobre vuejs.
      </p>
      <div class="about__body-end text-2xl underline text-blue-500">
        <a target="_blank" href="https://github.com/MayderC/exchange"
          >Repositorio</a
        >
        <a target="_blank" href="https://mayder.codes/">@MayderC</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style scoped>
.about {
  width: 100%;
  flex-direction: column;
  justify-content: start;
}

.about__title {
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about__body {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
}
.about__body-end {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 30px;
}
</style>
