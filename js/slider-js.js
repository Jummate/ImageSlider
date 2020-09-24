
										
let images = document.querySelectorAll(".first-image");
let next = document.querySelector(".next");
let back = document.querySelector(".back");
let count = 0

//------------Hide and display the Navigation buttons--------------

next.addEventListener("click",function(){
	images[0].style.animation="slide 0.2s linear normal";
	if(count < images.length){
		count++;
		setTimeout(()=>{
		images[0].src = images[count].src;
		images[0].style.animation = "slide-next 0.2s linear 0s reverse";
	}, 100);
	
	back.style.visibility ="visible";
	}
	if(count == images.length-1)
	{
		next.style.visibility ="hidden";
	}
	
	});
back.addEventListener("click",function(){
	//image.style.animation="slide 0.3s linear normal";
	if(count >= 1){
		count--;
		setTimeout(()=>{
			if(count == 0){
			images[0].src = "img/oranmiyan-staff.jpg";
		}
		else{
			images[0].src = images[count].src;
		}
		
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