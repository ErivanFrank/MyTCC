var cont = 0;
var regiaoCampo = "";
var auto = "";
var recebeOntlogia = "";
var recebeTipo = "";

var arrItensOnt = [];
var arrItensTipo = [];

var flagInterval = false;
var grau = 0;
// var myVarSelect = "";

function adicionarLinha() {



	if (document.getElementById('campo1').checked != "" ) {

		document.getElementById('campo1').checked = true;		
		regiaoCampo = "ATAQUE";
	};

	if (document.getElementById('campo2').checked != "" ) {

		document.getElementById('campo2').checked = true;		
		regiaoCampo = "DEFESA";
	};

	if (document.getElementById('controlDropDown').value != "" && document.getElementById('tempo').value != "" && document.getElementById('myTimes').value != "" && document.getElementById('mySelect').value != "" && document.getElementById('regiao').value != "" && (document.getElementById('campo1').checked == true || document.getElementById('campo2').checked == true)) {
		flagInterval = false;
		buscaOntTipo(document.getElementById('controlDropDown').value );



		var local = document.getElementById('tabela');
		var tblBody = local.tBodies[0];
		var newRow = tblBody.insertRow(-1);
		auto = $("#controlDropDown").val();
		var tempo = $("#tempo").val();
		var time = $("#myTimes").val();
		var jogador = $("#mySelect").val();
		var regiao = $("#regiao").val();
		$("#divScroll").append(local);

	}

	
if (recebeOntlogia != "" || recebeTipo != "") {
		if (cont == 1) {

			var newCell0 = newRow.insertCell(0);
			newCell0.innerHTML = '<td>' + tempo + '</td>';
			var newCell1 = newRow.insertCell(1);
			newCell1.innerHTML = '<td>' + time + '</td>';
			var newCell2 = newRow.insertCell(2);
			newCell2.innerHTML = '<td>' + jogador + '</td>';
			var newCell3 = newRow.insertCell(3);
			newCell3.innerHTML = '<td>' + auto + '</td>';
			var newCell4 = newRow.insertCell(4);
			newCell4.innerHTML = '<td>' + regiao + '</td>';	

			inserirValores(tempo, time, jogador, auto, regiao, regiaoCampo);
			clearInput();	
			
		}

	}
	
	cont = 1;
}

function clearInput() {

	document.getElementById('controlDropDown').value = "";
	document.getElementById('tempo').value = "";
	document.getElementById('myTimes').value = "";
	document.getElementById('mySelect').value = "";
	document.getElementById('regiao').value = "";
	recebeOntlogia = "";
	recebeTipo = "";
}

function inserirValores(tempo, time, jogador, auto, regiao, regiaoCampo) {

	console.log(recebeOntlogia, recebeTipo);
	if (flagInterval == false) {

		$.getJSON("cadAcoes.php", {
			'tempo': tempo,
			'time': time,
			'jogador': jogador,
			'lance': auto,
			'regiao': regiao,
			'grau':grau,
			'ontologia': recebeOntlogia,
			'tipo': recebeTipo,
			'campo' : regiaoCampo
		}, function(data) {

			
		});	

		flagInterval = true;
	};




}


function buscaOntTipo (value) {
	// body...
	var valor = value;
	console.log(valor);
	$(arrItens).each(function(key, value) {
		
		if (valor == value.descricao) {
			console.log("Valor" + valor)
			grau = value.grau;	
			selectOntologia(value.idOntologia);				
			selectTipoOnt(value.idOntologia, value.idTipo);				

		};
	
	});
}



function selectOntologia (valor) {

		var idSelOnt = valor;
		console.log(idSelOnt);
		$(arrItensOnt).each(function(key,value) {
			
			if (idSelOnt == value.idOntologia) {

				recebeOntlogia = value.ontologia;				
				
			};							  
	 		
		});				
		

}


function selectTipoOnt (valor, valor2) {

	var idSelTipo = valor;
	var idSelTipo2 = valor2;		
	$(arrItensTipo).each(function(key,value) {
		
		if (idSelTipo == value.idOntologia2  && idSelTipo2 == value.idTipo ) {

			recebeTipo = value.tipo;					

		};											  
 		
	});	

}


$(document).ready(function(){

	 $.getJSON("selctOntologia.php",  function(data){	
		$(data).each(function(key,value) {

			arrItensOnt.push({ontologia:value.ONTOLOGIA, idOntologia:value.ID_ONTOLOGIA});	
																  
		});	
	});

	 $.getJSON("selectTipo_Ont.php",  function(data){	
		$(data).each(function(key,value) {

			arrItensTipo.push({tipo:value.TIPO, idTipo:value.ID_TIPO, idOntologia2:value.ID_ONTOLOGIA});	
														  
		});	
	});
});
		



