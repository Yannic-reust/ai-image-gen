<template>
  <div id="Search">
    <h1>Search</h1>
    <h2>{{ store.state }}</h2>

    <input type="text" class="input-text" />
  </div>
</template>
<script lang="ts">
import { useStore } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      store: useStore(),
    };
  },

  methods: {},
  created() {
    console.log(this.store.state.searchText);
  },
};
</script>

<style scoped src="./Search.scss"></style>
