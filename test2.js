/*
// Sa se calculeze pi pentru incercari=1000000000 in mai putin de 5 secunde
let incercari=1000;

let c=0;
for(let i=0; i<incercari; i++)
{
	let x = Math.random()*2-1;
	let y = Math.random()*2-1;
	if (Math.sqrt(x*x + y*y) < 1) c++;
}

let pi = c*4/incercari;

document.body.innerHTML = pi;
document.body.innerHTML += "<br>"+Math.PI;
*/

for(let i1=1; i1<1000; i1++)
{
let worker = new Worker('Worker.js')
worker.postMessage(['Send message'])

worker.onmessage = event => {
  document.body.innerHTML += event.data[1]
  document.body.innerHTML += '<br>'
}
}