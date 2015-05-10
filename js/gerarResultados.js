	var historico = [];


	var timeAEsc = "";
	var timeBEsc = "";

	var qntGol_TimeA = 0;
	var qntGol_TimeB = 0;

	var qntGol_Penalti_TimeB = 0;
	var qntGol_Penalti_TimeA = 0;

	var qnt_Falta_TimeB = 0;
	var qnt_Falta_TimeA = 0;

	var qnt_Falta_Imp_TimeB = 0;
	var qnt_Falta_Imp_TimeA = 0;

	var qntGol_Falta_TimeB = 0;
	var qntGol_Falta_TimeA = 0;

	var qntCart_Ame_TimeA = 0;
	var qntCart_Ver_TimeA = 0;

	var qntCart_Ama_TimeB = 0;
	var qntCart_Ver_TimeB = 0;

	var soma_Chutes = 0;
	var soma_Faltas = 0;
	var tatica_Timea = "3-6-1";
	var tatica_Timeb = "3-6-1";

	var qntGol_Chute_TimeB = 0;
	var qntGol_Chute_TimeA = 0;

	var qnt_Chute_Meta_TimeB = 0;
	var qnt_Chute_Meta_TimeA = 0;

	var qnt_Desarme_TimeB = 0;
	var qnt_Desarme_TimeA = 0;

	var qnt_Defesa_Gol_TimeB = 0;
	var qnt_Defesa_Gol_TimeA = 0;

	var qnt_Passe_Imcomp_TimeB = 0;
	var qnt_Passe_Imcomp_TimeA = 0;

	var tempoGolA = [];
	var jogadorGolA = [];

	var tempoGolB = [];
	var jogadorGolB = [];

	var carAmaJogadorA = [];
	var carAmaJogadorB = [];

	var carVerJogadorA = [];
	var carVerJogadorB = [];


	var flagJogGolDivA = false;
	var flagJogGolDivB = false;

	var aux = [];

	// Tempalte de empate 0x0
	var titulo1 = "Em jogo sem muita criatividade TIME-A e TIME-B ficaram no empate por 0X0.";
	var resumo1 = "Em jogo de muita marcação e pouca criatividade, TIME-A e TIME-B empatam sem gols. O TIME-A teve ótimas chances, mas não conseguiu balançar a rede.O TIME-A buscou mais o ataque foram META_A chutes em gol, mas sem sucesso. O TIME-B num sistema de jogo TATICA-B se manteve na defensiva e conseguiu segurar o resultado .Um jogo com muitas faltas, SFALTAS ao todo, e apenas S_CHUTES chutes em gol só poderia terminar em 0x0;";

	//template de resultado 1x0 // Formatado
	var titulo2 = "TIME-A vence o TIME-B pela contagem mínima.";
	var resumo2 = "O TIME-A derrota o TIME-B por GOL-A a GOL-B, mesmo jogando fora de casa. O jogo estava morno, com apenas S_CHUTES finalizações  mas aos TEMPO-AP minutos da etapa final, JOGADOR-AP recebeu o passe e marcou o gol. Os donos da casa pressionaram em busca do empate e até mesmo da vitória, mas o time visitante aguentou a pressão e manteve a vantagem mínima e administrou o resultado até o fim do jogo.";

	//Template de resultado 2x0 // Formatado
	var titulo3 = "Com um amplo domínio no jogo TIME-A vence TIME-B pelo placar de GOL-A X GOL-B.";
	var resumo3 = "O TIME-A começou a partida indo para cima do TIME-B e conseguiu abrir o placar logo no primeiro tempo com um gol de JOGADOR-AP aos TEMPO-A minutos. O TIME-B criou OPOR_CLA_B oportunidades claras de gol, mas não conseguiu o empate. O ritmo do segundo tempo foi o mesmo, mas em tarde inspirada JOGADOR-AP aproveitou a oportunidade e aumentou a contagem, com a vantagem ampla no placar o TIME-A só segurou o resultado e esperou o apito do arbitro para vencer a partida.";

	//Template de resultado 3x0 ou superior por enquanato
	var titulo4 = "Com um volume grande na partida o TIME-A vence TIME-B por goleada.";
	var resumo4 = "O TIME-A mostrou a sua força, ao vencer o TIME-B pelo placar de GOL-A x GOL-B . Se impondo no primeiro tempo, o TIME-A criou as melhores oportunidades, o TIME-B ficou atrás e cometeu muitas faltas, aos TEMPO-AP minutos JOGADOR-AP e JOGADOR-AS aos TEMPO-AS, marcaram na primeira etapa. Já no segundo tempo, o TIME-A tratou de administrar mais o resultado, porém ainda sim conseguiu marcar o terceiro com JOGADOR-AT, aos TEMPO-AT, após cobrança de falta ensaiada.";

	//Template de empate por 1x1 2x2
	var titulo5 = "Em jogo muito disputado TIME-A e TIME-B ficaram no empate por GOL-A X GOL-B";
	var resumo5 = "Depois de começar pressionando e sair na frente em bela jogadoda JOGADOR-AP recebeu e marcou o gol, o TIME-A diminuiu o ritmo e acabou cedendo o empate para o TIME-B, aos TEMPO-BP minutos JOGADOR-BP recebeu um cruzamento e cabeçeou para osfundos da rede. O TIME-A teve várias oportunidades de gol, mas só conseguiu balançar as redes novamente aos TEMPO-AS com um gol de JOGADOR-AS, mas com o placar na frente o TIME-A relaxou e o TIME-B criou OPOR_CLA_B oportunidades claras de gol. O gol não demorou a sair, aos TEMPO-BS da segunda etapa JOGADOR-BS entrou livre na área e empurrou para o fundo das redes empatando a partida";

	//Tempalate de jogo movimentado e resultado apertado 2x1 3x2 et...
	var titulo6 = "Em jogo movimentado TIME-A vence time TIME-B pelo placar de GOL-A X GOL-B.";
	var resumo6 = "Em jogo com bastante oportunidade, TIME-A venceu TIME-B pelo placar de GOL-A X GOL-B . O jogo começou com bastantes oportunidades dos dois lados. O TIME-A saiu na frente com gol de JOGADOR-AP , com a desvantagem no placar o TIME-B se lançou ao ataque e logo conseguiu o empate com gol de JOGADOR-BP aos TEMPO-BP minutos. Com o placar em igualdade o jogo ganhou mais em emoção com varas chances, mas ao final o TIME-A foi mais oportunista e retomou a frente do placar com um belo gol de JOGADOR-AS e conseguiu segurar a pressão ate o fim da partida.";

	$(function() {
		$("#accordion").accordion({
			heightStyle: "content"
		});
	});



	function geraResumo() {


		// body...
		$.getJSON("gerarResumo.php", {
			// 'id': time
		}, function(data) {
			$(data).each(function(key, value) {

				historico.push({
					tempo: value.TEMPO,
					time: value.TIME,
					jogador: value.JOGADOR,
					acao: value.ACAO,
					regiao: value.REGIAO,
					grau: value.GRAU,
					ontologia: value.ONTOLOGIA,
					tipo: value.TIPO,
					campo: value.CAMPO
				});

			});

		});

		int = self.setInterval(function() {
			IA_Resumo()
		}, 4000);


	}


	function IA_Resumo() {
		// body...
		var gol = "GOL";
		var chute = "CHUTE";
		var falta = "FALTA";
		var passe = "PASSE";
		var golPenalti = "PENALTI";
		var golFalta = "FALTA";
		var desarme = "DESARME";
		var cartao = "CARTAO";
		var defesa = "DEFESA";
		var mao = "MAO";
		var incompleto = "INCOMPLETO";
		var impedimento = "IMPEDIMENTO";


		var amarelo = "AMARELO";
		var vermelho = "VERMELHO";

		timeAEsc = "CORINTHIANS";
		timeBEsc = "SANTOS";



		$(historico).each(function(key, value) {


			// Time que  marcou gol 
			if (value.time == timeAEsc) {



				if (value.ontologia == gol) {

					qntGol_TimeA++;
					jogadorGolA.push(value.jogador);
					tempoGolA.push(value.tempo);


					if (value.tipo == golPenalti) {

						qntGol_Penalti_TimeA++;

					};

					if (value.tipo == golFalta) {

						qntGol_Falta_TimeA++;

					};


				};



				if (value.ontologia == chute) {

					qntGol_Chute_TimeA++;

					if (value.tipo == gol) {

						qnt_Chute_Meta_TimeA++;

					};

				};


				if ((value.ontologia == falta)) {

					qnt_Falta_TimeA++;

					if (value.tipo == impedimento) {

						qnt_Falta_Imp_TimeA++;

					};


				};

				if ((value.ontologia == defesa)) {



					if (value.tipo == desarme) {

						qnt_Desarme_TimeA++;

					};

					if (value.tipo == mao) {

						qnt_Defesa_Gol_TimeA++;

					};

				};


				if ((value.ontologia == passe)) {



					if (value.tipo == incompleto) {

						qnt_Passe_Imcomp_TimeA++;

					};


				};


				if ((value.ontologia == cartao)) {



					if (value.tipo == amarelo) {

						qntCart_Ame_TimeA++;
						carAmaJogadorA.push(value.jogador);

					};

					if (value.tipo == vermelho) {

						qntCart_Ver_TimeA++;
						carVerJogadorA.push(value.jogador);

					};


				};



			};



			// Time que  marcou gol 
			if (value.time == timeBEsc) {


				if (value.ontologia == gol) {

					qntGol_TimeB++;

					tempoGolB.push(value.tempo);
					jogadorGolB.push(value.jogador);

					if (value.tipo == golPenalti) {

						qntGol_Penalti_TimeB++;

					};

					if (value.tipo == golFalta) {

						qntGol_Falta_TimeB++;

					};



				};



				if (value.ontologia == chute) {

					qntGol_Chute_TimeB++;
					if (value.tipo == gol) {

						qnt_Chute_Meta_TimeB++;

					};

				};

				if ((value.ontologia == falta)) {

					qnt_Falta_TimeB++;

					if (value.tipo == impedimento) {

						qnt_Falta_Imp_TimeB++;

					};


				};

				if ((value.ontologia == defesa)) {



					if (value.tipo == desarme) {

						qnt_Desarme_TimeB++;

					};

					if (value.tipo == mao) {

						qnt_Defesa_Gol_TimeB++;

					};


				};



				if ((value.ontologia == passe)) {



					if (value.tipo == incompleto) {


						qnt_Passe_Imcomp_TimeB++;

					};

				};

				if ((value.ontologia == cartao)) {



					if (value.tipo == amarelo) {

						qntCart_Ama_TimeB++;
						carAmaJogadorB.push(value.jogador);

					};

					if (value.tipo == vermelho) {

						qntCart_Ver_TimeB++;
						carVerJogadorB.push(value.jogador);

					};


				};



			};



		});

		clearInterval(int);
		regrasVencedor();

		res = self.setInterval(function() {
			repalceDiv(timeAEsc, timeBEsc);
			addEstastistica();
			clearInterval(res);

		}, 4000);



	}

	function regrasVencedor(argument) {
		// body...
		// verifica vencedor 
		if ((qntGol_TimeA != qntGol_TimeB) && (qntGol_TimeA - qntGol_TimeB) == 2 && (qntGol_TimeB == 0 || qntGol_TimeA == 0)) {

			console.log("Amplo Domínio");
			document.getElementById("Titulo").innerHTML = titulo3 + '<p>';
			document.getElementById("Resumo").innerHTML = resumo3 + '<p>';



		};

		if ((qntGol_TimeA != qntGol_TimeB) && (qntGol_TimeA - qntGol_TimeB) == 1 && (qntGol_TimeB == 0 || qntGol_TimeA == 0)) {

			console.log("Contagem minima");
			document.getElementById("Titulo").innerHTML = titulo2 + '<p>';
			document.getElementById("Resumo").innerHTML = resumo2 + '<p>';


		};

		if ((qntGol_TimeA != qntGol_TimeB) && (qntGol_TimeA - qntGol_TimeB) == 1 && (qntGol_TimeB != 0 && qntGol_TimeA != 0)) {

			console.log("Jogo Apertada");
			document.getElementById("Titulo").innerHTML = titulo6 + '<p>';
			document.getElementById("Resumo").innerHTML = resumo6 + '<p>';


		};


		if ((qntGol_TimeA != qntGol_TimeB) && (qntGol_TimeA - qntGol_TimeB) >= 3) {

			console.log("vitoria Goleada");
			document.getElementById("Titulo").innerHTML = titulo4 + '<p>';
			document.getElementById("Resumo").innerHTML = resumo4 + '<p>';


		};



		if ((qntGol_TimeA == qntGol_TimeB) && (qntGol_TimeA == 0) && (qntGol_TimeB == 0)) {

			console.log("Empate sem gols");
			document.getElementById("Titulo").innerHTML = titulo1 + '<p>';
			document.getElementById("Resumo").innerHTML = resumo1 + '<p>';

		};

		if ((qntGol_TimeA == qntGol_TimeB) && (qntGol_TimeA != 0) && (qntGol_TimeB != 0)) {

			console.log("Empate com gols");
			document.getElementById("Titulo").innerHTML = titulo5 + '<p>';
			document.getElementById("Resumo").innerHTML = resumo5 + '<p>';


		};


	}



	// function loadTemplate(valorCod) {
	// 	// body...
	// 	var valor = valorCod;				
	// 	$.getJSON("loadTemplate.php", {
	// 		'id': valor
	// 	}, function(data) {
	// 		$(data).each(function(key, value) {
	// 		});
	// 	});
	// }

	function repalceDiv(time1, time2) {

		soma_Chutes = qntGol_Chute_TimeA + qntGol_Chute_TimeB;
		soma_Faltas = qnt_Falta_TimeA + qnt_Falta_TimeB;
		// tatica_Timea = "";
		// tatica_Timeb = "";
		var strTitle = document.getElementById("Titulo").innerHTML;
		var strResumo = document.getElementById("Resumo").innerHTML;

		strTitle = replaceAllTitle(strTitle, "TIME-A", "" + time1 + "");
		strTitle = replaceAllTitle(strTitle, "GOL-A", "" + qntGol_TimeA + "");
		strTitle = replaceAllTitle(strTitle, "TIME-B", "" + time2 + "");
		strTitle = replaceAllTitle(strTitle, "GOL-B", "" + qntGol_TimeB + "");

		strResumo = replaceAllResumo(strResumo, "TIME-A", "" + time1 + "");
		strResumo = replaceAllResumo(strResumo, "GOL-A", "" + qntGol_TimeA + "");
		strResumo = replaceAllResumo(strResumo, "TIME-B", "" + time2 + "");
		strResumo = replaceAllResumo(strResumo, "GOL-B", "" + qntGol_TimeB + "");

		//Código pode ser melhorado
		strResumo = replaceAllResumo(strResumo, "TEMPO-AP", "" + tempoGolA[0] + "");
		strResumo = replaceAllResumo(strResumo, "TEMPO-AS", "" + tempoGolA[1] + "");
		strResumo = replaceAllResumo(strResumo, "TEMPO-AT", "" + tempoGolA[2] + "");

		//Código pode ser melhorado
		strResumo = replaceAllResumo(strResumo, "TEMPO-BP", "" + tempoGolA[0] + "");
		strResumo = replaceAllResumo(strResumo, "TEMPO-BS", "" + tempoGolA[1] + "");
		strResumo = replaceAllResumo(strResumo, "TEMPO-BT", "" + tempoGolA[2] + "");

		//Código pode ser melhorado
		strResumo = replaceAllResumo(strResumo, "JOGADOR-AP", "" + jogadorGolA[0] + "");
		strResumo = replaceAllResumo(strResumo, "JOGADOR-AS", "" + jogadorGolA[1] + "");
		strResumo = replaceAllResumo(strResumo, "JOGADOR-AT", "" + jogadorGolA[2] + "");

		//Código pode ser melhorado
		strResumo = replaceAllResumo(strResumo, "JOGADOR-BP", "" + jogadorGolB[0] + "");
		strResumo = replaceAllResumo(strResumo, "JOGADOR-BS", "" + jogadorGolB[1] + "");
		strResumo = replaceAllResumo(strResumo, "JOGADOR-BT", "" + jogadorGolB[2] + "");

		strResumo = replaceAllResumo(strResumo, "SFALTAS", "" + soma_Faltas + "");
		strResumo = replaceAllResumo(strResumo, "S_CHUTES", "" + soma_Chutes + "");
		strResumo = replaceAllResumo(strResumo, "META_A", "" + qntGol_Chute_TimeA + "");

		strResumo = replaceAllResumo(strResumo, "TATICA-B", "" + tatica_Timeb + "");
		strResumo = replaceAllResumo(strResumo, "TATICA-A", "" + tatica_Timeb + "");
		strResumo = replaceAllResumo(strResumo, "OPOR_CLA_A", "" + qnt_Chute_Meta_TimeA + "");
		strResumo = replaceAllResumo(strResumo, "OPOR_CLA_B", "" + qnt_Chute_Meta_TimeB + "");


		estJogadoresA(jogadorGolA, tempoGolA,0,0);
		estJogadoresB(jogadorGolB, tempoGolB,0,0);
		estJogadoresA(0, 0 , carAmaJogadorA,0);
		estJogadoresB(0, 0 , carAmaJogadorB,0);
		estJogadoresA(0, 0 , 0,carVerJogadorA);
		estJogadoresB(0, 0 , 0,carVerJogadorB);
	}



	function estJogadoresA(arrJogadores, arrTempoGol, cartaoAmaA, cartaoVerA) {
		// body...	

		if (arrJogadores.length != 0) {

			for (var i = 0; i < arrJogadores.length; i++) {	
			alert(arrJogadores.length)			
				var estatistica = $('<div class="internaJogadorA" >' + arrJogadores[i] + '&nbsp;&nbsp;&nbsp;&nbsp;' + arrTempoGol[i] + '</div>');
				$("#jogadorA").append(estatistica);
			};
		};


		if (cartaoAmaA.length != 0) {

			for (var j = 0; j < cartaoAmaA.length; j++) {	
					
				var cartao = $('<div class="internaJogadorA" >' + carAmaJogadorA[j] + '&nbsp;&nbsp;&nbsp;&nbsp; <img src=img/CartaoAmarelo.png> </div>');
				$("#cartaoAmaTimeA").append(cartao);
			};
		};

		if (cartaoVerA.length != 0) {

			for (var k = 0; k < cartaoVerA.length; k++) {		
						
				var cartaoV = $('<div class="internaJogadorA" >' + carVerJogadorA[k] + '&nbsp;&nbsp;&nbsp;&nbsp;<img src=img/CartaoVermelho.png></div>');
				$("#cartaoVerTimeA").append(cartaoV);
			};
		};


	}


	function estJogadoresB(arrJogadores, arrTempoGol, cartaoAmaB, cartaoVerB) {
		// body...
		if (arrJogadores.length != 0) {

			for (var i = 0; i < arrJogadores.length; i++) {				
				var estatistica = $('<div class="internaJogadorB" >' + arrJogadores[i] + '&nbsp;&nbsp;&nbsp;&nbsp;' + arrTempoGol[i] + '</div>');				
				$("#jogadorB").append(estatistica);
			};
		};

		if (cartaoAmaB.length != 0) {

			for (var j = 0; j < cartaoAmaB.length; j++) {				
				var cartao = $('<div class="internaJogadorB" >' + carAmaJogadorB[j] + '&nbsp;&nbsp;&nbsp;&nbsp; <img src=img/CartaoAmarelo.png></div>');
				$("#cartaoAmaTimeB").append(cartao);
			};
		};

		if (cartaoVerB.length != 0) {

			for (var k = 0; k < cartaoVerB.length; k++) {		
				
				var cartaoV = $('<div class="internaJogadorB" >' + carVerJogadorB[k] + '&nbsp;&nbsp;&nbsp;&nbsp;<img src=img/CartaoVermelho.png></div>');
				$("#cartaoVerTimeB").append(cartaoV);
			};
		};

		if (qntGol_TimeB != 0) {

			$("#jogadorB").attr('style','margin-top: -30px');

		};
		

		if (cartaoAmaB.length != 0) {

			$("#cartaoAmaTimeB").attr('style','margin-top: -70px');

		};

		if (cartaoVerB.length != 0) {

			$("#cartaoVerTimeB").attr('style','margin-top: -5px');
		};
		// $("#cartaoVerTimeB").attr('style','background-color:#FFF8DC');

		}



	function addEstastistica(argument) {

		// Estastística Corinthians!!!
		document.getElementById("timea").innerHTML = timeAEsc;
		document.getElementById("goltimeA").innerHTML = qntGol_TimeA;
		document.getElementById("golPenaltiA").innerHTML = qntGol_Penalti_TimeA;
		document.getElementById("golFaltaA").innerHTML = qntGol_Falta_TimeA;
		document.getElementById("ChuteGolA").innerHTML = qntGol_Chute_TimeA
		document.getElementById("faltasA").innerHTML = qnt_Falta_TimeA;
		document.getElementById("impedimentosA").innerHTML = qnt_Falta_Imp_TimeA;
		document.getElementById("bolasRoubadasA").innerHTML = qnt_Desarme_TimeA;
		document.getElementById("passesErradosA").innerHTML = qnt_Passe_Imcomp_TimeA;
		document.getElementById("cartaoAA").innerHTML = qntCart_Ame_TimeA;
		document.getElementById("cartaoVA").innerHTML = qntCart_Ver_TimeA;
		// document.getElementById("golJogadorA").innerHTML = jogadorGolA[0];

		// Estastística Santos!!!
		document.getElementById("timeb").innerHTML = timeBEsc;
		document.getElementById("goltimeB").innerHTML = qntGol_TimeB;
		document.getElementById("golPenaltiB").innerHTML = qntGol_Penalti_TimeB;
		document.getElementById("golFaltaB").innerHTML = qntGol_Falta_TimeB;
		document.getElementById("ChuteGolB").innerHTML = qntGol_Chute_TimeB;
		document.getElementById("faltasB").innerHTML = qnt_Falta_TimeB;
		document.getElementById("impedimentosB").innerHTML = qnt_Falta_Imp_TimeB;
		document.getElementById("bolasRoubadasB").innerHTML = qnt_Desarme_TimeB;
		document.getElementById("passesErradosB").innerHTML = qnt_Passe_Imcomp_TimeB;
		document.getElementById("cartaoAB").innerHTML = qntCart_Ama_TimeB;
		document.getElementById("cartaoVB").innerHTML = qntCart_Ver_TimeB;
		// document.getElementById("golJogadorB").innerHTML = jogadorGolB[0];

	}


	function replaceAllTitle(string, token, newtoken) {
		while (string.indexOf(token) != -1) {
			string = string.replace(token, newtoken);
		}
		return string = document.getElementById("Titulo").innerHTML = string;
	}


	function replaceAllResumo(string, token, newtoken) {
		while (string.indexOf(token) != -1) {
			string = string.replace(token, newtoken);
		}
		return string = document.getElementById("Resumo").innerHTML = string;
	}