"use strict";

let txt = "This text is written one character at a time"
console.log(txt);
let i = 0;
let speed = 20;
let text = document.getElementById('typewriter');

let audio = document.getElementById('typekey1');

document.getElementById('typekey1').play();

function typeWriter(){
	if(i < txt.length){
		document.getElementById('typewriter').innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter,speed);
		typekey1.play();

		
	}
}

typeWriter();