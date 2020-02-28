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

