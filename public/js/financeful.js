// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
     console.log("Javascript connected!");
     $(".category").click(projectClick);


    
}


function projectClick(e) { 
	e.preventDefault();


	var text = $(this).text().replace(/\s/g,'');
	var category = $("#status");
	var totalCost = 0;
	
	var mood;
	var happy;
	var sad;
	var resigned;
	var okay;
	var guilty;


    
   $.getJSON('data.json',function(data){
	var i;
	var cost = 0;
	console.log(data.purchases.length);
	for( i=0; i < data.purchases.length; i++)	{
		var readText = data.purchases[i].category.toUpperCase();
		console.log(readText);
		//console.log(text.toUpperCase());
		totalCost = totalCost + +data.purchases[i].price;
	  if(readText === text.toUpperCase()) {
        cost = +cost + +data.purchases[i].price;
        mood = data.purchases[i].mood;
      } 
    }
   console.log(cost);
   console.log(totalCost);
   console.log("You've spent " + Math.round(cost / totalCost * 100) + "% on " + text);
   category.text("You've spent $" + cost + "(" + Math.round(cost / totalCost * 100) + "%) on " + text.toLowerCase() 
   	 + "." + " Your most frequent mood is " + mood + "." );
   delete cost;

  })  
	
}