$(document).ready(function() {
	var hideForm = true;
	$("#button").click(function() {
		if (hideForm) {
			$("#txtForm").show("slow","swing",function() {
				document.getElementById('icon').setAttribute("class","fa fa-times");
				document.getElementById('form').style.border = "3px solid blue";
			});
		} else {
			$("#txtForm").hide("slow","swing",function() {
				document.getElementById('icon').setAttribute("class","fa fa-search fa-2x");
				document.getElementById('form').style.border = "none";
				document.getElementById('disp').innerHTML = "Click icon to search";
			});
		}
		hideForm = !hideForm;
	});

	//search
	document.getElementById('txtForm').onsearch = function() {
		document.getElementById('random').style.display = "inline";
		var url= "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
		url += document.getElementById("txtForm").value + "&format=json&origin=*";
		var txt = "";
		$.getJSON(url, function(data) {
			for (var i = 0; i < data[1].length; i++) {
				txt += "<a href='"+ data[3][i]+ "' class='panel' target='_blank'><h3>"+data[1][i]+"</h3><p>"+data[2][i]+"</p>";
			}
			$("#disp").html(txt); 
		});
	}
});