const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960 },
    { title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", year: 1813 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", year: 1951 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1937 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1954 },
    { title: "The Chronicles of Narnia", author: "C.S. Lewis", genre: "Fantasy", year: 1950 },
]

const userBooks = books.filter( (book) =>  book.genre === "Fantasy")

// console.log(userBooks);

const userBooksafter1950 = books.filter( (book) => {
    return book.year > 1950 && book.genre === "Fantasy";
})

console.log(userBooksafter1950);