var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// you can also log multiple values at once like this
console.log(playerName,playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // subtract the value of 'playerAttack' form the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
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

    // Subtract the value of 'enemyAttack' form the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
        playerHealth = playerHealth - enemyAttack;

    // log a resulting message to the conosle so we know that it worked.
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
        
};

fight();