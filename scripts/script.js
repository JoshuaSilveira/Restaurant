 var menu = document.getElementById("nav");

 function myFunction(x) {
     x.classList.toggle("change");
     $("#nav").toggle();

 }

 function openPage(pageName, elmnt, color) {
     var i, tabcontent, tablinks;
     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
     }
     tablinks = document.getElementsByClassName("tablink");
     for (i = 0; i < tablinks.length; i++) {
         tablinks[i].style.backgroundColor = "";
     }
     document.getElementById(pageName).style.display = "block";
     elmnt.style.backgroundColor = color;

 }

 //specials
 var coll = document.getElementsByClassName("collapsible");
 var q;

 for (q = 0; q < coll.length; q++) {
     coll[q].addEventListener("click", function () {
         this.classList.toggle("active");
         var content = this.nextElementSibling;
         if (content.style.display === "block") {
             content.style.display = "none";
         } else {
             content.style.display = "block";
         }
     });
 }
 // Get the element with id="defaultOpen" and click on it
 document.getElementById("defaultOpen").click();

 var slideIndex = 1;
 showSlides(slideIndex);

 function plusSlides(n) {
     showSlides(slideIndex += n);
 }

 function currentSlide(n) {
     showSlides(slideIndex = n);
 }

 function showSlides(n) {
     var i;
     var slides = document.getElementsByClassName("mySlides");
     var dots = document.getElementsByClassName("demo");
     var captionText = document.getElementById("caption");
     if (n > slides.length) {
         slideIndex = 1
     }
     if (n < 1) {
         slideIndex = slides.length
     }
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }
     slides[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " active";
     captionText.innerHTML = dots[slideIndex - 1].alt;
 }
