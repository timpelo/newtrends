function init() {

	// BACKGROUND INFO
	// ---------------
	// Below is a for loop that tries to register a click event handler
	// for each <p> node in the <div id="nodes"> (see events.html) when the page loads.

	// Clicking each <p> node should result in a different alert message, e.g.
	// "I am a handler for node 0"
	// "I am a handler for node 1"
	// "I am a handler for node 2"
	// etc.

	// YOUR TASK
	// ---------------
	// Run in a browser and click each node to see what actually happens.

	// Answer the following questions and provide fixes as requested. Test after each step:
	// 1) How many child nodes are there in total? How do you know? Test in different browsers!
	// 	  - Fix the code below so that only the five <p> nodes are used.
	//
	// ANSWER: There is 10 child nodes. Found out by printing size of nodes list
	// to console.
	//
	//
	// 2) What kind of an alert do you get for each <p> node? Why does it behave like this?
	//    - Fix the code so that the alert is as shown in the BACKGROUND INFO section above.
	//		Do NOT remove the for loop!

	var nodes = document.getElementById("nodes").childNodes;
	console.log(nodes.length);

	for (var i = 0; i < nodes.length; i++) {
		console.log(i);
		nodes[i].onclick = function() {
			alert("I am a handler for node " + i);
		}
	}
}
