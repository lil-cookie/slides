function turn(arg){ 
	var buts = document.getElementsByName("button");
	var turnBut = document.getElementById(arg);
	if (turnBut.className=="turn")
	{
		turnBut.className="";
	}
	else
	{
		for (var i=0;i<buts.length;i++)
	{
		if (buts[i].id ==turnBut.id) buts[i].className = "turn";
		else  buts[i].className = "";
	}
}	
}
