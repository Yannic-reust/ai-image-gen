<template>
  <div id="contentPreview">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6 margin-top-2 ">
          <div class="red"></div>
          <!-- <img
            src="../../assets/components/contentPreview/sword.png"
            alt="Pixel Art Camping mon shine"
            class="width-100"
          /> -->
        </div>
        <div class="col-xs-12 col-md-6 margin-top-2 flex column">
          <div class="blue "></div>
          <div class="blue margin-top-2 "></div>
          <!-- <img
            src="../../assets/components/contentPreview/earth.png"
            alt="Pixel Art Camping mon shine"
            class="width-100"
          /> -->
          <!-- <img
            src="../../assets/components/contentPreview/mountains.png"
            alt="Pixel Art Camping mon shine"
            class="width-100 margin-top-4"
          /> -->
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 margin-top-2">
          <div class="green"></div>
          <!-- <img
            src="../../assets/components/contentPreview/camping.png"
            alt="Pixel Art Camping mon shine"
            class="width-100"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useStore } from "vuex";
export default {
  name: "ContentPreview",
  data() {
    return {
      searchText: "",
      store: useStore(),
    };
  },

  methods: {
    emitValue() {
      this.store.dispatch("submitSearch", this.searchText);
    },
  },
};
</script>

<style scoped src="./ContentPreview.scss"></style>
