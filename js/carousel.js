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
buttonBac.onclick = prevImg; 
buttonBac.addEventListener("click", () => i-- );


////////// FUNCTION //////////
//////////////////////////////

function nextImg(){

		if(i >= 3){ i = 0; }

		switch (i) {
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
			case 2:
				lis[i-2].style.display =  "none";
				lis[i-1].style.display =  "none";
				lis[i].style.display = "block";
				break;
		}
};

