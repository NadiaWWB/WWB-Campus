    var options = {
        valueNames: [ 'name', 'slug' , 'category', 'tagline', 'categories', 'date'],
        listClass: 'list-filter',
        page: 2000 // how many items should first show up on the page - affects performance
        // add tagline, or option for it?
    };


    var authorList = new List('container-filter', options);
    var booksList  = new List('container-filter-books', options);


    var optionsAll = {
        valueNames: [ 'name', 'slug' , 'category'],
        listClass: 'list-filter',
        page: 2 // how many items should first show up on the page - affects performance
        // add tagline, or option for it?
    };

    var allContent = new List('./data/api.json', optionsAll)


if (document.getElementById("filter-authors")) {
    document.getElementById("filter-authors").onclick=function(){
            authorList.filter(function(item) {
               if (item.values().category == "Author" ) {
                 return true;
                 } else {
                 return false;
              }
          });
        };
      }

if (document.getElementById("filter-translators")) {
    document.getElementById("filter-translators").onclick=function(){
            authorList.filter(function(item) {
               if (item.values().category == "Translator" ) {
                 return true;
                 } else {
                 return false;
              }
          });
        };
      }
if (document.getElementById("filter-contributors")) {
    document.getElementById("filter-contributors").onclick=function(){
            authorList.filter(function(item) {
               if (item.values().category == "Contributor" ) {
                 return true;
                 } else {
                 return false;
              }
          });
        };
      }
if (document.getElementById("filter-editors")) {
    document.getElementById("filter-editors").onclick=function(){
            authorList.filter(function(item) {
               if (item.values().category == "Editor" ) {
                 return true;
                 } else {
                 return false;
              }
          });
        };
      }
if (document.getElementById("filter-designers")) {
    document.getElementById("filter-designers").onclick=function(){
            authorList.filter(function(item) {
               if (item.values().category == "Designer" ) {
                 return true;
                 } else {
                 return false;
              }
          });
        };
      }
  //and clear the filters
  if (document.getElementById("filter-none-authors")) {
     document.getElementById("filter-none-authors").onclick=function(){
         authorList.filter();
        };
      }

