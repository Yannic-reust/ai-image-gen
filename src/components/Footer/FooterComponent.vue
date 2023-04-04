<template>
  <div id="footerComponent" class="width-100 bg-secondary">
    <p class="text-center padding-top-4 text-h3">Footer</p>
    <p class="text-center margin-top-4 padding-bottom-4 text-h3">
      &#169; SuperDuper Website 2023
    </p>
  </div>
</template>
<script lang="ts">
export default {
  name: "FooterComponent",
  data() {
    return {
      year: 2023,
    };
  },
  created() {
    var date = new Date();
    this.year = date.getFullYear();
  },
};
</script>

<style scoped src="./FooterComponent.scss"></style>
