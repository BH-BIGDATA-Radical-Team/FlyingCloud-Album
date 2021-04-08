<template>
  <div id="nav">
    <button @click="getBtnActive($event)" class="button active-button">
      <router-link ondragstart="return false" to="/"> Home </router-link>
    </button>
    <button @click="getBtnActive($event)" class="button">
      <router-link ondragstart="return false" to="/about">Album</router-link>
    </button>
  </div>
  <router-view />
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getBtnActive: function (e) {
      let btns = document.querySelectorAll(".button");
      let targetBtn = e.target.textContent == btns[0].textContent ? 0 : 1;
      for (let i = 0; i < btns.length; i++) {
        btns[i].setAttribute("class", "button");
      }
      btns[targetBtn].setAttribute("class", "button active-button");
    },

  },
};
</script>