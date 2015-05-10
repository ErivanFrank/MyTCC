<?php

header('Content-Type: text/html; charset=utf-8');

$pdo = new PDO( 'mysql:host=127.0.0.1;dbname=dbontologia', 'root', '' );

$variavel = $_GET["id"];

$consulta = $pdo->query("SELECT * FROM template WHERE ID_TEMPLATE='" . $variavel . "'");


echo json_encode($consulta->fetchAll(PDO::FETCH_ASSOC));

?>