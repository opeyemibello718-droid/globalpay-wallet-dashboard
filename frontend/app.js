// Example JavaScript functionality for sending money, requesting payments, transaction management, and balance updates

let balance = 1000; // Initial balance for example
const transactions = [];

// Function to send money
function sendMoney(amount, recipient) {
    if (amount <= 0) {
        console.log('Amount must be greater than 0.');
        return;
    }
    if (amount > balance) {
        console.log('Insufficient balance.');
        return;
    }
    balance -= amount;
    transactions.push({ type: 'send', amount, recipient, date: new Date() });
    console.log(`Sent ${amount} to ${recipient}. New balance: ${balance}`);
}

// Function to request payment
function requestPayment(amount, payer) {
    if (amount <= 0) {
        console.log('Amount must be greater than 0.');
        return;
    }
    transactions.push({ type: 'request', amount, payer, date: new Date() });
    console.log(`Requested ${amount} from ${payer}.`);
}

// Function to update balance
function updateBalance(amount) {
    if (amount < 0) {
        console.log('Cannot set a negative balance.');
        return;
    }
    balance = amount;
    console.log(`Balance updated. New balance: ${balance}`);
}

// Function to display transaction history
function displayTransactions() {
    console.log('Transaction History:');
    transactions.forEach((transaction, index) => {
        console.log(`${index + 1}: ${transaction.type} - ${transaction.amount} (${transaction.recipient || transaction.payer}) on ${transaction.date}`);
    });
}

// Example transactions
sendMoney(100, 'Alice'); // Send 100 to Alice
requestPayment(200, 'Bob'); // Request 200 from Bob
updateBalance(1200); // Update balance
displayTransactions(); // Display transaction history
