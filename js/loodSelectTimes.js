	var contPosicao = 1;	

	//Array esquema tático de 3-4-3
	var ArraryPosition343 = [["","40", "80", "110", "350", "70", "230", "240", "470", "350", "470", "520"],
						     ["","220","340","220", "40", "100", "280", "120", "80", "380", "380", "220"]];
						  

	//Array esquema tático de 3-6-1
	var ArraryPosition361 = [["","40", "80", "110", "300", "70", "230", "240", "380", "300", "380", "520"],
						     ["","220","340","220", "40", "100", "280", "140", "140", "400", "300", "220"]];

	//Array esquema tático de 4-2-4
	var ArraryPosition424 = [["","40", "110", "90", "150", "130", "270", "280", "420", "420", "500", "500"],
						     ["","220","320","140", "40", "400", "280", "140", "60", "390", "320", "120"]];
	
	//Array esquema tático de 4-3-3
	var ArraryPosition433 = [["","40", "110", "90", "150", "130", "310", "250", "310", "450", "450", "520"],
						  	 ["","220","320","140", "40", "400", "320", "210", "110", "90", "340", "220"]];

	//Array esquema tático de 4-5-1
	var ArraryPosition451 = [["","40", "110", "90", "150", "130", "310", "250", "310", "390", "390", "520"],
						  	 ["","220","320","140", "40", "400", "320", "210", "110", "60", "370", "220"]];

	//Array esquema tático de 5-3-2
	var ArraryPosition532 = [["","40", "110", "90", "150", "130", "290", "130", "290", "380", "490", "490"],
						  	 ["","220","320","140", "40", "400", "320", "210", "110", "220", "330", "110"]];

						  	 //cassio, chicão, Paulo André,Alessandro ,Fabio santos, Paulinho, Ralf,Douglas, Danilo, Emerson, Guerrero 

	var itens = [ {description:' CLUBES  ', value:'', text:'Selecione o Time'}];
	var times = [ {description:' CLUBES  ', value:'', text:'Selecione o Time'}];
	var jogadores = [ {description:' JOGADOR  ', value:'', text:'Selecione o Jogador'}];	
	var auxJogadores = [ {description:' JOGADOR  ', value:'', text:'Selecione o Jogador'}];
	var contTime = 0;
	var contClick = 0;
	var onLoad = false;
	var timeEscolhido = "";
	var oldTime = 0;
	var timesSelecionado = false;

	var arrayAuxTimeA = [];
	var arrayAuxTimeB = [];
	var auxValorTimeA = 0;
	var auxValorTimeB = 0;

	$.getJSON("oncompletJSON_TIMES.php", function (data){		 
				  
			$(data).each(function(key, value){
			  
			  if(value.NOME != null ){  
				 itens.push(				
				 {image:''+ value.FILE_IMAGE , description:'' + value.DESCRICAO, value:'' + value.ID_TIMES, text:'' + value.NOME});			  
			  }																	  
			 
			});					
		var jsn = $("#byjson").msDropDown({byJson:{data:itens, name:'payments2'}}).data("dd");	
		
	});				
			
	function getIndexTime(valor){
		if(valor !=0){
			timeSelect(valor);
			
			$(document).ready(function(){
				$.getJSON("selectJogadores.php", { 'id': valor }, function(data){		
					$('#myDiv'+contClick).html("");	
					$(data).each(function(key, value){
						if( onLoad == false){
							jogadores.push(
							{description:'' + value.NUMERO, value:'' + value.ID_TIME, text:'' + value.NOME});											
							// Brincando com a exibição												 
							$('<div>') // Cria um elemento input						
							// .attr({ type: 'text', name: 'Nome', value: '' + value.NOME/* , src:'img/botoes/corinthians1.png' */})// Definindo atributos												
							.css({backgroundColor: 'transparent', padding: '2px', width: '90px', position:'absolute',top: ArraryPosition361[0][contPosicao]+'px', left: ArraryPosition361[1][contPosicao]+'px'}) // Definindo estilos											
							.appendTo('#myDiv'+contClick) // Adiciona ele ao elemento div com o id myDiv
							.fadeIn() // Faz o elemento aparecer lentamente
							.html("<center>" + "<p class='nomeJogador'>" +value.NOME + "<img src='img/botoes/"+valor+".png'></center>");						
							contPosicao++;	


							if (contClick == 0) {

								arrayAuxTimeA.push({text:'' + value.NOME});	
								auxValorTimeA = valor;							
							};


							if (contClick == 1) {

								arrayAuxTimeB.push({text:'' + value.NOME});		
								auxValorTimeB = valor;						
							};


						}
					});	

					contPosicao = 1;			
					
					contClick++;
					if(contClick == 2){
						
						timeSelecionado();
					}					
				});				 
				
			});	
		
		}
		
	}


	function taticaTimeA(num) {

		numTatica = num;	
		var auxArray = [];
		if (numTatica == 343) {

				auxArray = ArraryPosition343;

		}else if (numTatica == 361) {

			auxArray = ArraryPosition361;
		}else if (numTatica == 424) {

			auxArray = ArraryPosition424;
		}else if (numTatica == 433) {

			auxArray = ArraryPosition433;
		}else if (numTatica == 451) {

			auxArray = ArraryPosition451;
		}else if (numTatica == 532) {

			auxArray = ArraryPosition532;
		};


		$('#myDiv0').html("");

		$(arrayAuxTimeA).each(function(key, value){

				$('<div>') // Cria um elemento input																			
				.css({backgroundColor: 'transparent', padding: '2px', width: '90px', position:'absolute',top: auxArray[0][contPosicao]+'px', left: auxArray[1][contPosicao]+'px'}) // Definindo estilos
				.appendTo('#myDiv0') // Adiciona ele ao elemento div com o id myDiv
				.fadeIn() // Faz o elemento aparecer lentamente
				.html("<center>" + "<p class='nomeJogador'>"  + value.text + "<img src='img/botoes/"+auxValorTimeA+".png'></center>");						
				contPosicao++;	
			
		});						
		contPosicao = 1;				
		
	}




	function taticaTimeB(num) {

		numTatica = num;	
		var auxArray = [];
		if (numTatica == 343) {

				auxArray = ArraryPosition343;

		}else if (numTatica == 361) {

			auxArray = ArraryPosition361;
		}else if (numTatica == 424) {

			auxArray = ArraryPosition424;
		}else if (numTatica == 433) {

			auxArray = ArraryPosition433;
		}else if (numTatica == 451) {

			auxArray = ArraryPosition451;
		}else if (numTatica == 532) {

			auxArray = ArraryPosition532;
		};

		$('#myDiv1').html("");

		$(arrayAuxTimeB).each(function(key, value){

				$('<div>') // Cria um elemento input																					
				.css({backgroundColor: 'transparent', padding: '2px', width: '90px', position:'absolute',top: auxArray[0][contPosicao]+'px', left: auxArray[1][contPosicao]+'px'}) // Definindo estilos
				.appendTo('#myDiv1') // Adiciona ele ao elemento div com o id myDiv
				.fadeIn() // Faz o elemento aparecer lentamente
				.html("<center>" + "<p class='nomeJogador'>"  + value.text + "<img src='img/botoes/"+auxValorTimeB+".png'></center>");						
				contPosicao++;	
			
		});						
		contPosicao = 1;		
	}





	function timeSelect (time) {

		contTime++;
		if (!timesSelecionado) {
			$(document).ready(function(){
				$.getJSON("timeEscolhido.php", { 'id': time }, function(data){	
					$(data).each(function(key,value) {

					 	times.push(				
								{image:''+ value.FILE_IMAGE , description:'' + value.DESCRICAO, value:'' + value.ID_TIMES, text:'' + value.NOME});			  
				 		
					});	
					
					if (contTime == 2) {	
						// var jsn = $("#byjson2").msDropDown({byJson:{data:times, name:'payments2'}}).data("dd");
						timesSelecionado = true;

					};		
				});
			});
		};

	    $(itens).each(function(key, value) {
	    	if(time == value.value) {
		       $('#myTimes').append(new Option(value.text));
		       
	       }

	    });

	}



	function selectJogadores(value) {
		
		var valor = value;
		
		$(itens).each(function(key, value) {
			// body...

			if (valor == value.text) {

				valor = value.value;
			}

		});
		

	    $('#mySelect').html("");
	    $(jogadores).each(function(key, value) {
	    	   if(valor == value.value) {	    		
		       $('#mySelect').append(new Option(value.text));		      
	       }
	    });
	}
	
	
	
	//Adicionar no arquivo novo colocar em outro arquivo//
	function timeSelecionado () {
		// body...
		onLoad = true;
		$("#byjson").remove();
		// $("#introductionTop").append("<b>Appended text</b>");
			init();
			animate();
	}
	
	


	function init() {

		var outputTimeA = document.createElement( 'div' );
		var outputTimeB = document.createElement( 'div' );
		var versus = document.createElement( 'div' );
		
		outputTimeA.style.cssText = 'position: absolute; left: 400px; top: 180px; font-size: 40px';				
		outputTimeB.style.cssText = 'position: absolute; right: 1200px; top: 180px; font-size: 40px';				
		versus.style.cssText = 'position: absolute; left: 655px; top: 165px; font-size: 60px';	
		
		document.body.appendChild(outputTimeA);
		document.body.appendChild(outputTimeB);
		document.body.appendChild(versus);
		
			versus.innerHTML = 'X';
			
			var contEach = 0;
			
			$(times).each(function(key, value){
				contEach++;
				if(contEach == 1){
					var tween2 = new TWEEN.Tween( { x: 180, y: 0 } )
					.to( { x: 370 }, 4000 )
					.easing( TWEEN.Easing.Elastic.Out )	
					.onUpdate( function () {
					
					outputTimeA.innerHTML = times[1].text;
					// outputTimeB.innerHTML = times[2].text;
					outputTimeA.style.left = this.x + 'px';
					// outputTimeB.style.left = this.x + 'px';

					} )
					.start();
				}
				
				if(contEach == 2){
								
					var tween1 = new TWEEN.Tween( { x: 1000, y: 0 } )
					.to( { x: 750 }, 4000 )
					.easing( TWEEN.Easing.Elastic.Out )	

					.onUpdate( function () {
							
							// outputTimeA.innerHTML = times[1].text;
							outputTimeB.innerHTML = times[2].text;
							// outputTimeA.style.left = this.x + 'px';
							outputTimeB.style.left = this.x + 'px';

					} )
					.start();					
				}
				
			});				
			
	}

	function animate() {

		requestAnimationFrame( animate );
		TWEEN.update();

	}	