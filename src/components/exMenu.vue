<template>
  <div class="nav">
    <ul class="nav__list">
      <router-link to="/">
        <li class="nav__list__item">
          <p>Home</p>
          <div class="nav__list__anim"></div>
        </li>
      </router-link>

      <router-link to="about">
        <li class="nav__list__item">
          <p>About</p>
          <div class="nav__list__anim"></div>
        </li>
      </router-link>

      <li class="nav__list__item">
        <a target="_blank" href="https://github.com/MayderC/exchange">Repo</a>
        <div class="nav__list__anim"></div>
      </li>

      <li class="nav__list__item">
        <a target="_blank" href="https://mayder.codes/">@MayderC</a>
        <div class="nav__list__anim"></div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
p {
  width: 100%;
  height: 100%;
}

.nav__list__anim {
  position: absolute;
  width: 0%;
  bottom: 0;
  height: 3px;
  background-color: #fff;
  transition: width 0.3s;
}
.nav__list__item:hover .nav__list__anim {
  width: 90%;
}

@keyframes expand {
  from {
    width: 0;
  }
  to {
    width: 90%;
  }
}

.nav {
  height: 50px;
}

ul {
  display: flex;
  padding: 0;
  margin: 0;
  height: 100%;
}

.nav__list__item {
  color: white;
  display: flex;
  align-items: center;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  position: relative;
}

.nav__list__item:hover {
  /*transform: translateY(-5px);*/
  cursor: pointer;
}
</style>

<script>
export default {
  name: "exMenu",
};
</script>
