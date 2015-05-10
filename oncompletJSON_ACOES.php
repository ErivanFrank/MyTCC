<?php

// header('Content-Type: text/html; charset=utf-8');

// $pdo = new PDO( 'mysql:host=127.0.0.1;dbname=dbontologia', 'root', '' );

// $dados= $pdo->query('SELECT * FROM acoes;');
// $dadosTimes= $pdo->query('SELECT * FROM times;');

// echo json_encode($dados->fetchAll(PDO::FETCH_ASSOC));


header('Content-Type: text/html; charset=utf-8');

$pdo = new PDO( 'mysql:host=127.0.0.1;dbname=dbontologia', 'root', '' );

$variavel = $_GET["id"];

$consulta = $pdo->query("SELECT * FROM acoes WHERE ID_ONTOLOGIA ='" . $variavel . "'");


echo json_encode($consulta->fetchAll(PDO::FETCH_ASSOC));





?>