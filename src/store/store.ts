import Vue from 'vue';
import Vuex from 'vuex';
import { employees } from "./employees";

Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      employees: employees

    }
  },
  mutations: {

  }
})

export default store;