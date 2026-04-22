let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Main function
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  // Loop back to the first slide
  if (n > slides.length) {
      slideIndex = 1;
  }    
  // Loop to the last slide
  if (n < 1) {
      slideIndex = slides.length;
  }
  
  // Hide all slides initially
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Show the active slide
  slides[slideIndex-1].style.display = "block";  
}