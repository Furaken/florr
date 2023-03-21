function craftingSimulator(chance, amount) {
    var attNum = failSPS = highestFailStreak = failStreak = chanceToGetAtLeast1 = 0,
        allAtt = [],
        chance = chance / 100
        list = [0, 0, 0, 0, chance],
        consAmount = amount
    while (amount >= 5) {
        attNum++
        if (Math.random() * 100 <= chance * 100) {
            amount -= 5
            allAtt.push(attNum)
            if (failStreak > highestFailStreak) highestFailStreak = failStreak
            failSPS = 0
        } else {
            amount -= Math.floor(Math.random() * 4 + 1)
            failSPS++
            failStreak = failSPS
        }
    }
    if (failStreak > highestFailStreak) highestFailStreak = failStreak
    for(let i = 5; i < consAmount; i++) list[i] = chance + (1 - chance) * (list[i-1] + list[i-2] + list[i-3] + list[i-4]) / 4
    chanceToGetAtLeast1 = list[list.length - 1] * 100;

    let table = {
        "Success at attempt number" : allAtt.join(", "),
        "Total attempts" : attNum,
        "Petals crafted" : allAtt.length,
        "Chance to get at least 1" : chanceToGetAtLeast1,
        "Failed attempts since previous success" : failSPS,
        "Highest failed attempts in a row" : highestFailStreak,
        "Remaining petals" : amount,
        "Average" : consAmount / (allAtt.length),
        "Average by formula" : (2.5 * chance + 2.5) / chance,
    }
    console.table(table)
}

// Crafting 100 petals with 2.4% chance: craftingSimulator(2.4, 100)
