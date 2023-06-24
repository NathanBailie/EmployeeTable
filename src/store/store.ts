import Vue from 'vue';
import Vuex from 'vuex';
import { employees } from "./employees";
import { returnState } from './state';
import { mutations } from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return returnState(employees)
  },
  mutations: mutations,
})

export default store;