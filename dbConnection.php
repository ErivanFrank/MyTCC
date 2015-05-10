<?php
try
{
    // Instancia o objeto PDO
    $pdo = new PDO( 'mysql:host=127.0.0.1;dbname=dbontologia', 'root', '' );
    // fecho a conexгo
    $pdo = null;
	echo "Sucesso!";
	
}
catch ( PDOException $e )
{
	echo "Nгo Conectou!";
    // Caso ocorra uma exceзгo, exibe na tela
    echo $e->getMessage();
}



?>