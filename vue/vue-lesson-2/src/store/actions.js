import {router} from '../main'

export const actions = {
  changeGameDifficulty({commit}, payload) {
    commit('CHANGE_GAME_DIFFICULTY', payload)
  },
  changeGameLength({commit}, payload) {
    commit('CHANGE_GAME_LENGTH', payload)
  },
  ChangeSelectedTypes({commit}, payload) {
    commit('CHANGE_SELECTED_TYPES', payload)
  },
  changeGameCount({commit}) {
    commit('CHANGE_GAME_COUNT')
  },
  resetGameCount({commit}) {
    commit('RESET_GAME_COUNT')
  },
  changeRightCount({commit}) {
    commit('CHANGE_RIGHT_COUNT')
  },
  resetRightCount({commit}) {
    commit('RESET_RIGHT_COUNT')
  },
  startGame({commit}) {
    commit('START_GAME')
    router.push({path: '/Game'})
  },
  endGame({commit}) {
    commit('END_GAME')
    router.push({path: '/'})
  },
  manualEndGame({commit}) {
    commit('MANUAL_END_GAME')
    router.push({path: '/'})
  }
}