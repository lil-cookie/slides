function turn(arg){ 
	var buts = document.getElementsByName("button");
	var turnBut = document.getElementById(arg);
	for (var i=0;i<buts.length;i++)
	{
		if (buts[i].id ==turnBut.id) buts[i].className = "turn";
		else  buts[i].className = "";
	}
}
