<?php

include 'db.php';
include 'header.php';

if(isset($_GET['pagina'])){
    $pagina = $_GET['pagina'];
}else{
    $pagina = 'home';
}

switch($pagina){
	case 'contato': 
        include 'views/contato.php'; 
        break;
	case 'doacoes': 
        include 'views/doacoes.php'; 
        break;
	case 'projetos': 
        include 'views/projetos.php'; 
        break;
	case 'sobre-nos': 
        include 'views/sobre-nos.php'; 
        break;
	default: 
        include 'views/home.php'; 
        break;
}

include 'footer.php';
