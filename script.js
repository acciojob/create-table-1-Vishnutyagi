function insert_Row() {
  var table = document.getElementById("sampleTable");
  
	var row =table.insertRow(0);
	row.insertCell(0).innerHTML="New Cell1";
	row.insertCell(1).innerHTML="New Cell2";
	
}
