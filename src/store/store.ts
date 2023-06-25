import Vue from 'vue';
import Vuex from 'vuex';
import { employees } from "./employees";
import { returnState } from './state';
import { mutations } from './mutations';
import { State } from '@/interfaces/interfaces';

Vue.use(Vuex);

const store = new Vuex.Store({
  state(): State {
    return returnState(employees);
  },
  mutations: mutations,
})

export default store;