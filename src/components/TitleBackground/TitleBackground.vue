<template>
  <div id="titleBackground">
    <div class="background"></div>
    <div class="container"></div>
    <h1>{{ store.state }}</h1>
    <form @submit.prevent="emitValue">
      <input type="text" class="input-text" v-model="searchText" />
      <button type="submit" class="button-secondary">Search</button>
    </form>
  </div>
</template>
<script lang="ts">
import { useStore } from "vuex";
export default {
  name: "TitleBackground",

  data() {
    return {
      searchText: "",
      store: useStore(),
    };
  },

  methods: {
    emitValue() {
      this.$emit("submitSearch", this.searchText);
      this.store.dispatch("submitSearch", this.searchText);
    },
  },
};
</script>

<style scoped src="./TitleBackground.scss"></style>
