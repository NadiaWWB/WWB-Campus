    var options = {
        valueNames: [ 'name', 'slug' , 'category', 'tagline', 'genre', 'date'],
        listClass: 'filtered-list',
        page: 2000 // how many items should first show up on the page - affects performance
        // add tagline, or option for it?
    };


    var authorList = new List('container-filter', options);


{% for category in craft.categories.group('genre').find() %}

if (document.getElementById("filter-{{ category.slug }}")) {
    document.getElementById("filter-{{ category.slug }}").onclick=function(){
            authorList.filter(function(item) {
               if (item.values().genre == "{{ category.slug }}" ) {
                 return true;
                 } else {
                 return false;
              }
          });
        };
      }
{% endfor %}

{% for category in craft.categories.group('theme').find() %}
if (document.getElementById("filter-{{ category.slug }}")) {
    document.getElementById("filter-{{ category.slug }}").onclick=function(){
            authorList.filter(function(item) {
               if (item.values().theme == "{{ category.slug }}" ) {
                 return true;
                 } else {
                 return false;
              }
          });
        };
      }
{% endfor %}


  //and clear the filters
  if (document.getElementById("filter-none")) {
     document.getElementById("filter-none").onclick=function(){
         authorList.filter();
        };
      }
//and clear the filters
  if (document.getElementById("filter-none-theme")) {
     document.getElementById("filter-none-theme").onclick=function(){
         authorList.filter();
        };
      }

