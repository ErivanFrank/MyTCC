<?php
try
{
    // Instancia o objeto PDO
    $pdo = new PDO( 'mysql:host=127.0.0.1;dbname=dbontologia', 'root', '' );
    // fecho a conex�o
    $pdo = null;
	echo "Sucesso!";
	
}
catch ( PDOException $e )
{
	echo "N�o Conectou!";
    // Caso ocorra uma exce��o, exibe na tela
    echo $e->getMessage();
}



?>