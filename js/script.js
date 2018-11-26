function scale(el){
	var idName = el.id;
	el.className = "active"+idName;
	var tailleContenu = el.children.length;/*
	console.log((el).children[1].style.display);
	console.log((el).display);*/
	for(var j = 0; j < tailleContenu; j++){
		(el).children[j].style.visibility = "visible";
	}
		if(el.className == "activec4"){
			el.className = "activec4 caroussel";
		}
}


function retour(){
	for(var i = 1; i < 9; i++){
		var caseActive = document.getElementsByClassName('activec'+i);
			var k = 1;
		if((caseActive.length) == 1){
			for(var j = 1; j < ((caseActive)[0].children.length); j++){
			(caseActive)[0].children[j].style.visibility ="hidden";
		}
		(caseActive)[0].className = "case";
		}
	}
}

function ancre(el){
	var cible = ((el).innerHTML);
	console.log("cible = "+cible);

	var listePointeurs = document.getElementsByTagName("a");/*
	console.log((listePointeurs)[p].innerHTML);
	var pointeur = listePointeurs[p].innerHTML;
	console.log(pointeur);*/

	for(var p = 0; p < listePointeurs.length; p++) {
		var pointeur = listePointeurs[p].innerHTML;
			if(cible == pointeur){
				/*APPELER LA FONCTION RETOUR + OUVRIR LA DIV Où H1 = CIBLE*/
				console.log("Le pointeur N°"+[p+1]+" est "+pointeur);
				console.log((el));
				var testCase = document.getElementsClassName('case')[0];
				console.log((testCase)[0]);
			}
				else console.log("aieaieae");
		}
}

function home(){
	var home = document.getElementById('home');
	home.id = "homeAfter";
	var cvcss = document.getElementById('cvcss');
	cvcss.id = "cvcssAfter";
}







