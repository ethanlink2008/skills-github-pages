function calcul()
{
		binaire_1=document.getElementById("binaire_1");
		binaire_2=document.getElementById("binaire_2");
		porte=document.getElementById("porte");
		if (porte.value=='ET')
		{ calculET();}
		if (porte.value=='OU')
		{ calculOU();}
        if (porte.value=='NON ET')
		{ calculNONET();}
		if (porte.value=='NON OU')
		{ calculNONOU();}

	}
	function calculET()
	{
		if (binaire_1.value==1)
		{if (binaire_2.value==1)
			{resultat=1}
		else {resultat=0}
		}
		else {resultat=0}
		

	document.getElementById("resultat").innerHTML = resultat ;
}
	function calculOU()
	{
		if (binaire_1.value==0)
		{if (binaire_2.value==0)
			{resultat=0}
		else {resultat=1}
		}
		else {resultat=1}
		

	document.getElementById("resultat").innerHTML = resultat ;
}

    function calculNONET()
	{
		if (binaire_1.value==1)
		{if (binaire_2.value==1)
			{resultat=0}
		else {resultat=1}
		}
		else {resultat=1}


	document.getElementById("resultat").innerHTML = resultat ;
}

    function calculNONOU()
	{
		if (binaire_1.value==0)
		{if (binaire_2.value==0)
			{resultat=1}
		else {resultat=0}
		}
		else {resultat=0}


	document.getElementById("resultat").innerHTML = resultat ;
}
alert("Hello world");

