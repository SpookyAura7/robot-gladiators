var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiple values at once like this
console.log(playerName,playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {

    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // prompt asking players if they want to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight); 

    // if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting teh amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. I don't hear no bell."
        );

        // check enemy's health
        if (enemyHealth<= 0) {
        window.alert("Let's GO!! " + enemyName + " has died!")
        }
        else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable.
        playerHealth = playerHealth - enemyAttack;
        console.log(
           enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
        window.alert("FUCK! " + playerName + " has died!");
        }
        else {
        window.alert("We're still in this! " + playerName + " still has " + playerHealth + " health left.");
        }
        // if player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you wanna quit...? Yikes.");
    
    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight! Weeniehut JR. over here.");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney -2;
        window.alert("You now are left with: " + playerMoney + " BattleBucks! Good luck!")
    }
    //if no (false), ask question again by running fight() again
    else {
        fight();
    }


} else {
    window.alert("pfft. Does that look like any of the option? No. Try again.");
}

    
        
};

fight();