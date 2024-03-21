let books = []
function addBook() {
    let book = {
        title: prompt("Enter title: "),
        author: prompt("Enter author: "),
        year: prompt("Enter year: "),
        price: prompt("Enter price: ")
    }
    books.push(book)
}

function showAllBook() {
    books.forEach((book, index) => 
    console.log(`No: ${index+1}\nTitle: ${book.title}\nAuthor: ${book.author}\nYear: ${book.year}\nPrice: ${book.price}\n`))
}

function delBook() {
    let index = prompt("Enter index: ")
    books.splice(index-1, 1)
}

function editBook() {
    let index = prompt("Enter index: ")
    let book = {
        title: prompt("Enter title: "),
        author: prompt("Enter author: "),
        year: prompt("Enter year: "),
        price: prompt("Enter price: ")
    }
    books.fill(book, index-1, index)
}

const select_choice = () => {
    let choice = prompt("Choose option :\n1. Add book\n2. Show all book\n3. Edit book\n4. Delete book \n5. Exit")
    switch (choice) {
        case "1":
            console.log("=== Add book ===")
            addBook()
            select_choice()
            break;
        case "2":
            console.log("=== Show all book ===")
            showAllBook()
            select_choice()
            break;
        case "3":
            console.log("=== Edit book ===")
            editBook()
            select_choice()
            break;
        case "4":
            console.log("=== Delete book ===")
            delBook()
            select_choice()
            break;
        case "5":
            console.log("=== Exit ===")
            break;
        default:
            console.log("Invalid choice")
            select_choice()
            break;
    }
}