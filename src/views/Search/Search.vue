<template>
  <div id="search" class="bg height-100vh">
    <div class="width-90 padding-top-5 margin-bottom-5" style="margin-left: 5%">
      <div class="row width-100 height-10vh">
        <div class="col-xs-12">
          <div class="bg-boxes radius-16">
            <p class="margin-bottom-2">Edit the detailed description</p>
            <input
              type="text"
              class="input-text"
              v-model="store.state.searchText"
            />
            <img
              src="../../assets/components/loader.gif"
              alt="loading icon"
              class="loadingIcon"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="width-90 margin-top-5" style="margin-left: 5%">
      <div class="row width-100 margin-top-2">
        <div class="col-xs-12 col-md-9">
          <div class="padding-top-5 flex-center bg-boxes radius-16">
            <div class="width-100 height-70vh">
              <p>asdasd</p>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-3">
          <div class="padding-top-5 bg-boxes radius-16">
            <div class="width-100 height-70vh">
              <p>asdasd</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
