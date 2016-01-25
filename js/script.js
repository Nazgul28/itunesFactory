$(function () {
  
  // console.log('hi');
  
  $('#album-search').submit(function(event){
     event.preventDefault();
  

   console.log('hi there');
    

    var artist = $('#artist-name').val();
    var results = {};
    var newLine = '';

    $.ajax ({
    method: 'GET',
    url: 'https://itunes.apple.com/search?entity=album&limit=6&term=' + artist,
    dataType: 'jsonp'
    })

     .done(function(results){
            // var result = results.data;
            console.log(results);

            $(results.results).each(function(index,value) {
              // console.log(value, results);
              console.log(value);

            //   newLine += '<li>';
            //   newLine += '<h3>' + results.data.collectionCensoredName + '</h3>';
            //   newLine += '</li>';




            });

            // $('.result-list').append(newLine);

      });





  });
})