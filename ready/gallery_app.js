//Gallery slider



var container = document.getElementsByClassName("container")[0];
var leftArrow = document.getElementById("left-arrow");
var rightArrow = document.getElementById("right-arrow");
  
  //capture gallerys to variables
var galleryOne = document.getElementById("first");
var galleryTwo = document.getElementById("second");
var galleryThree = document.getElementById("third");


var dots = document.getElementById("dots");
var dot1 = document.getElementById("dot-one");
var dot2 = document.getElementById("dot-two");
var dot3 = document.getElementById("dot-three");
var photo = document.getElementById("main_photo");

var href;


function myFunction() {
    var y = container.getElementsByTagName("a");
	for(var i = 0; i < y.length; i++) {
	  y[i].addEventListener('click', function(event) {
		  event.preventDefault();
		  //get href of clicked img
		  href = this.getAttribute("href");
		  //display as big_photo
		  photo.src = href;
	  }); //anonymus function end
	} //loop end
} //my function end

myFunction();




 //Display arrows and dots on hover
container.onmouseover = function() {
	if(gallerys[0].display == true ) {
	   //leftArrow.style.opacity = "1";
	   rightArrow.style.opacity = "1";
	   dots.style.opacity = "1";
	} else if(gallerys[2].display == true ) {
	   leftArrow.style.opacity = "1";
	   //rightArrow.style.opacity = "1";
	   dots.style.opacity = "1";
	} else {
	   leftArrow.style.opacity = "1";
	   rightArrow.style.opacity = "1";
	   dots.style.opacity = "1";
	}
}

container.onmouseout = function() {
	leftArrow.style.opacity = "0";
	rightArrow.style.opacity = "0";
	dots.style.opacity = "0";
}




 //Create aray of gallerys(as objectes)
 var gallerys = [
    {
		display: true
	},
	{
		display: false
	},
	{
		display: false
	}
 ]

 //Capture click event on left and right arrow
 rightArrow.onclick = function() {
	 if(gallerys[0].display == true) {
		  galleryOne.style.display = "none";
	      galleryTwo.style.display = "initial";
	      galleryThree.style.display = "none";
		  gallerys[0].display = false;
		  gallerys[1].display = true;
		  gallerys[2].display = false;
	      dot1.style.backgroundColor = "rgba(36,64,128,0)";
	      dot3.style.backgroundColor = "rgba(36,64,128,0)";
	      dot2.style.backgroundColor = "rgba(36,64,128,1)";
	 } else if(gallerys[1].display == true) {
		  galleryOne.style.display = "none";
	      galleryTwo.style.display = "none";
	      galleryThree.style.display = "initial";
		  gallerys[0].display = false;
		  gallerys[1].display = false;
		  gallerys[2].display = true;
	      dot1.style.backgroundColor = "rgba(36,64,128,0)";
	      dot3.style.backgroundColor = "rgba(36,64,128,1)";
	      dot2.style.backgroundColor = "rgba(36,64,128,0)";
		  rightArrow.style.opacity = "0";
	 }
 } //function end
 
  leftArrow.onclick = function() {
	 if(gallerys[1].display == true) {
		  galleryOne.style.display = "initial";
	      galleryTwo.style.display = "none";
	      galleryThree.style.display = "none";
		  gallerys[0].display = true;
		  gallerys[1].display = false;
		  gallerys[2].display = false;
	      dot1.style.backgroundColor = "rgba(36,64,128,1)";
	      dot3.style.backgroundColor = "rgba(36,64,128,0)";
	      dot2.style.backgroundColor = "rgba(36,64,128,0)";
		  leftArrow.style.opacity = "0";
	 } else if(gallerys[2].display == true) {
		  galleryOne.style.display = "none";
	      galleryTwo.style.display = "initial";
	      galleryThree.style.display = "none";
		  gallerys[0].display = false;
		  gallerys[1].display = true;
		  gallerys[2].display = false;
	      dot1.style.backgroundColor = "rgba(36,64,128,0)";
	      dot3.style.backgroundColor = "rgba(36,64,128,0)";
	      dot2.style.backgroundColor = "rgba(36,64,128,1)";
		 } 
 }
 
 //capture click event on dots and display proper gallery, also change color background
 dot3.onclick = function() {
	 galleryOne.style.display = "none";
	 galleryTwo.style.display = "none";
	 galleryThree.style.display = "initial";
	 dot1.style.backgroundColor = "rgba(36,64,128,0)";
	 dot3.style.backgroundColor = "rgba(36,64,128,1)";
	 dot2.style.backgroundColor = "rgba(36,64,128,0)";
	 gallerys[0].display = false;
     gallerys[1].display = false;
     gallerys[2].display = true;
	} 
 
 dot2.onclick = function() {
	 galleryOne.style.display = "none";
	 galleryTwo.style.display = "initial";
	 galleryThree.style.display = "none";
	 dot1.style.backgroundColor = "rgba(36,64,128,0)";
	 dot3.style.backgroundColor = "rgba(36,64,128,0)";
	 dot2.style.backgroundColor = "rgba(36,64,128,1)";
	 gallerys[0].display = false;
     gallerys[1].display = true;
	 gallerys[2].display = false;
	}

 dot1.onclick = function() {
	 galleryOne.style.display = "initial";
	 galleryTwo.style.display = "none";
	 galleryThree.style.display = "none";
	 dot1.style.backgroundColor = "rgba(36,64,128,1)";
	 dot3.style.backgroundColor = "rgba(36,64,128,0)";
	 dot2.style.backgroundColor = "rgba(36,64,128,0)";
	 gallerys[0].display = true;
	 gallerys[1].display = false;
	 gallerys[2].display = false;
	}
	

 
 
 
 
 
 
 
 
 
 
 
 
 