var controle = 1;
var myVar = "";


var arrItens = [];

$(document).ready(function() {

	$(document).ready(function() {

		$.getJSON("oncompletJSON_REGIAO.php", function(data) {

			var regiao = [];


			$(data).each(function(key, value) {

				if (value.REGIAO_CAMPO) {
					regiao.push(value.REGIAO_CAMPO);
				}
			});

			$('#regiao').autocomplete({
				source: regiao
			});
		});
	});
});

function onloadAcoes() {
	// body...
	myVar = setInterval(function() {
		acoesOption(controle)
	}, 500);
}



function acoesOption(value) {
	var controlDropDown = $("#controlDropDown");


	$.getJSON("oncompletJSON_ACOES.php", {
		'id': value
	}, function(data) {
		criarGrupos(controle);

		$(data).each(function(key, value) {
			var item = document.createElement('p').innerHTML = value.DESCRICAO;
			// console.log(value.ID_ONTOLOGIA)
			arrItens.push({descricao:value.DESCRICAO, idOntologia:value.ID_ONTOLOGIA, idTipo:value.ID_TIPO, grau:value.GRAU});
			var itens = document.createElement('li');
			itens.setAttribute('class', 'text');
			$(itens).append(item);
			$("#MultipleSelectBox_DropDown").append(itens);			
			var $dropDownContainer = $("#MultipleSelectBox_DropDown").multipleSelectBox({
				submitField: controlDropDown,
				 onSelectEnd: function() { /* slide up */
					
					$(this).slideUp("slow");
					
				}

			});


			controlDropDown.click(function(e) {
				e.stopPropagation();

				$dropDownContainer.slideDown("slow");
				$(document).one("click", function() {
					$dropDownContainer.slideUp("slow");
				});
			});
		});
		
		controle++;
		if (controle == 8) {

			clearInterval(myVar);
		};
	});
}


function criarGrupos(valor) {
	// body...
	var grupo = document.createElement('li');
	$.getJSON("montarCombo.php", {
		'id': valor
	}, function(data) {
		$(data).each(function(key, value) {

			var itemGroup = document.createElement('p').innerHTML = value.ONTOLOGIA;
			$(grupo).append(itemGroup);

		});
	});

	grupo.setAttribute('class', 'disabled');
	$("#MultipleSelectBox_DropDown").append(grupo);

}


