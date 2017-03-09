var application = angular.module('MyWebsite',[]);

application.controller('MainController',function($scope) {
   
    $scope.currentPage = 'home';
   
    $scope.disciplinas = [
        {
            nome: "CI065 - Algoritmos e Teoria dos Grafos",
            url: "http://www.inf.ufpr.br/andre/Disciplinas/CI065-2017-1/"
        }
        // {
        //     nome: "CI211 - Construção de Compiladores",
        //     url: "http://www.inf.ufpr.br/bmuller/"
        // }
    ];
    
    $scope.trabalhos = [
        {
            nome: "Algoritmos e Estruturas de Dados II - Trabalho I- Profº Elias.",
            url: "http://www.inf.ufpr.br/apcs11/t1alg2/"
            
        },
        {
            nome: "Algoritmos e Estruturas de Dados II - Trabalho II - Profº Elias.",
            url: "http://www.inf.ufpr.br/apcs11/t2alg2/"
        },
        {
            nome: "Tópicos em Interação Humano-Computador - Trabalho I - Profª Laura.",
            url: "http://www.inf.ufpr.br/apcs11/IHC/"
        },
        {
            nome: "Redes de Computadores II - Profº Elias.",
            url: "../trabalhos/2PC/"
        }
    ];
    
    $scope.test = function(){
        console.log($scope.currentPage);
    };
});