export const mutations = {
  CHANGE_GAME_DIFFICULTY (state, payload) {
    state.difficulty = payload
  },
  CHANGE_GAME_LENGTH (state, payload) {
    state.gameLength = payload
  },
  CHANGE_SELECTED_TYPES (state, payload) {
    state.selectedTypes = payload
  },
  CHANGE_GAME_COUNT (state) {
    state.gameCount++
  },
  RESET_GAME_COUNT (state) {
    state.gameCount = 0
  },
  CHANGE_RIGHT_COUNT (state) {
    state.rightCount++
  },
  RESET_RIGHT_COUNT (state) {
    state.rightCount = 0
  },
  START_GAME (state) {
    state.gameCount = 0,
    state.rightCount = 0
  },
  END_GAME (state) {
    state.difficulty = 1,
    state.time = 1,
    state.gameResults = [...state.gameResults, {res: state.gameCount, right: state.rightCount}]
  },
  MANUAL_END_GAME (state) {
    state.difficulty = 1,
    state.time = 1
  },
}