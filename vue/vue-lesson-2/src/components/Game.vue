<template>
  <b-container class="game">
    <b-row align-h="center">
      <b-col md="8">
        <div class="game-top">
          <b-button
            @click.prevent="manualEndGame"
            >X Отмена
          </b-button>
          <div class="game-timer">
            {{timer | timeView}}
          </div>
        </div>
        <div class="game-body">
          <div class="game-exercise">
            <b-form-input readonly :value="num1">

            </b-form-input>
            <span class="game-mark">{{mark}}</span>
            <b-form-input
                v-model.number="input"
                ref="gameinput"
            >
            </b-form-input>
            <div class="game-total">= {{total}}</div>
          </div>
        </div>
        <div class="game-res" v-if="isHelp">
          <p>Правильный ответ: '{{num1}} {{mark}} {{num2}} = {{total}}'</p>
          <button
            @click="continueGame"
          >
          Продолжить</button>
        </div>
        <div class="game-control">
          <div class="game-numbers">
            <button
              class="game-btn"
              v-for="(number, index) in [1,2,3,4,5,6,7,8,9,0]"
              :key="index"
              @click="changeInputValue(number)"
            >
              {{number}}
            </button>
          </div>
          <div class="game-nav">
            <button class="game-btn" @click="() => clearInput()">C</button>
            <button class="game-btn" @click="() => this.isHelp = true">?</button>
            <button class="game-btn" @click="checkValues">=</button>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import {getFields} from '../functions/generateInputs'
import {store} from '../store'

export default {
  name: 'Game',
  store,
  data: function() {
    return {
      timer: 1,
      input: '',
      num1: '',
      num2: '',
      mark: '',
      total: '',
      isHelp: false
    }
  },

  mounted: function() {
    this.timer = this.time*60
    this.timerDown();
    this.getNumbers();
  },

  computed: {
    ...mapGetters([
        'time',
        'difficulty',
        'selectedTypes'
    ]),
  },

  methods: {
    ...mapActions([
      'endGame',
      'manualEndGame',
      'changeGameCount',
      'changeRightCount'

    ]),
    timerDown: function() {
      let ticker =  setInterval(() => {
        if ( this.timer == 0) {
          clearInterval(ticker)
          this.endGame();
        }
          this.timer-- ;
        }, 1000)
    },
    getNumbers: function() {
      let sett = getFields(this.difficulty, this.selectedTypes)

      this.num1 = sett.num1;
      this.num2 = sett.num2;
      this.mark = sett.mark
      this.total = eval(`${this.num1}${sett.mark}${this.num2}`);

    },
    checkValues: function() {
      this.changeGameCount();
      if(this.input == this.num2) {
        this.changeRightCount()
      }
      this.input = ''
      this.getNumbers()
    },
    continueGame: function() {
      this.isHelp = false
      this.input = ''
      this.getNumbers()
    },
    clearInput: function () {
      this.input = ''
    },
    changeInputValue: function (num) {
      this.input = this.input + num
    }
  },

  filters: {
    timeView: function(value) {
      let minutes = Math.floor(value/60).toString().padStart(2, 0);
      let seconds = (value % 60).toString().padStart(2, 0)
      return `${minutes}:${seconds}`
    }
  }
}
</script>

<style>
  .game {
    margin-top: 20px;
  }

  .game-top {
    display: flex;
    justify-content: space-between;
  }

  .game-timer {
    padding: 2px 0px;
    border-radius: 10px;
    width: 94px;
    background: #bee5eb;
    text-align: center;
    font-size: 25px;
  }

  .game-body {
    margin-top: 50px;
  }

  .game-exercise {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 15px;
    border-radius: 10px;
    background-color: #eee;
  }

  .game-exercise >* {
      margin: 0 10px;
      font-size: 20px;
  }
  .game-exercise input {
    width: 50px;
  }

  .game-numbers {
    display: flex;
    justify-content: center;
    width: 75%;
    flex-wrap: wrap;
    font-size: 30px;
  }

  .game-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 30px;
  }

  .game-btn {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-bottom: 30px;
    margin-right: 22%;
  }

  .game-control {
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
  }
</style>