import { ScoreCalc } from '../../../src/score-calc'

describe('ScoreCalc.js', () => {
  it('should calculate min score correctly', () => {
    const s = new ScoreCalc();
    expect(s.getScore()).to.equal(-7);
  });

  it('should calculate score with free cells correctly', () => {
    const s = new ScoreCalc();
    s.freecells = 4;
    expect(s.getScore()).to.equal(-11);
  });

  it('should calculate score with fields correctly', () => {
    const s = new ScoreCalc();
    s.fields = 3;
    expect(s.getScore()).to.equal(-4);
  });

  it('should calculate score with grazing correctly', () => {
    const s = new ScoreCalc();
    s.grazing = 3;
    expect(s.getScore()).to.equal(-3);
  });

  it('should calculate score with grain correctly', () => {
    const s = new ScoreCalc();
    s.grain = 2;
    expect(s.getScore()).to.equal(-5);
  });

  it('should calculate score with vegetables correctly', () => {
    const s = new ScoreCalc();
    s.vegetables = 3;
    expect(s.getScore()).to.equal(-3);
  });

  it('should calculate score with sheeps correctly', () => {
    const s = new ScoreCalc();
    s.sheep = 3;
    expect(s.getScore()).to.equal(-5);
  });

  it('should calculate score with pigs correctly', () => {
    const s = new ScoreCalc();
    s.pigs = 5;
    expect(s.getScore()).to.equal(-3);
  });

  it('should calculate score with cows correctly', () => {
    const s = new ScoreCalc();
    s.cows = 5;
    expect(s.getScore()).to.equal(-3);
  });

  it('should calculate max score with clay rooms correctly', () => {
    const s = new ScoreCalc();
    s.fields = 10;
    s.grazing = 10;
    s.grain = 10;
    s.vegetables = 6;
    s.sheep = 10;
    s.pigs = 10;
    s.cows = 10;

    s.freecells = 0;
    s.cowsheds = 4;
    s.clayrooms = 5;
    s.stonerooms = 0;
    s.workers = 5;

    s.improvements = 5;
    s.bonus = 5;

    expect(s.getScore()).to.equal(62);
  });

  it('should calculate max score with stone rooms correctly', () => {
    const s = new ScoreCalc();
    s.fields = 10;
    s.grazing = 10;
    s.grain = 10;
    s.vegetables = 6;
    s.sheep = 10;
    s.pigs = 10;
    s.cows = 10;

    s.freecells = 0;
    s.cowsheds = 4;
    s.clayrooms = 0;
    s.stonerooms = 5;
    s.workers = 5;

    s.improvements = 4;
    s.bonus = 2;

    expect(s.getScore()).to.equal(63);
  });
});
