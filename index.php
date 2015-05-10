<!DOCTYPE html>
<head>
	<script type="text/javascript"  charset="utf-8"></script>
	<link rel="stylesheet" href="css/style.css">	
	<title>TCC Ontologia Aplicada ao Futebol</title>
	<!--<link rel="stylesheet" href="css/sample.css" />-->
	<link href="css/smoothness/jquery-ui-1.9.1.custom.css" rel="stylesheet">
	<script src="js/jquery-1.8.2.js"></script>
	<script src="js/jquery-ui-1.9.1.custom.js"></script>	
	<script src="js/autoComplet.js"></script>
	<script src="js/loodSelectTimes.js"></script>
	
	<link rel="stylesheet" type="text/css" href="css/smoothness/msdropdown/dd.css" />
	<script src="js/msdropdown/jquery.dd.js"></script>
	<link rel="stylesheet" type="text/css" href="css/smoothness/msdropdown/skin2.css" />
	<link rel="stylesheet" type="text/css" href="css/smoothness/msdropdown/flags.css" />
	
</head>

<body>	


<div id="wrapper">
	
	<!-- Container de cima pega -->
    <header>
		<h1>Lance-Lance Futebol</h1>
		<a id="voltar" href="http://globo.com">voltar ao tutorial</a>
    </header>    
	
    <section id="tutorial">

		<article id="demo">
				
						
				<section id="introductionTop">
					
						<!-- Selecionar Times -->
						<td valign="top"><div id="byjson"  ></div>	
				
						
				</section>
				
				
					<section id="introduction">					
					<div id="myDiv"></div>
					
						
				</section>	
				
		</article> 
	    
	</section>
	
	<section>
	    
	    
	    
	    <section id="descricao">
			
			
	    	<h3>Relato dos Lances</h3>
			
			<!-- Auto completar de Açoes -->	
			<p>			
				<input placeholder="Tempo" size=02 maxlength= 2  style="text-align: center;" id="tempo">		
			<p>
				<input  placeholder="Açoes" type="search" size=50 maxlength=150 id="auto" >
			<p>
				<input  placeholder="Time" type="search" size=20 maxlength=50 id="time">	
			
			<p>	
				<input placeholder="Jogador" size=10 maxlength= 20 id="Jogador">		
			<p>
				<input  placeholder="Região" type="search" size=30 maxlength=50 id="Regiao" >	
			<p>
							
			<!--<td valign="top"> não apagar
				<div id="byjson2"></div>
			</td>-->
			
		    <td width="17%" valign="top"><p>
				<input type="button" value="&lt;- Adicionar Lance -&gt;" onclick="add()" />
			</p>	
	   
	    </section>
		
		
		<section id="Lance-Lance">
		
			<div id="divScroll">
			
			
			</div>
		
		</section>
	    
  	</section>
  	
  	<div class="separador"></div>
    
    <footer>
	
		<p class="autor">Desenvolvido por <a href="http://globo.com"> Erivan Franklin </a> <a href="erivanfrank@hotmail.com"></a></p>		
		<p class="referencia">Inspirado por <a href="http://www.usc.br"> Dr. Patrick Pedreira </a></p>
		
    </footer>    

    
  </div>

</body>
</html>