<template>
  <div id="Home">
    <TitleBackground></TitleBackground>
    <div class="margin-top-5 margin-bottom-5">
      <ContentPreview></ContentPreview>
    </div>
  </div>
</template>
<script lang="ts">
import ContentPreview from "../../components/ContentPreview/ContentPreview.vue";
import TitleBackground from "../../components/TitleBackground/TitleBackground.vue";
export default {
  name: "Home",
  components: {
    TitleBackground,
    ContentPreview,
  },
  setup() {},

  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped src="./Home.scss"></style>
