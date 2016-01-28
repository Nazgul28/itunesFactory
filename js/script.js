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
              // console.log(value.artistName);
              newLine += '<li>';
              newLine += '<h4>' + value.collectionName + '</h4></br>';
              newLine += '<img src=" ' + value.artworkUrl100 + ' "/></br>';
              newLine += '<h6>' + value.copyright + '</h6>';
              newLine += '<p> $' + value.collectionPrice + '</p>';
              newLine += '<a href=" ' + value.collectionViewUrl + ' "> check more on iTunes </a>';
              newLine += '</li>';

            });

            $('.result-list').append(newLine);
          });

   $('#album-search').submit(function() {
    $('.result-list').empty();
  });

 });

})