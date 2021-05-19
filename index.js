const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
//const sentence = books.map(books => books.authorFirst + '' books.authorLast " wrote" + books.name ' in' + books.publishDate);
//console.log(sentence);

//Sort books from oldest to most recent
const age = books.sort(function(a, b){
  if(a.publishDate > b.publishDate){
    return 1;
  } else{
    return -1;
  }
});

console.log(age);

//sort books alphabetically
const alphabet = books.sort(function(a, b){
  if(a.name < b.name){
    return -1;
  } else{
    return 1;
  }
});

console.log(alphabet);

//Find who wrote War and Peace

const wnp = books.find(author => books.name = "War and Peace");

console.log(wnp);


//how many books were written before 1900?
const nineteen = books.filter(function(books){
  if(books.publishDate < 1900){
    return true;
  }
});
console.log(nineteen);

//was there at least one book published within the last 100 years?

//was every book published within the last 100 years?
