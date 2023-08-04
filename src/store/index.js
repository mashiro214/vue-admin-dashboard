import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// initial state

// check system color scheme
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  window.localStorage.setItem("isDarkMode", "true");
}

// 初始化state先判断用户是否已经设置模式
const userSelectedDarkMode = window.localStorage.getItem("isDarkMode") === true;

const state = {
  isDarkMode: userSelectedDarkMode,
};

// getters
const getters = {
  isDarkMode(state) {
    return state.isDarkMode;
  },
};

// mutations
const mutations = {
  toggleDarkMode(state) {
    state.isDarkMode = !state.isDarkMode;
    document.body.style.background = state.isDarkMode ? "#212c4f" : "#f0f3f5";
    // 把状态存入到local storage
    window.localStorage.setItem("isDarkMode", state.isDarkMode ? true : false);
  },
};

// actions
const actions = {
  // context refers to the VueX store
  triggerDarkMode(context) {
    context.commit("toggleDarkMode");
  },
};

export default new Vuex.Store({
  // initial state, group of data values
  state, //same as state: state,
  // group of functions to retrieve state
  getters,
  // group of functions to change the state
  mutations,
  // cause triggers for mutations to happen async
  actions,
  modules: {},
});
