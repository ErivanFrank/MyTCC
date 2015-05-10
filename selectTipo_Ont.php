<?php

// header('Content-Type: text/html; charset=utf-8');

// $pdo = new PDO( 'mysql:host=127.0.0.1;dbname=dbontologia', 'root', '' );

// $variavel = $_GET["id"];
// $variavel2 = $_GET["id2"];

// $consulta = $pdo->query("SELECT * FROM tipo_ont WHERE ID_ONTOLOGIA = $variavel AND ID_TIPO = $variavel2");


// echo json_encode($consulta->fetchAll(PDO::FETCH_ASSOC));


header('Content-Type: text/html; charset=utf-8');

$pdo = new PDO( 'mysql:host=127.0.0.1;dbname=dbontologia', 'root', '' );


$consulta = $pdo->query("SELECT * FROM tipo_ont");


echo json_encode($consulta->fetchAll(PDO::FETCH_ASSOC));

?>