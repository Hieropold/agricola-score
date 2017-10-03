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
        <td>Поля</td>
        <td><input v-model="fields1"></td>
        <td><input v-model="fields2"></td>
      </tr>

      <tr>
        <td>Выпасы</td>
        <td><input v-model="grazing1"></td>
        <td><input v-model="grazing2"></td>
      </tr>

      <tr>
        <td>Зерно</td>
        <td><input v-model="grain1"></td>
        <td><input v-model="grain2"></td>
      </tr>

      <tr>
        <td>Овощи</td>
        <td><input v-model="vegetables1"></td>
        <td><input v-model="vegetables2"></td>
      </tr>

      <tr>
        <td>Овцы</td>
        <td><input v-model="sheep1"></td>
        <td><input v-model="sheep2"></td>
      </tr>

      <tr>
        <td>Свиньи</td>
        <td><input v-model="pigs1"></td>
        <td><input v-model="pigs2"></td>
      </tr>

      <tr>
        <td>Коровы</td>
        <td><input v-model="cows1"></td>
        <td><input v-model="cows2"></td>
      </tr>

      <tr>
        <td>Свободные ячейки</td>
        <td><input v-model="freecells1"></td>
        <td><input v-model="freecells2"></td>
      </tr>

      <tr>
        <td>Огороженный хлева</td>
        <td><input v-model="cowsheds1"></td>
        <td><input v-model="cowsheds2"></td>
      </tr>

      <tr>
        <td>Комнаты в мазанке</td>
        <td><input v-model="clayrooms1"></td>
        <td><input v-model="clayrooms2"></td>
      </tr>

      <tr>
        <td>Комнаты в доме</td>
        <td><input v-model="stonerooms1"></td>
        <td><input v-model="stonerooms2"></td>
      </tr>

      <tr>
        <td>Родичи</td>
        <td><input v-model="workers1"></td>
        <td><input v-model="workers2"></td>
      </tr>

      <tr>
        <td>Улучшения</td>
        <td><input v-model="improvements1"></td>
        <td><input v-model="improvements2"></td>
      </tr>

      <tr>
        <td>Бонусы</td>
        <td><input v-model="bonus1"></td>
        <td><input v-model="bonus2"></td>
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
        const score1 = new Score();
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

        const score2 = new Score();
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

  function Score () {
    const self = this;

    self.fields = 0;
    self.grazing = 0;
    self.grain = 0;
    self.vegetables = 0;
    self.sheep = 0;
    self.pigs = 0;
    self.cows = 0;

    self.freecells = 0;
    self.cowsheds = 0;
    self.clayrooms = 0;
    self.stonerooms = 0;
    self.workers = 0;

    self.improvements = 0;
    self.bonus = 0;

    self.getScore = function () {
      return _fieldsScore() + _grazingScore() +
        _grainScore() + _vegetablesScore() +
        _sheepScore() + _pigsScore() + _cowsScore() +
        _freecellScore() +
        self.cowsheds + self.clayrooms + self.stonerooms * 2 + self.workers * 3 +
        self.improvements + self.bonus;
    };

    function _fieldsScore () {
      const map = {
        0: -1,
        1: -1,
        2: 1,
        3: 2,
        4: 3
      };

      if (!map[self.fields]) {
        return 4;
      }

      return map[self.fields];
    }

    function _grazingScore () {
      if (self.grazing <= 0) {
        return -1;
      }
      if (self.grazing >= 4) {
        return 4;
      }
      return self.grazing;
    }

    function _grainScore () {
      const map = {
        1: 1,
        2: 1,
        3: 1,
        4: 2,
        5: 2,
        6: 3,
        7: 3
      };

      if (self.grain <= 0) {
        return -1;
      }
      if (self.grain >= 8) {
        return 4;
      }
      return map[self.grain];
    }

    function _vegetablesScore () {
      if (self.vegetables <= 0) {
        return -1;
      }
      if (self.vegetables >= 4) {
        return 4;
      }
      return self.vegetables;
    }

    function _sheepScore () {
      if (self.sheep <= 0) {
        return -1;
      }
      if (self.sheep >= 8) {
        return 4;
      }

      const map = {
        1: 1,
        2: 1,
        3: 1,
        4: 2,
        5: 2,
        6: 3,
        7: 3
      };
      return map[self.sheep];
    }

    function _pigsScore () {
      if (self.pigs <= 0) {
        return -1;
      }
      if (self.pigs >= 7) {
        return 4;
      }

      const map = {
        1: 1,
        2: 1,
        3: 2,
        4: 2,
        5: 3,
        6: 3
      };
      return map[self.pigs];
    }

    function _cowsScore () {
      if (self.cows <= 0) {
        return -1;
      }
      if (self.cows >= 6) {
        return 4;
      }

      const map = {
        1: 1,
        2: 2,
        3: 2,
        4: 3,
        5: 3
      };
      return map[self.cows];
    }

    function _freecellScore () {
      return 0 - self.freecells;
    }

    return self;
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

  button {
    width: 100%;
    height: 3em;
    margin-top: 0.5em;
  }
</style>
