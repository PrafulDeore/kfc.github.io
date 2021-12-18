 // slidding images---------------------------------------->
 var slideIndex = 0;
 showSlides();

 function showSlides() {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) {
     slideIndex = 1;
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex - 1].style.display = "block";

   setTimeout(showSlides, 3000); // Change image every 2 seconds
 }

 // products--------------------------------------->
 var data2 = [
   {
     image_url:
       "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT3131.jpg?ver=1.10",
     name: "BUCKET MEALS",
   },
   {
     image_url:
       "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT3311.jpg?ver=1.10",
     name: "Chel MEALS",
   },
   {
     image_url:
       "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT3132.jpg?ver=1.10",
     name: "Hot MEALS",
   },
   {
     image_url:
       "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT3133.jpg?ver=1.10",
     name: "Breck MEALS",
   },
   {
     image_url:
       "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT3134.jpg?ver=1.10",
     name: "BUCKET MEALS",
   },
   {
     image_url:
       "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT3135.jpg?ver=1.10",
     name: "heavy MEALS",
   },
   {
    image_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT176.jpg?ver=5.64",
    p: "View All Menu",
  },
   {
     image_url:
       "https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg",
     p: "View All Menu",
   },
   
 ];

 var main = document.getElementById("main");
 var outerbox = document.createElement("div");
 outerbox.setAttribute("id", "outerbox");

 data2.map(function (ele) {
   var innerbox = document.createElement("div");
   innerbox.setAttribute("id", "innerbox");
   var image = document.createElement("img");
   image.setAttribute("src", ele.image_url);

   var h3 = document.createElement("h3");
   h3.textContent = ele.name;

   var p = document.createElement("p");
   p.textContent = ele.p;

   main.appendChild(outerbox);
   outerbox.append(innerbox);
   innerbox.append(image, h3, p);
 });

 document.getElementById("innerbox").addEventListener("click",sO);

 function sO(evnet){
     for(i=0;i<innerbox.length;i++){
   window.location.href = "products.html";
     }
 }