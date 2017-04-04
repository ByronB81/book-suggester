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
  romance1 = new Book("Pride and Prejudice","Jane Austin","romance",1813,656)
  romance2 = new Book("Twilight","Stephanie Meyer","romance",2006,544)
  romance3 = new Book("The Truth About Forever", "Sarah Dessen", "romance",2004,374)
  romance4 = new Book("Gone with the Wind", "Margaret Mitchell", "romance",1999,1037)
  romance5 = new Book("Crave(The Hot Addiction #1)","Joya Ryan", "romance",2015,134)
  nonfiction1 = new Book("In Cold Blood", "Truman Capote", "nonfiction",1966,343)
  nonfiction2 = new Book("Fast Food Nation", "Eric Schlosser",2001, 384)
  nonfiction3 = new Book("Nikola Tesla", "Sean Patrick",2013,46)
  nonfiction4 = new Book("Into the Wild","Jon Krakauer",1995,224)
  nonfiction5 = new Book("Silent Spring", "Rachel Carson",1962,400)
}

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
