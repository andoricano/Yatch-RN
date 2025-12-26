//Triple, 4 of a kind, Yatch
function getMultiple(dice: number[], countNeeded: number): number {
    const count: Record<number, number> = {};

    for (const d of dice) {
        count[d] = (count[d] || 0) + 1;
    }

    const targetKey = Object.keys(count).find(key => count[Number(key)] >= countNeeded);

    if (!targetKey) return 0;

    if (countNeeded === 5) {
        return 50; 
    }

    return Number(targetKey) * countNeeded;
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
    const sorted = [...dice].sort((a, b) => a - b);

    let cnt = 1;

    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] === sorted[i - 1] + 1) {
            cnt++;
        } else if (sorted[i] === sorted[i - 1]) {
            continue;
        } else {
            cnt = 1; 
        }
    }

    if (cnt >= 5) return 30; 
    if (cnt >= 4) return 15; 
    return 0;
}