<template>
  <div id="search" class="bg">
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
                :class="{ hidden: imageURL }"
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
            <div class="width-100 height-70vh flex-center column">
              <img
                :class="{ hidden: !imageURL }"
                :alt="store.state.searchText"
                :src="imageURL"
              />
              <p v-if="errorTrue" class="errorText">
                There has been a Error please try again :(
              </p>
              <div
                class="width-90 flex margin-top-4"
                style="justify-content: flex-end"
              >
                <button class="button-secondary button" @click="regenerate()">
                  Regenerate
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-3">
          <div class="padding-top-5 bg-boxes radius-16">
            <div class="width-100 height-70vh flex align-center column recent">
              <p class="accent-three text-h4">Recent:</p>
              <!-- <img src="" alt="" class="" /> -->
              <img 
              v-for="(recentImage, index) in recentImages" :key="index"
                :src="recentImage"
                alt="Your Image"
                class="width-90 margin-top-4"
              />
             
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
      errorTrue: false,
      imageURL: "",
      data: [useStore().state.searchText + ", pixelartstyle"],
      recentImages: [],
    };
  },

  methods: {
    async fetchImage() {
      console.log(JSON.stringify({
            data: [this.data[0]],
            temperatur:0.1,
          }))
      const response = await fetch(
        "https://hslu-di-reust-yannic.hf.space/run/predict",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            data: [this.data[0]],
          
          }),
        }
      ).then(async (response) => {
        if (response.status >= 400 && response.status < 600) {
          this.errorTrue = true;
        } else {
          const data = await response.json();

          this.imageURL = data.data[0];

          if (this.imageURL) {
            //@ts-ignore
            this.recentImages.push(this.imageURL);
          }
        }
      });
    },

    /*

const data = await response.json();


console.log(newStr)

*/

    /*async fetchImage() {
      await fetch(
        "https://hslu-di-reust-yannic.hf.space/run/predict",
        {
          headers: {
            Authorization: "Bearer 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",
          },
          method: "POST",
          body: JSON.stringify(this.data),
        }
      ).then(async (response) => {
        if (response.status >= 400 && response.status < 600) {
          this.errorTrue = true;
        } else {
          let blobUrl = URL.createObjectURL(await response.blob());
          this.imageURL = new URL(blobUrl, import.meta.url).href;
          if (this.imageURL) {
            //@ts-ignore
            this.recentImages.push(this.imageURL);
          }
        }
      });
    },*/
  },

  async created() {
    this.fetchImage();
  },
};
</script>

<style scoped src="./Search.scss"></style>
