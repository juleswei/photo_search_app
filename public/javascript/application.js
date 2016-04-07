$(document).ready(function() {

  $('form').submit(function(e) {
    e.preventDefault();
    var search = $('#search_type').val();
    var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var flickrParmas ={ 
      tags: search,
      format: "json" 
    };
  function callback(data) {
      var displayPhoto = photoListTemplate({photos:data.items})

      var displayPhoto = '<ul>';
      $.each(data.items,function(index,items) {
        displayPhoto += '<li>';
        displayPhoto += '<img src="'+ items.media.m + '"></li>';     
      });
      displayPhoto += '</ul>';
      $('#photo_collage').html(displayPhoto);
    };



    $.getJSON(flickrAPI, flickrParmas, callback);

});
