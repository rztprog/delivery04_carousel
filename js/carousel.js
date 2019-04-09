'use strict';

////////// VARIABLES /////////
//////////////////////////////

let i = 1;
let lis = document.getElementsByTagName("li");

// Init the first img to display block
lis[0].style.display = "block";

let buttonFor = document.getElementsByClassName("button-img--forward")[0];  
buttonFor.onclick = nextImg; 
buttonFor.addEventListener("click", () => i++ );

let buttonBac = document.getElementsByClassName("button-img--backward")[0];  
buttonBac.onclick = nextImg; 
buttonBac.addEventListener("click", () => i-- );

// let timeout = 500;


// Darkmode 
let y = 1;
let dark = document.getElementsByClassName("darkmode-button")[0];
let body = document.getElementsByClassName("body")[0].style;
dark.onclick = darkmode;


////////// FUNCTION //////////
//////////////////////////////

// function autoRoll(){
// 	nextImg;
// 	timeout = setTimeout('autoRoll();', timeout);
// }

function nextImg(){
		if(i > 2){ i = 0; }
		if(i < 0){ i = 2; }

		switch(i) {
			case 0:
				lis[i].style.display =  "block";
				lis[i+1].style.display =  "none";
				lis[i+2].style.display = "none";
				break;
			case 1:
				lis[i-1].style.display =  "none";
				lis[i].style.display =  "block";
				lis[i+1].style.display = "none";
				break;
			default:
				lis[i-2].style.display =  "none";
				lis[i-1].style.display =  "none";
				lis[i].style.display = "block";
				break;
		}
};

function darkmode(){
	switch(y) {
		case 1:
			body.backgroundColor = "#FFF";
			body.color = "#000";
			y--;
			break;
		default:
			body.backgroundColor = "#333";
			body.color = "#FFF";
			y++;
			break;
	}
};


