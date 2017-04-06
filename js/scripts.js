var library = [
  scifi1 = new Book("Slaughter House 5", 'Kurt Vonnegut', 'science-fiction', 1969, 288,'slaughter'),
  scifi2 = new Book("1984", "George Orwell", "science fiction", 1949, 336, '1984'),
  scifi3 = new Book('Hitchhikers Guide to the Galaxy', 'Douglas Adams', 'science-fiction', 1981, 224, 'hitchhikers'),
  scifi4 = new Book('Enders Game', 'Orson Scott Card', 'science-fiction', 1985, 352, 'enders'),
  scifi5 = new Book('Dune', 'Frank Herbert', 'science-fiction', 1965, 896, 'dune'),
  fantasy1 = new Book('The Princess Bride', 'William Goldman', 'fantasy', 1973, 512, 'princess'),
  fantasy2 = new Book('The Fellowship of the Ring', 'J. R. R. Tolkien', 'fantasy', 1954, 432, 'fellowship'),
  fantasy3 = new Book('Northern Lights', 'Philip Pullman', 'fantasy', 1995, 229, 'northern'),
  fantasy4 = new Book('The Voyage of the Dawn Treader', 'C.S. Lewis', 'fantasy',1952, 256, 'voyage'),
  fantasy5 = new Book('American Gods', 'Neil Gaiman', 'fantasy', 2001, 784, 'american'),
  romance1 = new Book("Pride and Prejudice","Jane Austin","romance",1813,256, 'pride'),
  romance2 = new Book("Twilight","Stephanie Meyer","romance", 2006, 244,'twilight'),
  romance3 = new Book("The Truth About Forever", "Sarah Dessen", "romance",2004,374,'truth'),
  romance4 = new Book("Gone with the Wind", "Margaret Mitchell", "romance",1955,1037,'gone'),
  romance5 = new Book("Crave(The Hot Addiction #1)","Joya Ryan", "romance",2015,134,'crave'),
  nonfiction1 = new Book("In Cold Blood", "Truman Capote", "non-fiction",1966,243,'cold'),
  nonfiction2 = new Book("Fast Food Nation", "Eric Schlosser", "non-fiction", 2001, 384,'fast'),
  nonfiction3 = new Book("Nikola Tesla", "Sean Patrick", "non-fiction",2013,46,'nikola'),
  nonfiction4 = new Book("Into the Wild","Jon Krakauer", "non-fiction",1995,224,'into'),
  nonfiction5 = new Book("Silent Spring", "Rachel Carson", "non-fiction",1962,400,'silent'),
];

function Book(bookTitle, author, genre, year, pageCount, imgClass) {
  this.bookTitle = bookTitle;
  this.author = author;
  this.genre = genre;
  this.year = year;
  this.pageCount = pageCount;
  this.imgClass = imgClass;
}

function genreFilter(genre) {
  var filter = [];
  for (i = 0; i < library.length; i++) {
    if (library[i].genre === genre) {
      filter.push(library[i]);
    }
  }
  return filter;
}

function eraFilter(bookArray, era) {
  var filter = [];
  for (i = 0; i < bookArray.length; i++) {
    if (era === "modern") {
      if (bookArray[i].year > 1980) {
        filter.push(bookArray[i]);
      }
    } else if (era === "classic") {
      if (bookArray[i].year < 1980) {
        filter.push(bookArray[i]);
      }
    }
  }
  return filter;
}

function lengthFilter(bookArray, bookLength) {
  var filter = [];
  for (i = 0; i < bookArray.length; i++) {
    if (bookLength === 'short') {
      if (bookArray[i].pageCount < 300) {
        filter.push(bookArray[i]);
      }
    } else if (bookLength === 'long') {
       if (bookArray[i].pageCount > 300) {
        filter.push(bookArray[i]);
      }
    }
  }
  return filter;
}

function suggest(genre, era, pageCount) {
  return (lengthFilter(eraFilter(genreFilter(genre), era), pageCount));
}

$(function() {
  $('form').submit(function(event){
    event.preventDefault();
    var genreInput = $('input:radio[name="genre"]:checked').val();
    var eraInput = $('input:radio[name="era"]:checked').val();
    var pageCountInput = $('input:radio[name="page-count"]:checked').val();
    var bookResults = suggest(genreInput, eraInput, pageCountInput);
    $('#output').empty();
    bookResults.forEach(function(book) {
      console.log(book);
      var imgLink = 'url(img/' + book.imgClass + '.jpg);"';
      console.log(imgLink);
      $('#output').append('<div class="book-image" style="background-image:' + imgLink + '>' + '</div>' + '<div class="suggested-book" id=' + book.imgClass + '><h1>' + book.bookTitle + '</h1>' + '<h4> by ' + book.author  + "</h4>" + "<p>published: " + book.year + "<br>" + "length: " + book.pageCount + " pages<p></div>");
      // $('.book-image').css('background-image', imgLink);
    });
    $('#main').hide();
    $('#output').fadeIn();
  });
});
