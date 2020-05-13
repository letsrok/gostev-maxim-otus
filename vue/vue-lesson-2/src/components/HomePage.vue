<template>
  <b-container class="homeform">
    <b-row align-h="center">
      <b-col sm='6'>
        <h1>Привет</h1>
        <p>Добро пожаловать на 25 тренировочный день</p>
        <p v-if="gameResults.length > 0">
          Ваш последний результат
          {{gameResults[gameResults.length -1].right}} из
          {{gameResults[gameResults.length -1].res}}
        </p>
        <p v-else>Вы зашли первый раз</p>
        <h3>Настройки</h3>
        <b-form @submit.prevent="() => startGame()">
          <br>
          <b-form-input
             @change="(e) => changeGameLength(e)"
             type="range"
             min="1"
             max="15"
             :value="time"
          ></b-form-input>
          <p>Длительность {{time}} минут</p>
          <br>
          <b-form-input
             @change="(e) => changeGameDifficulty(e)"
             type="range"
             min="1"
             max="10"
             :value="difficulty"
          ></b-form-input>
          <p>Сложность: {{difficulty}}</p>
          <br>
          <b-form-checkbox-group
            @change="(e) => ChangeSelectedTypes(e)"
            :options="types"
            class="mb-3"
            value-field="value"
            text-field="text"
            disabled-field="notEnabled"
            stacked
          ></b-form-checkbox-group>
          <b-button
             type="submit"
             variant="primary form-send"
             :disabled="selectedTypes.length < 1"
             >Начать!
          </b-button>
        </b-form>  
      </b-col>
    </b-row>
  </b-container>
  
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import {store} from '../store'
export default {
  name: 'HomePage',
  store,
  computed: {
    ...mapGetters([
      'time',
      'difficulty',
      'types',
      'selectedTypes',
      'gameResults'
    ]),
  },

  methods: {
    ...mapActions([
        'changeGameDifficulty',
        'changeGameLength',
        'ChangeSelectedTypes',
        'startGame'

    ]),
  }
}
</script>

<style>
  .homeform {
    margin-top: 20px;
  }
  .form-send {
    margin: 25px auto 0 ;
  }
</style>
