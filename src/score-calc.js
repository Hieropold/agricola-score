function ScoreCalc () {
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
    if (self.fields <= 1) {
      return -1;
    }
    if (self.fields >= 5) {
      return 4;
    }
    const map = {
      2: 1,
      3: 2,
      4: 3
    };
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

export { ScoreCalc };
