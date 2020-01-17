class Fighter {
    constructor(fighterStats) {
        this.name = fighterStats.name;
        this.damage = fighterStats.damage;
        this.hp = fighterStats.hp;
        this.maxHP = fighterStats.hp;
        this.strength = fighterStats.strength;
        this.agility = fighterStats.agility;
        this.matchesWon = 0;
        this.matchesLost = 0;
    }

    getName() {
        return this.name;
    }

    getDamage() {
        return this.damage;
    }

    getStrength() {
        return this.strength;
    }

    getAgility() {
        return this.agility;
    }

    getHealth() {
        return this.hp;
    }

    attack(defenderFighter) {
        let ceilValue = 100;
        let decimalProbabilityOfAttackSuccess =
            (ceilValue -
                (defenderFighter.getStrength() + defenderFighter.getAgility())) /
            ceilValue;
        let attackSuccess = Math.random() < decimalProbabilityOfAttackSuccess;
        if (attackSuccess) {
            defenderFighter.dealDamage(this.getDamage());
            console.log(
                `${this.getName()} makes ${this.getDamage()} damage to ${defenderFighter.getName()} `
            );
        } else {
            console.log(`${defenderFighter.getName()} attack missed`);
        }
    }

    logCombatHistory() {
        console.log(
            `Name: ${this.name}, Wins: ${this.matchesWon}, Losses: ${this.matchesLost}`
        );
    }

    heal(numberOfPointsToHeal) {
        if (this.getHealth() + numberOfPointsToHeal >= this.maxHP) {
            this.hp = this.maxHP;
        } else {
            this.hp = this.hp + numberOfPointsToHeal;
        }
    }

    dealDamage(dealtDamage) {
        if (this.getHealth() - dealtDamage < 0) {
            this.hp = 0;
        } else {
            this.hp = this.getHealth() - dealtDamage;
        }
    }

    addWin() {
        this.matchesWon++;
    }

    addLoss() {
        this.matchesLost--;
    }
}

const battle = (_firstFighter, _secondFighter) => {
    let firstFighter = new Fighter(_firstFighter);
    let secondFighter = new Fighter(_secondFighter);

    if (firstFighter.getHealth() === 0) {
        console.log(`${firstFighter.getName()} is dead and can't fight.`);
        return;
    }
    if (secondFighter.getHealth() === 0) {
        console.log(`${secondFighter.getName()} is dead and can't fight.`);
        return;
    }

    while (firstFighter.getHealth() > 0 || secondFighter.getHealth() > 0) {
        firstFighter.attack(secondFighter);
        secondFighter.attack(firstFighter);
    }
    let victoriousFighter =
        firstFighter.getHealth() === 0 ? firstFighter : secondFighter;
    let looserFighter =
        firstFighter.getHealth() === 0 ? secondFighter : firstFighter;
    console.log(`The winner of this match is ${victoriousFighter.getName()}.`);
    victoriousFighter.addWin();
    looserFighter.addLoss();
};