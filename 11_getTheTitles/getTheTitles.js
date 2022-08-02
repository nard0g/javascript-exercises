const getTheTitles = function(bookList) {
    let titleList = []
    for (let bookIndex = 0; bookIndex < bookList.length; bookIndex++) {
        titleList.push(bookList[bookIndex].title);
    }
    return titleList;
};

// Do not edit below this line
module.exports = getTheTitles;
