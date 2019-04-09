'use strict';

////////// VARIABLES /////////
//////////////////////////////
let lis = document.getElementsByTagName("li");

for(let li of lis){
	li.insertiAdjacentHTML('beforebegin', "<button>'<'</button>")
}


////////// FUNCTION //////////
//////////////////////////////
