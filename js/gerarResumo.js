	var historico = [];

	function geraResumo() {
		// body...
			$.getJSON("gerarResumo.php", {
				'id': time
			}, function(data) {
				$(data).each(function(key, value) {

					historico.push({tempo:value.TEMPO, time:value.TIME, jogador:value.JOGADOR, acao:value.ACAO, regiao:value.REGIAO, grau:value.GRAU, ontologia:Value.ONTOLOGIA, tipo:value.TIPO, campo:value.CAMPO});


			});			

		});

		console.log(historico);
	}