<template>
  <div id="titleBackground">
    <div class="background">
      <div class="container input">
        <!-- <h1>{{ store.state }}</h1> -->
        <h1 class=" text-d2 margin-left-20">
          Super Duper Name <br />
          for Website
        </h1>
        <form
          @submit.prevent="emitValue"
          class="margin-top-4 width-60 margin-left-20"
          ref="form"
        >
          <input
            type="text"
            class="input-text width-100"
            v-model="searchText"
            placeholder="person in a spacesuit"
          />
          <button type="submit" class="transparent">
            <img
              src="../../assets/components/send.png"
              alt="send icon"
              class="icon"
            />
          </button>
        </form>
        <!-- <a href="/detailSearch">Details Search</a> -->
      </div>
    </div>
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
      this.store.dispatch("submitSearch", this.searchText);
    },
  },
};
</script>

<style scoped src="./TitleBackground.scss"></style>
