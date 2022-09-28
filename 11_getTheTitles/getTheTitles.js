const getTheTitles = function(books) {
    return books.map(book => { return book.title });

    /* original solution
    let titles = [];
    books.forEach(book => {
        titles.push(book["title"]);
    });
    return titles;
    */
};

// Do not edit below this line
module.exports = getTheTitles;
