<template>
  <div id="DetailSearch">
    <h1>Details Search</h1>
    <h2>{{ store.state }}</h2>
  </div>
</template>
<script lang="ts">
import { useStore } from "vuex";
export default {
  name: "DetailSearch",

  data() {
    return {
      searchText: "",
      store: useStore(),
    };
  },

  methods: {},
};
</script>

<style scoped src="./DetailSearch.scss"></style>
