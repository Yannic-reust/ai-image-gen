<script lang="ts">
//@ts-ignore
import FooterComponent from "./Components/Footer/FooterComponent.vue";
export default {
  components: {
    FooterComponent,
  },
};
</script>

<template>
  <div>
    <router-view></router-view>
    <div class="margin-top-5">
      <FooterComponent></FooterComponent>
    </div>
  </div>
</template>

<style src="./app.scss"></style>
