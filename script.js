class User {
    #firstName;
    #lastName;
    #hometown;
    #userBooks;
    constructor(firstName, lastName, hometown) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#hometown = hometown;
        this.#userBooks = [];
    }

    addBooks(bookName) {
        this.#userBooks.push(bookName);
    }

    showTheUserBooks() {
        console.log('The user ' + this.#firstName + ' ' + this.#lastName + ' from ' + this.#hometown + ' borrowed the following books:');
        this.#userBooks.forEach((book) => {
            console.log(book)
        });

        // במקום הפונקציה פוראיץ היה אפשר לעשות לולאת פור כך
        // for (let i = 0; i < this.#userBooks.length; i++) {
        //     console.log(this.#userBooks[i]);
        // }
    }
}

let userNumber1 = new User('Lior', 'Tahulian', 'Holon')
// console.log(userNumber1);
userNumber1.addBooks('Harry Potter');
userNumber1.addBooks('World War II');
userNumber1.addBooks('Gingi');
userNumber1.showTheUserBooks();

let userNumber2 = new User('Ben', 'Cohen', 'Netanya');
// console.log(userNumber2);
userNumber2.addBooks('Bracking Bad');
userNumber2.addBooks('True Detective');
userNumber2.addBooks('The secret');
userNumber2.showTheUserBooks();

let userNumber3 = new User('Eli', 'Rotenberg', 'Jerusalem');
// console.log(userNumber3);
userNumber3.addBooks('You');
userNumber3.addBooks('BattleField');
userNumber3.addBooks('Brothers in arms');
userNumber3.addBooks('Love is in the air');
userNumber3.showTheUserBooks();