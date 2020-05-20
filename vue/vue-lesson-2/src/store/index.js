import Vue from 'vue'
import Vuex from 'vuex'
import {mutations} from './mutations'
import {actions} from "./actions";

Vue.use(Vuex)

export  const store = new Vuex.Store({
  state: {
    day: 1,
    gameLength: 1,
    difficulty: 1,
    types: [
      {text: 'Суммирование', value: '+'},
      {text: 'Разность', value: '-'},
      {text: 'Умножение', value: '*'},
    ],
    selectedTypes: [],
    gameCount: 0,
    rightCount: 0,
    gameResults: [{res: 20, right: 5}]
  },

  getters: {
    time: state => state.gameLength,
    difficulty: state => state.difficulty,
    types: state => state.types,
    selectedTypes: state => state.selectedTypes,
    gameCount: state => state.gameCount,
    rightCount: state => state.rightCount,
    gameResults: state => state.gameResults
  },
  mutations,
  actions


})