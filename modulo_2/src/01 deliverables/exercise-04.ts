console.log("************** DELIVERABLE 04 *********************");


const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books, titleToSearch){
const findBook = books.find(book => book.title === titleToSearch && book.isRead);
return Boolean(findBook);
};
console.log(isBookRead(books,"Devastación"));




