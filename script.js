//trae la lista del disco:
function getTodos() {
	var oldList = [];
	var key;
	if(localStorage.length){
		for (index = 0; index < localStorage.length; index++){
			key = localStorage.key(index); 
			oldList[index] = localStorage.getItem(key);
		}		
	}
	return oldList;
}

//función que guarda en disco un nuevo elemento
function saveTodos(li,num) {
//	var str = JSON.stringify(li);
	localStorage.setItem(num, li);
	num=num+1;
	return num;
}

// presento los valores del storage en pantalla
var OldList = getTodos();
console.log(OldList)
for (index = 0; index < OldList.length; index++){
	var li = document.createElement('li')
	//console.log(valorViejo)
	var valorViejoNode = document.createTextNode(OldList[index]);
	li.appendChild(valorViejoNode);
	document.getElementById("the-ul").appendChild(li);
}

//botones para cerrar los valores traidos de la BDD
var myList = document.getElementsByTagName("li");

for (index = 0; index < myList.length; index++){
	var aSpanTag = document.createElement("SPAN");
	var someTxt = document.createTextNode("\u00D7");
	aSpanTag.className = "close";
	aSpanTag.appendChild(someTxt);
	myList[index].appendChild(aSpanTag);
}
// CLOSE BUTTON
var closeButton = document.getElementsByClassName("close");

//borro los valores cerrados del storage
for(i = 0; i < closeButton.length; i++){
		closeButton[i].onclick = function(){
			var theDiv = this.parentElement;
			theDiv.style.display = "none";
			var theDeleteValue = theDiv.firstChild; //guardo el valor borrado
			//var valorBorradoNode = document.createTextNode(theDeleteValue);
			var valorBorradoNode = theDeleteValue.textContent //lo paso a texto
			//busco a ver si esta el valor en localstorage y lo borro
			for(j=0; j< OldList.length; j++){ 
				if(valorBorradoNode == OldList[j]){
					key = localStorage.key(j); 
					localStorage.removeItem(key);
				}
			}
		}
	} 

//-----------------------------------------------------------
// agregar un nuevo elemento:
var numElemento = 0;
function createNewElement(){
	var li = document.createElement('li')
	var theInputValue = document.getElementById("the-input").value;
	var textNode = document.createTextNode(theInputValue);
	li.appendChild(textNode);
	
//theInputValue es el que tengo que guardar en la BDD
numElemento=saveTodos(theInputValue,numElemento)

	if(theInputValue === ''){
		alert("Che no puede estar vacio esto!")
	} else {	
		document.getElementById("the-ul").appendChild(li); //agregas el valor de li a The-ul
	}

	document.getElementById("the-input").value = "";

	// creas el boton de cierre
	var thePanTag = document.createElement("SPAN"); 
	var txt = document.createTextNode("\u00D7"); //txt es la "x"
	thePanTag.className = "close";
	thePanTag.appendChild(txt); 
	li.appendChild(thePanTag);

// removing items when cleck on SPAN (cruz)
var currentList = getTodos();
	for(i = 0; i < closeButton.length; i++){
		closeButton[i].onclick = function(){
			var theDiv = this.parentElement;
			theDiv.style.display = "none";
			var theDeleteValue = theDiv.firstChild;
			var valorBorradoNode = theDeleteValue.textContent //lo paso a texto
			
			//busco a ver si esta el valor en localstorage y lo borro
			for(j=0; j< currentList.length; j++){ 
				if(valorBorradoNode == currentList[j]){			
					key = localStorage.key(j); 
					localStorage.removeItem(key);
				}
			}
		}
	}
//valorBorradoNode es el lque hay que borrar de la BDD!
}


/* FUNCION TICK para marcar tareas
var ulList = document.querySelector('ul');
ulList.addEventListener('click',function(event){
	if(event.target.tagName === "LI"){
		event.target.classList.toggle('checked');
	}
});

*/



