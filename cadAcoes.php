<?php

header('Content-Type: text/html; charset=utf-8');

// $pdo = new PDO( 'mysql:host=127.0.0.1;dbname=dbontologia', 'root', '' );





try{
 
    //instancia o objeto PDO, conectando com o banco mysql
   	$conn = new PDO( 'mysql:host=127.0.0.1;dbname=dbontologia', 'root', '' );
 
    //configurando para utilizar exceções
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 	

 	$tempo = $_GET["tempo"];
	$time = $_GET["time"];
	$jogador = $_GET["jogador"];
	$acao = $_GET["lance"];
	$regiao = $_GET["regiao"];
	$grau = $_GET["grau"];
	$ontologia =  $_GET["ontologia"];
	$tipo =  $_GET["tipo"];
	$campo = $_GET["campo"];
 
	// $tempo = 15;
	// $time = 'PHP Security';
	// $jogador = 'Jack Hijack';
	// $acao = 'Jack Hijack';
	// $regiao = 'Jack Hijack';
	

    //executa as instruções SQL
    // $conn->exec("INSERT INTO HISTORICO (TEMPO, TIME, JOGADOR, ACAO, REGIAO) VALUES (':tempo', ':time', ':jogador', ':lance', ':regiao')");
 

    $sql = "INSERT INTO historico (tempo, time,jogador, acao, regiao, grau, ontologia, tipo, campo) VALUES (:tempo, :time, :jogador, :acao, :regiao, :grau, :ontologia, :tipo, :campo)";
	$q = $conn->prepare($sql);
	$q->execute(array(':tempo'=>$tempo,
					  ':time'=>$time,
					  ':jogador'=>$jogador,
					  ':acao'=>$acao,
	                  ':regiao'=>$regiao,
	                  ':grau'=>$grau,
	                  ':ontologia'=>$ontologia,
	                  ':tipo'=>$tipo,
					  ':campo'=>$campo));



    //fecha a conexão
    $conn = null;
}catch (PDOException $i){
        //se houver exceção, exibe
        print "Erro: <code>" . $i->getMessage() . "</code>";
}

?>
				  
                 
