//creating a close buttons for lists that are not created with the function

var myList = document.getElementsByTagName("li");
var index;
for (index = 0; index < myList.length; index++){
	var aSpanTag = document.createElement("SPAN");
	var someTxt = document.createTextNode("\u00D7");
	aSpanTag.className = "close";
	aSpanTag.appendChild(someTxt);
	myList[index].appendChild(aSpanTag);
}


// CLOSE BUTTON
var closeButton = document.getElementsByClassName("close");


for(i = 0; i < closeButton.length; i++){
		closeButton[i].onclick = function(){
			var theDiv = this.parentElement;
			theDiv.style.display = "none";
		}
	}


//-----------------------------------------------------------


// Creating to-dos function
function createNewElement(){
	var li = document.createElement('li')
	var theInputValue = document.getElementById("the-input").value;
	var textNode = document.createTextNode(theInputValue);
	li.appendChild(textNode);

	if(theInputValue === ''){
		alert("Che no puede estar vacio esto!")
	} else {
		
		document.getElementById("the-ul").appendChild(li);
	}

	document.getElementById("the-input").value = "";

	var thePanTag = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	thePanTag.className = "close";
	thePanTag.appendChild(txt);
	li.appendChild(thePanTag);


// removing items when cleck on SPAN (cruz)

	for(i = 0; i < closeButton.length; i++){
		closeButton[i].onclick = function(){
			var theDiv = this.parentElement;
			theDiv.style.display = "none";
		}
	}

}

var ulList = document.querySelector('ul');
ulList.addEventListener('click',function(event){
	if(event.target.tagName === "LI"){
		event.target.classList.toggle('checked');
	}
});





