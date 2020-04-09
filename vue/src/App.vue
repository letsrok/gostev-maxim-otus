<template>
  <div id="app">
    <HomePage @btnPress="gameStart" v-if="!gameBegin"/>
    <Game @btnPress="gameStart" v-else/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import Game from './components/Game.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    Game
  },
  data() {
    return {
      gameBegin: true
    }
  },
  methods: {
    gameStart() {
      this.gameBegin = !this.gameBegin
    }
  }
  
}
</script>

<style>

</style>
