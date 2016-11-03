'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
		console.log("Javascript connected!");
	$.getJSON('data.json',function(data){
      console.log(data.purchases[1]);
      var obj = { item:"Food", price:"10", category:"play"};
      data.purchases.push(obj);
      console.log(data.purchases[3]);
    });
}

function projectClick(e) {  
	
}