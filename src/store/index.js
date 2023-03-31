import { createStore } from "vuex";

const store = createStore({
  state: {
    searchText: "",
  },
  mutations: {
    setSearchText(state, payload) {
      state.searchText = payload;
      console.log(payload);
    },
  },
  actions: {
    submitSearch(context, text) {
      context.commit("setSearchText", text);
    },
  },
});

export default store;
