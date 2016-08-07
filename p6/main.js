var count = 5;
function addElement(){
   count = count + 1;
	$(".lista").append("<li>" + count + "</li>");
}

function deleteElement(){

	$("li:nth-child(1)").remove();
}
