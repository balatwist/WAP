let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
  ];
  
 
  
  
  function addBook(title, author, libraryID) {
    const newBook = { title, author, libraryID };
    libraryBooks.push(newBook);
    return newBook;
  }
  const newBook = addBook("The Milestone", "Derrick Pette", 7890);
console.log("Added Book:", newBook);

  
 
  function getTitles() {
    return libraryBooks.map(book => book.title).sort();
  }

  const titles = getTitles();
console.log("All Titles:", titles);

  

  function findBooks(keyword) {
    const matchingBooks = libraryBooks.filter(book => book.title.includes(keyword));
    return matchingBooks.sort((a, b) => a.author.localeCompare(b.author));
  }
  const keywordBooks = findBooks("Ahead");
console.log("Books with Keyword:", keywordBooks);



function myMap(arr, fun) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(fun(arr[i]));
    }
    return result;
  }
  