<template>
  <div class="score">
    <h1>Подсчет очков Агриколы</h1>
    <h2>Игрок 1: {{ total1 }}</h2>
    <h2>Игрок 2: {{ total2 }}</h2>

    <table>
      <thead>
      <tr>
        <th></th>
        <th>Игрок 1</th>
        <th>Игрок 2</th>
      </tr>
      </thead>
      <tbody>

      <tr>
        <td class="score__label">Поля</td>
        <td><input type="number" v-model="fields1"></td>
        <td><input type="number" v-model="fields2"></td>
      </tr>

      <tr>
        <td class="score__label">Выпасы</td>
        <td><input type="number" v-model="grazing1"></td>
        <td><input type="number" v-model="grazing2"></td>
      </tr>

      <tr>
        <td class="score__label">Зерно</td>
        <td><input type="number" v-model="grain1"></td>
        <td><input type="number" v-model="grain2"></td>
      </tr>

      <tr>
        <td class="score__label">Овощи</td>
        <td><input type="number" v-model="vegetables1"></td>
        <td><input type="number" v-model="vegetables2"></td>
      </tr>

      <tr>
        <td class="score__label">Овцы</td>
        <td><input type="number" v-model="sheep1"></td>
        <td><input type="number" v-model="sheep2"></td>
      </tr>

      <tr>
        <td class="score__label">Свиньи</td>
        <td><input type="number" v-model="pigs1"></td>
        <td><input type="number" v-model="pigs2"></td>
      </tr>

      <tr>
        <td class="score__label">Коровы</td>
        <td><input type="number" v-model="cows1"></td>
        <td><input type="number" v-model="cows2"></td>
      </tr>

      <tr>
        <td class="score__label">Свободные ячейки</td>
        <td><input type="number" v-model="freecells1"></td>
        <td><input type="number" v-model="freecells2"></td>
      </tr>

      <tr>
        <td class="score__label">Огороженный хлева</td>
        <td><input type="number" v-model="cowsheds1"></td>
        <td><input type="number" v-model="cowsheds2"></td>
      </tr>

      <tr>
        <td class="score__label">Комнаты в мазанке</td>
        <td><input type="number" v-model="clayrooms1"></td>
        <td><input type="number" v-model="clayrooms2"></td>
      </tr>

      <tr>
        <td class="score__label">Комнаты в доме</td>
        <td><input type="number" v-model="stonerooms1"></td>
        <td><input type="number" v-model="stonerooms2"></td>
      </tr>

      <tr>
        <td class="score__label">Родичи</td>
        <td><input type="number" v-model="workers1"></td>
        <td><input type="number" v-model="workers2"></td>
      </tr>

      <tr>
        <td class="score__label">Улучшения</td>
        <td><input type="number" v-model="improvements1"></td>
        <td><input type="number" v-model="improvements2"></td>
      </tr>

      <tr>
        <td class="score__label">Бонусы</td>
        <td><input type="number" v-model="bonus1"></td>
        <td><input type="number" v-model="bonus2"></td>
      </tr>

      <tr>
        <td colspan="3">
          <button v-on:click="calculate()">Подсчет</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { ScoreCalc } from '../score-calc';

  export default {
    name: 'score',
    data () {
      return {
        total1: 0,
        total2: 0,
        fields1: 0,
        fields2: 0,
        grazing1: 0,
        grazing2: 0,
        grain1: 0,
        grain2: 0,
        vegetables1: 0,
        vegetables2: 0,
        sheep1: 0,
        sheep2: 0,
        pigs1: 0,
        pigs2: 0,
        cows1: 0,
        cows2: 0,
        freecells1: 0,
        freecells2: 0,
        cowsheds1: 0,
        cowsheds2: 0,
        clayrooms1: 0,
        clayrooms2: 0,
        stonerooms1: 0,
        stonerooms2: 0,
        workers1: 0,
        workers2: 0,
        improvements1: 0,
        improvements2: 0,
        bonus1: 0,
        bonus2: 0
      }
    },
    methods: {
      calculate: function () {
        const score1 = new ScoreCalc();
        score1.fields = parseInt(this.fields1, 10);
        score1.grazing = parseInt(this.grazing1, 10);
        score1.grain = parseInt(this.grain1, 10);
        score1.vegetables = parseInt(this.vegetables1, 10);

        score1.sheep = parseInt(this.sheep1, 10);
        score1.pigs = parseInt(this.pigs1, 10);
        score1.cows = parseInt(this.cows1, 10);

        score1.freecells = parseInt(this.freecells1, 10);
        score1.cowsheds = parseInt(this.cowsheds1, 10);
        score1.clayrooms = parseInt(this.clayrooms1, 10);
        score1.stonerooms = parseInt(this.stonerooms1, 10);
        score1.workers = parseInt(this.workers1, 10);

        score1.improvements = parseInt(this.improvements1, 10);
        score1.bonus = parseInt(this.bonus1, 10);
        this.total1 = score1.getScore();

        const score2 = new ScoreCalc();
        score2.fields = parseInt(this.fields2, 10);
        score2.grazing = parseInt(this.grazing2, 10);
        score2.grain = parseInt(this.grain2, 10);
        score2.vegetables = parseInt(this.vegetables2, 10);

        score2.sheep = parseInt(this.sheep2, 10);
        score2.pigs = parseInt(this.pigs2, 10);
        score2.cows = parseInt(this.cows2, 10);

        score2.freecells = parseInt(this.freecells2, 10);
        score2.cowsheds = parseInt(this.cowsheds2, 10);
        score2.clayrooms = parseInt(this.clayrooms2, 10);
        score2.stonerooms = parseInt(this.stonerooms2, 10);
        score2.workers = parseInt(this.workers2, 10);

        score2.improvements = parseInt(this.improvements2, 10);
        score2.bonus = parseInt(this.bonus2, 10);
        this.total2 = score2.getScore();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  table {
    margin: 0 auto;
  }

  .score__label {
    text-align: right;
    padding-right: 1rem;
  }

  input {
    width: 5rem;
    height: 3rem;
    text-align: center;
    font-size: 2rem;
  }

  button {
    width: 100%;
    height: 5rem;
    margin-top: 0.5rem;
    background-color: #006b0b;
    color: white;
    border: 0;
    font-size: 2rem;
  }
</style>
