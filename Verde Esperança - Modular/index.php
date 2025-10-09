<?php

// Inclui a conexão com o banco de dados e o cabeçalho da página.
// Ponto e vírgula é necessário no final de cada declaração.
include 'db.php';
include 'header.php';

// Verifica se o parâmetro 'pagina' existe na URL.
if(isset($_GET['pagina'])){
    // Se existir, atribui o valor à variável $pagina.
    $pagina = $_GET['pagina'];
}else{
    // Se não existir, define 'home' como o valor padrão.
    $pagina = 'home';
} // O ponto e vírgula e o parêntese extra foram removidos daqui.

// Estrutura switch para incluir a página correta com base no valor de $pagina.
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

// Inclui o rodapé da página.
// A aspa extra foi removida.
include 'footer.php';

// A chave extra '}' foi removida do final do arquivo.