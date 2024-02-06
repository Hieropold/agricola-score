export interface Score {
    grain: number;
    vegetables: number;
    fields: number;
    pastures: number;
    sheep: number;
    pigs: number;
    cows: number;
    freeSpots: number;
    sheds: number;
    clayRooms: number;
    stoneRooms: number;
    workers: number;
    improvements: number;
    bonus: number;
}

const fieldsScore = (fields: number): number => {
    if (fields <= 1) {
        return -1;
    }
    if (fields >= 5) {
        return 4;
    }

    const map: Record<number, number> = {
        2: 1,
        3: 2,
        4: 3,
    };

    return map[fields];
};

const pastureScore = (pastures: number): number => {
    if (pastures <= 0) {
        return -1;
    }
    if (pastures >= 4) {
        return 4;
    }
    return pastures;
};

const grainScore = (grain: number): number => {
    const map: Record<number, number> = {
        1: 1,
        2: 1,
        3: 1,
        4: 2,
        5: 2,
        6: 3,
        7: 3
    };

    if (grain <= 0) {
        return -1;
    }
    if (grain >= 8) {
        return 4;
    }
    return map[grain];
};

const vegetablesScore = (vegetables: number): number => {
    if (vegetables <= 0) {
        return -1;
    }
    if (vegetables >= 4) {
        return 4;
    }
    return vegetables;
};

const sheepScore = (sheep: number): number => {
    if (sheep <= 0) {
        return -1;
    }
    if (sheep >= 8) {
        return 4;
    }

    const map: Record<number, number> = {
        1: 1,
        2: 1,
        3: 1,
        4: 2,
        5: 2,
        6: 3,
        7: 3
    };
    return map[sheep];
};

const pigsScore = (pigs: number): number => {
    if (pigs <= 0) {
        return -1;
    }
    if (pigs >= 7) {
        return 4;
    }

    const map: Record<number, number> = {
        1: 1,
        2: 1,
        3: 2,
        4: 2,
        5: 3,
        6: 3
    };
    return map[pigs];
};

const cowsScore = (cows: number): number => {
    if (cows <= 0) {
        return -1;
    }
    if (cows >= 6) {
        return 4;
    }

    const map: Record<number, number> = {
        1: 1,
        2: 2,
        3: 2,
        4: 3,
        5: 3
    };
    return map[cows];
};

const freeSpotsScore = (freeSpots: number): number => {
    return 0 - freeSpots;
};

export const calcScore = (score: Score): number => {
    return fieldsScore(score.fields) + pastureScore(score.pastures) + grainScore(score.grain)
        + vegetablesScore(score.vegetables) + sheepScore(score.sheep) + pigsScore(score.pigs)
        + cowsScore(score.cows) + freeSpotsScore(score.freeSpots) +
        score.sheds + score.clayRooms + score.stoneRooms * 2 + score.workers * 3 +
        score.improvements + score.bonus;
};
