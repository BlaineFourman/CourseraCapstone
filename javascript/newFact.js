function newFact() {
	// The four random facts that can be generated
	var facts=["Sharks have good eyesight",
			"Sharks have special electroreceptor organs",
			"Not all sharks have the same teeth",
			"Different shark species reproduce in different ways"];

	// Picking which fact it will be
	var randNum = Math.floor(Math.random()*4);
	var myFact = document.createTextNode(facts[randNum]);
	
	// Creating the paragraph element with the fact
	var element = document.createElement('p');
	element.appendChild(myFact);

	// putting the fact into the DOM and onto the page
	var div = document.getElementById("contentContainer");
	div.appendChild(element);
}