<template>
  <div id="search" class="bg height-100vh">
    <div class="width-90 padding-top-5 margin-bottom-5" style="margin-left: 5%">
      <div class="row width-100 height-10vh margin-top-5">
        <div class="col-xs-12">
          <div class="bg-boxes radius-16">
            <p class="padding-top-5 padding-left-4 accent-three text text-h4">
              Edit the detailed description
            </p>
            <div class="flex-center width-100 padding-left-2">
              <input
                type="text"
                class="input-text width-90 input"
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
    </div>
    <div class="width-90 margin-top-5" style="margin-left: 5%">
      <div class="row width-100 margin-top-2">
        <div class="col-xs-12 col-md-9">
          <div class="padding-top-5 flex-center bg-boxes radius-16">
            <div class="width-100 height-70vh">
              <img src="" alt="Your Image" class="" />
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-3">
          <div class="padding-top-5 bg-boxes radius-16">
            <div class="width-100 height-70vh">
              <p class="accent-three margin-left-4 text-h4">Recent:</p>
              <img src="" alt="" class="" />
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
