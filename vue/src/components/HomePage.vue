<template>
  <b-container class="homeform">
    <b-row align-h="center">
      <b-col sm='6'>
        <h1>Привет</h1>
        <p>Добро пожаловать на {{day}} тренировочный день</p>
        <h3>Настройки</h3>
        <b-form @submit.prevent="$emit('btnPress')">
          <br>
          <b-form-input
             v-model="settings.testLength"
             type="range"
             min="1"
             max="15"
          ></b-form-input>
          <p>Длительность {{settings.testLength}} минут</p>
          <br>
          <b-form-input
             v-model="settings.difficulty"
             type="range"
             min="1"
             max="10"
          ></b-form-input>
          <p>Сложность: {{settings.difficulty}}</p>
          <br>
          <b-form-checkbox-group
            v-model="settings.selectedTypes"
            :options="settings.types"
            class="mb-3"
            value-field="value"
            text-field="text"
            disabled-field="notEnabled"
            stacked
          ></b-form-checkbox-group>
          <div class="mt-3">Selected: <strong>{{ settings.selectedTypes }}</strong></div>
          <b-button
             type="submit"
             variant="primary form-send"
             :disabled="settings.selectedTypes.length < 1"
             >Начать!
          </b-button>
        </b-form>  
      </b-col>
    </b-row>
  </b-container>
  
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      day: 25,
      settings: {
        testLength: 1,
        difficulty: 1,
        types: [
          {text: 'Суммирование', value: '+'},
          {text: 'Разность', value: '-'},
          {text: 'Умножение', value: '*'},
          {text: 'Деление', value: '/'},
          {text: 'Возведение в степень', value: '^'}
        ],
        selectedTypes: []
      }
    }
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
