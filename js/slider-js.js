
//---------------images in the slideshow-------------------

const imageFolder = ["oranmiyan-staff","capturing-zebra","cheetah","cream","erin-ijesha","green-earth",
										"jungle","nivea","olumo-rock","third-mainland-bridge","tree","tree-on-hand"];
										
let image = document.querySelector(".first-image");
let next = document.querySelector(".next");
let back = document.querySelector(".back");
let count = 0

//------------Hide and display the Navigation buttons--------------

next.addEventListener("click",function(){
	//image.style.animation="slide 0.3s linear normal";
	if(count < imageFolder.length){
		count++;
		setTimeout(()=>{
	image.src="img/"+imageFolder[count]+".jpg";
	image.alt=imageFolder[count];
	}, 100);
	//image.style.animation = "slide-next 0.3s linear 0s reverse";
	back.style.visibility ="visible";
	}
	if(count == imageFolder.length-1)
	{
		next.style.visibility ="hidden";
	}
	
	});
back.addEventListener("click",function(){
	//image.style.animation="slide 0.3s linear normal";
	if(count > 0){
		count--;
		setTimeout(()=>{
	image.src="img/"+imageFolder[count]+".jpg";
	image.alt=imageFolder[count];
	}, 100);
	//image.style.animation = "slide-next 0.3s linear 0s reverse";
	next.style.visibility ="visible";
	}
	if(count == 0)
	{
		back.style.visibility = "hidden";
		next.style.visibility ="visible";
	}
});