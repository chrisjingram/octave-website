function toggleFullscreenMenu(){
  var el = document.getElementById("fullscreen-menu");
  if(el.style.display === "block"){
    el.style.display = "none"
  }else{
    el.style.display = "block"
  }
}

// Gallery
document.addEventListener("DOMContentLoaded", function(event){

  window.currentGalleryIndex = -1;

  const gallery = document.getElementsByClassName("gallery")[0];
  const images = gallery.getElementsByTagName("img");

  setTimeout(nextImage, 500);
  setInterval(nextImage, 5000);

  function nextImage(){
    if(window.currentGalleryIndex === images.length-1){
      window.currentGalleryIndex = 0;
    }else{
      window.currentGalleryIndex += 1;
    }
    for(var i=0; i<images.length; i++){
      images[i].className = "";
    }
    images[window.currentGalleryIndex].className = "visible";
  }

});

$(document).ready(function(){

  // Scroll on # links
  $("a[href^=#]").click(function(e) {
    e.preventDefault();
    var dest = $(this).attr('href');
    $('html,body')
      .animate({
          scrollTop: $(dest).offset().top - 80
        },
        'slow'
      );
  });

  // Header animation on scroll
  $(window).scroll(function(){
    if($(window).scrollTop() === 0){
      $("#navbar").removeClass("fixed");
      $("#navbar").removeClass("hidden");
    }
  });

  $(window).scroll(_.debounce(function(){
    if($(window).scrollTop() >= $(window).height()) {
      $("#navbar").addClass("hidden");
      setTimeout(function(){
        $("#navbar").addClass("fixed");
      }, 200)
    } else {
      $("#navbar").removeClass("fixed");
      $("#navbar").removeClass("hidden");
    }
  }, 50));
});

