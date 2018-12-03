let imagenes = document.getElementsByClassName("mini");
let i=0;
let imagen = document.getElementById("cajap");

function cambiarimagen(imagensource, indiceactual){
	imagen.src = imagensource;
	i = indiceactual;
	mostrarnombre();
}

function volverimagen(){
	if(i==0){
		i=8;
	}
	else{i=i-1;}
	imagen.src=imagenes[i].src;
	mostrarnombre();
}

function pasarimagen(){
	if(i==8){
		i=0;
	}
	else{i=i+1;}
	imagen.src=imagenes[i].src;
	mostrarnombre();
}

let info = document.getElementById("cajatexto");

function mostrartexto(){
	info.style.display = 'flex';
	mostrarnombre();
}

function cerrartexto(){
	info.style.display = "none";
}

let texto = document.getElementById("especial");

function mostrarnombre(){
	switch(i){
		case 0:
		texto.innerHTML="EL JS GUIANDO AL PUEBLO. DELACROIX.";
		break;
		case 1:
		texto.innerHTML="EL 3 DE MAYO. GOYA.";
		break;
		case 2:
		texto.innerHTML="GUERNICA. PICASSO.";
		break;
		case 3:
		texto.innerHTML="LA CREACIÓN DEL JS. MIGUEL ÁNGEL.";
		break;
		case 4:
		texto.innerHTML="LA TENTACIÓN DE SAN JS. DALÍ.";
		break;
		case 5:
		texto.innerHTML="LOS AMANTES DE JS. MAGRITTE.";
		break;
		case 6:
		texto.innerHTML="LAS MENINAS. VELÁZQUEZ.";
		break;
		case 7:
		texto.innerHTML="LA PERSISTENCIA DEL JS. DALÍ.";
		break;
		case 8:
		texto.innerHTML="EL JS ESTRELLADO. VAN GOGH.";
		break;
	}
}

function oscurecertema(){
	let dark = document.getElementById("dark");
	document.body.style.backgroundColor = "black";
}

function aclarartema(){
	let dark = document.getElementById("basic");
	document.body.style.backgroundColor = "white";
}

function enrojecertema(){
	let dark = document.getElementById("red");
	document.body.style.backgroundColor = "cyan";
}