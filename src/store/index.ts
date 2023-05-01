import { createStore } from "vuex";
import router from "../router";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],
  state: {
    searchText: "",
  },
  mutations: {
    setSearchText(state, payload) {
      state.searchText = payload;
    },
  },
  actions: {
    submitSearch(context, text) {
      context.commit("setSearchText", text);

      router.push("/Search");
    },
  },
});

export default store;
