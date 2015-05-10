<?php

header('Content-Type: text/html; charset=utf-8');

$pdo = new PDO( 'mysql:host=127.0.0.1;dbname=dbontologia', 'root', '' );


$dadosTimes= $pdo->query('SELECT * FROM times;');

extract( $_GET );

echo json_encode($dadosTimes->fetchAll(PDO::FETCH_ASSOC));
 //$result = $dadosTimes->fetch(PDO::FETCH_OBJ);


?>