var library = [
  scifi1 = new Book("Slaughter House 5", 'Kurt Vonnegut', 'science fiction', 1969, 288),
  scifi2 = new Book("1984", "George Orwell", "science fiction", 1949, 336),
  scifi3 = new Book('Hitchhikers Guide to the Galaxy', 'Douglas Adams', 'science fiction', 1978, 224),
  scifi4 = new Book('Enders Game', 'Orson Scott Card', 'science fiction', 1985, 352),
  scifi5 = new Book('Dune', 'Frank Herbert', 'science fiction', 1965, 896),
  fantasy1 = new Book('The Princess Bride', 'William Goldman', 'fantasy', 1973, 512),
  fantasy2 = new Book('The Fellowship of the Ring', 'J. R. R. Tolkien', 'fantasy', 1954, 432),
  fantasy3 = new Book('Northern Lights', 'Philip Pullman', 'fantasy', 1995, 432),
  fantasy4 = new Book('The Voyage of the Dawn Treader', 'C.S. Lewis', 'fantasy',1952, 256),
  fantasy5 = new Book('American Gods', 'Neil Gaiman', 'fantasy', 2001, 784),
];

function Book(bookTitle, author, genre, year, about, pageCount) {
  this.bookTitle = bookTitle;
  this.author = author;
  this.genre = genre;
  this.year = year;
  this.about = about;
}

function searchGenre(genre) {
  for (i = 0; i < library.length; i++) {
    if (library[i].genre === genre) {
      console.log(library[i]);
    } else {
      console.log('search failed');
    }
  }
}

$(function(){
  console.log(library);
  searchGenre('science fiction');
});
