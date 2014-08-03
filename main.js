$(document).ready(function(){



    $(".album_container a").click(function(){
      console.log(event);
      event.preventDefault();

      var pageToNavigate = "." + $(this).attr("rel");
      console.log(pageToNavigate);

      $(".container").children().removeClass("currentAlbum");

      $(pageToNavigate).addClass("currentAlbum");


    });

   $(".album_pic li").click(function(event){
     console.log(event);
     event.preventDefault();

     $(this).siblings().toggle('Slow');
     $(this).find("img").toggleClass("big");

   });

});

// create on a single webpage
// 3 photo albums that each contain 3 photos atleast.
// when you click a album, you will then only see the photos for that album, but you should be able to navigate back to view all of the albums.

// use jquery to do this.
