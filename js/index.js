$(document).ready(function(){
    $(".button-collapse").sideNav();
    showHome();
});

function showHome(){
    $("#content").load("home.html");
}

function showTrabalhos(){
    $("#content").load("trabalhos.html");
}

function showAutor(){
    $("#content").load("autor.html");
}

function showDisciplinas(){
    $("#content").load("disciplinas.html");
}

// $(".side-nav>li>a").bind("click",function(){
//   // collapse o menu de alguma forma  
// })