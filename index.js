import inquirer from "inquirer";
let Balance = 100000;
let passCode = 1503;
let userEnteredPassword = await inquirer.prompt({
    name: "Password",
    type: "number",
    message: "Enter password"
});
if (userEnteredPassword.Password === passCode) {
    const options = await inquirer.prompt([{
            type: "list",
            message: "Select the operation you wanted to perform",
            name: "optionsToSelect",
            choices: ["Withdraw", "Check your Balance", "Fast_Cash"]
        }]);
    if (options.optionsToSelect === "Withdraw") {
        const withdrawalAmount = await inquirer.prompt({
            type: "number",
            message: "Enter amount you wanted to withdraw",
            name: "amount"
        });
        if (withdrawalAmount.amount > Balance) {
            console.log("Insuffiecient amount! you don't have that much money to collect");
        }
        else if (withdrawalAmount.amount < 50) {
            console.log("Minimum amount of withdraw is 50$");
        }
        else {
            Balance -= withdrawalAmount.amount;
            console.log(`Your new balance is ${Balance}$`);
        }
    }
    else if (options.optionsToSelect === "Fast_Cash") {
        const fastAmount = await inquirer.prompt({
            type: "list",
            name: "fastCashAmount",
            message: "Select your Fast Cash amount",
            choices: ["1000", "5000", "10000", "20000"]
        });
        if (fastAmount.fastCashAmount === "1000") {
            Balance -= 1000;
            console.log(`Your new Balance is ${Balance}$`);
        }
        else if (fastAmount.fastCashAmount === "5000") {
            Balance -= 5000;
            console.log(`Your new Balance is ${Balance}$`);
        }
        else if (fastAmount.fastCashAmount === "10000") {
            Balance -= 10000;
            console.log(`Your new Balance is ${Balance}$`);
        }
        else if (fastAmount.fastCashAmount === "20000") {
            Balance -= 20000;
            console.log(`Your new Balance is ${Balance}$`);
        }
        else {
            console.log("This is not availble in Fast Cash");
        }
    }
    else {
        console.log(`your Balance is ${Balance}$`);
    }
}
else {
    console.log("Invalid password");
}
