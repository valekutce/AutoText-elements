const text = document.getElementById("text");
const prog = "Добро пожаловать на сайт StockShablonov!";
let idx = 1;

setInterval(writeText, 100);

function writeText() {
    text.innerText = prog.slice(0, idx)
	
	idx++;
	
	if(idx > prog.length){
      idx = 1;
    }

}