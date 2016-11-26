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
     $("#history_button").click(historyButtonClick);
     $("#history_link").click(historyLinkClick);
     $("#spending_report").click(spendingReportClick);
     $("#overall_mood").click(overallMoodClick);
     $("#category_mood").click(categoryMoodClick);
     $("#repurchase").click(repurchaseClick);
     $("#piechart").toggleClass("hidden");
       // $("#piechart").toggle();


    // $("#edit_history").click(editFormClick);


    
}

function spendingReportClick(e) {
	e.preventDefault();
   // $("#piechart").hide();
    $("#piechart").toggleClass("hidden");
}

function overallMoodClick(e) {
	e.preventDefault();
	//console.log("mood");
    //$("#piechart2").hide();
    $("#piechart2").toggle();
}

function categoryMoodClick(e) {
    e.preventDefault();
	console.log("default");
	$("#piechart3").toggle();
	$("#piechart3_form").toggle();

}

function repurchaseClick(e) {
	e.preventDefault();
	$("#barchart_values").toggle();
}


function historyButtonClick(e) {
	console.log("history button clicked");
	ga('send', 'event', 'history', 'click');
}

function historyLinkClick(e) {
	console.log("history link clicked");
	ga('send', 'event', 'history', 'click');

}

function editFormClick(e) {
	console.log("edit_form clicked");
	console.log(document.getElementById("edit_text").value);
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