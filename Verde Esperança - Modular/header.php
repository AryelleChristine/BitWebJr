<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Verde Esperança - Início</title>
        <link rel="stylesheet" href="css/style.css">
        <script src="js/script.js" defer></script>
        <?php
            if(isset($_GET['pagina'])){
                $pagina = $_GET['pagina'];
            }else{
                $pagina = 'home';
            }
            $caminho_css = '';
            $caminho_js = '';

            switch ($pagina) {
                case 'contato':
                    $caminho_css = 'css/contato.css';
                    $caminho_js = 'js/contato.js';
                    break;
                case 'sobre-nos':
                    $caminho_css = 'css/sobre-nos.css';
                    $caminho_js = 'js/carrosel-sobre-nos.js';
                    break;
                case 'projetos':
                    $caminho_css = 'css/projetos.css';
                    $caminho_js = 'js/carrosel-projetos.js';
                    break;
                case 'doacoes':
                    $caminho_css = 'css/doacoes.css';
                    break;
                default:
                    $caminho_css = 'css/home.css';
                    break;
            }
            if (!empty($caminho_css) && file_exists($caminho_css)) {
                echo "<link rel=\"stylesheet\" href=\"{$caminho_css}\">";
            }
            if (!empty($caminho_js) && file_exists($caminho_js)) {
                echo "<script src=\"{$caminho_js}\" defer></script>";
            }
        ?>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    </head>

    <body>
        <div class="navbar">
            <div class="navbar-title">
                <a href="?pagina=home"><img src="img/logoOng.png" alt="Logo da Verde Esperança" class="navbar-logo"></a>
                <h1>Verde Esperança</h1>
            </div>
            <nav class="navbar-items" id="nav-menu">
                <ul>
                    <li><a href="?pagina=home" class="mobile-alt-color">Início</a></li>
                    <li><a href="?pagina=sobre-nos">Sobre Nós</a></li>
                    <li><a href="?pagina=projetos" class="mobile-alt-color">Projetos</a></li>
                    <li><a href="?pagina=doacoes">Como Ajudar</a></li>
                    <li><a href="?pagina=contato" class="mobile-alt-color">Contato</a></li>
                    <li><a href="?pagina=doacoes" class="btn-donate">Doar</a></li>
                </ul>
            </nav>
            <button class="navbar-toggle" id="nav-toggle" aria-label="Menu" aria-expanded="false" aria-controls="nav-menu">
                <i class="fas fa-bars"></i>
            </button>
        </div>