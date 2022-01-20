$(".menu").click(function () {
  $(".menu").toggleClass("active");
  $(".navbar-menu").toggleClass("active");
});

var auto = true;
var pause = 7000;
var $this = $('#slider');
var slidesCont = $this.children('.slides-container');
var slides = slidesCont.children('.slide');
var pager = $this.children('.pager');
var arrowsCont = $this.children('.arrows');
var prevSlide = arrowsCont.children('.prev');
var nextSlide = arrowsCont.children('.next');
var slidesCount = slides.length;
var currentSlide = slides.first();
var currentSlideIndex = 1;
var autoPlay = null;

   $(function() { 
    slides.not(':first').css('display', 'none');
currentSlide.addClass('active');
   });

   function fadeNext() {
    currentSlide.removeClass('active').fadeOut(700);
 
    if(currentSlideIndex == slidesCount) {
        currentSlide = slides.first();
        currentSlide.delay(500).addClass('active').fadeIn(700);
        currentSlideIndex = 1;
    } else {
        currentSlideIndex++;
        currentSlide = currentSlide.next();
        currentSlide.delay(500).addClass('active').fadeIn(700);
    }
 
    pager.text(currentSlideIndex+' / '+slidesCount);
}
 
// Function responsible for fading to previous slide
function fadePrev() {
    currentSlide.removeClass('active').fadeOut(700);
 
    if(currentSlideIndex == 1) {
        currentSlide = slides.last();
        currentSlide.delay(500).addClass('active').fadeIn();
        currentSlideIndex = slidesCount;
    } else {
        currentSlideIndex--;
        currentSlide = currentSlide.prev();
        currentSlide.delay(500).addClass('active').fadeIn(700);
    }
 
    pager.text(currentSlideIndex+' / '+slidesCount);
}
function AutoPlay() {
  clearInterval(autoPlay);

  if(auto == true)
      autoPlay = setInterval(function() {fadeNext()}, pause);
}
$(nextSlide).click(function(e) {
  e.preventDefault();
  fadeNext();
  AutoPlay();
});

// Detect if user clicked on arrow for previous slide and fade previous slide if it did
$(prevSlide).click(function(e) {
  e.preventDefault();
  fadePrev();
  AutoPlay();
});

// Start autoplay if auto is set to true
AutoPlay();
