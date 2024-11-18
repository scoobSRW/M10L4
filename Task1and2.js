function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.introduce = function() {
    console.log("The book '" + this.title + "', was written by " + this.author + " and has " + this.pages + " pages.");
}




let bookArray = [];



function addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    bookArray.push(newBook);
    console.log("Book added:", newBook.title);
}



function searchByTitle(title) {
    const results = bookArray.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    if (results.length) {
        console.log("Books found by title:");
        results.forEach(book => book.introduce());
    } else {
        console.log("No books found with title containing:", title);
    }
}



function searchByAuthor(author) {
    const results = bookArray.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    if (results.length) {
        console.log("Books found by author:");
        results.forEach(book => book.introduce());
    } else {
        console.log("No books found with author containing:", author);
    }
}



addBook("48 Laws of Power", "Robert Greene", 452);
addBook("The Republic", "Plato", 416);
addBook("The Prince", "Niccolò Machiavelli", 140);

console.log("\nSearch results:");
searchByTitle("The Prince");
searchByAuthor("Plato");
searchByTitle("Power");






function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
    } else {
        console.log("Deposit amount must be greater than zero.");
    }
};

Account.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
    } else if (amount > this.balance) {
        console.log("Insufficient funds.");
    } else {
        console.log("Withdrawal amount must be greater than zero.");
    }
};

Account.prototype.calculateCompoundInterest = function(annualRate, years) {
    const compoundBalance = this.balance * Math.pow(1 + annualRate / 100, years);
    console.log(`After ${years} years at an annual rate of ${annualRate}%, the balance will be ${compoundBalance.toFixed(2)}.`);
    return compoundBalance.toFixed(2);
};





const myAccount = new Account("12345", 1000, "John Doe");

console.log("\n--- Account Details ---");
console.log(myAccount);

console.log("\n--- Deposit ---");
myAccount.deposit(500);

console.log("\n--- Withdraw ---");
myAccount.withdraw(300);
myAccount.withdraw(1500);

console.log("\n--- Compound Interest ---");
myAccount.calculateCompoundInterest(5, 3);
