//Triple, 4 of a kind, Yatch
function getMultiple(dice: number[], countNeeded: number) {
    const count: Record<number, number> = {};

    for (const d of dice) {
        count[d] = (count[d] || 0) + 1;
    }

    const result: number[] = [];

    for (const key in count) {
        if (count[key] >= countNeeded) {
            result.push(Number(key) * countNeeded);
        }
    }

    if(countNeeded == 5)
        return 150;

    return result;
}

//Aces, Deuces, Threes, Fours, Fives, Sixes
function getScoreNumber(dice: number[], score: number) {
    const count = dice.filter(n => n === score).length;

    return score * count;
}

function getFullHouse(dice: number[]) {
    const count: Record<number, number> = {};

    for (const d of dice) {
        count[d] = (count[d] || 0) + 1;
    }

    const values = Object.values(count);

    const hasThree = values.includes(3);
    const hasTwo = values.includes(2);

    return (hasThree && hasTwo) ? 28 : 0;
}

function getStraight(dice: number[]) {
    const set = new Set(dice);

    const patterns = [
        [1,2,3,4,5],
        [2,3,4,5,6],
    ];

    for (const p of patterns) {
        if (p.every(n => set.has(n))) {
            return 30;
        }
    }

    return 0;
}