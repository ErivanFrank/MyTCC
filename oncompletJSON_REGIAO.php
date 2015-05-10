<?php

header('Content-Type: text/html; charset=utf-8');

$pdo = new PDO( 'mysql:host=127.0.0.1;dbname=dbontologia', 'root', '' );

$dados= $pdo->query('SELECT * FROM regiao;');
/*$dadosTimes= $pdo->query('SELECT * FROM times;');*/

echo json_encode($dados->fetchAll(PDO::FETCH_ASSOC));

?>