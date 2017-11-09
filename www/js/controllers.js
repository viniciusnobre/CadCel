angular.module('app.controllers', [])

.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('side-menu21Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('cADASTROCtrl', ['$scope', '$http', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $state){
  $scope.enviacadastro = function(){
    var cnome;
    var crg;
    var cpf;
    var municipio;
    var uf;
    var opcao;
    var senha1;
    var senha2;

    cnome = document.getElementById("CNome").value;
    crg = document.getElementById("CRG").value;
    cpf = document.getElementById("CCPF").value;
    municipio = document.getElementById("CMunicipio").value;
    uf = document.getElementById("CUF").value;
    senha1 = document.getElementById("CSenha").value;
    if(CSenha.value == CConfirmacaoSenha.value){
      senha2 = document.getElementById("CConfirmacaoSenha").value;
    }
    var usuario = [cnome, crg, cpf, municipio, uf, senha2];

    var parameter = JSON.stringify({nome:cnome, cpf:cpf, rg:crg, municipio:municipio, uf:uf, senha:senha2});
    console.log(parameter);
    $http.post("Signup.php", parameter).
      success(function(data,status,headers,config)
      {
        $state.go("home");
      }).
      error(function(data,status,headers,config)
      {
        alert("Erro na conexão");
      })
      if(success=true)
      {
        alert('Bem vindo');
      }
      else
      {
        alert('Erro no cadastramento');
      }
  }

  jQuery(function ($scope)){
    $("#inputcadastrocpf").mask("999.999.999-99");
    $("#inputcadastrocelular").mask("(99) 99999-9999");
  }


});

app.controller('cadastroAgenteCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope) {

  $scope.teste = function(){
    var anome = document.getElementById('inputagentecadastronome').value;
    var aemail = document.getElementById('inputagentecadastroemail').value;
    var acpf = document.getElementById('inputagentecadastrocpf').value;
    var abirth = document.getElementById('inputagentecadastrobirth').value;
    var acelular = document.getElementById('inputagentecadastrocelular').value;
    var aendereco = document.getElementById('inputagentecadastroendereco').value;
    var asenha = document.getElementById('inputagentecadastrosenha').value;
    var acsenha = document.getElementById('inputagentecadastrocsenha').value;
    var amatricula = document.getElementById('inputagentecadastromatricula').value;
    var Agente = {anome, aemail, acpf, abirth, acelular, aendereco, asenha, acsenha, amatricula}
    console.log(Agente);
  }

  jQuery(function ($scope)){
    $("#inputagentecadastrocpf").mask("999.999.999-99");
    $("#inputagentecadastrocelular").mask("(99) 99999-9999");
  }

}])

.controller('consultaDeAparelhosUsuRioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  $scope.consultarImei = function(){
    var identificador = document.getElementById('inputconsultaimei');
  }

  function ($scope, $stateParams, $http, $state) {
    $scope.dados = [];
    $scope.matricula = localStorage.getItem("inputconsultaimei");
    var identificador = JSON.stringify({type:'text',imei:$scope.consultarImei});
      $http.post("Extrato.php",parameter).success(function(dados,status,headers,config)
      {
          $scope.consultarImei = imei;
          $state.go("consultaDeAparelhosUsuRio");
      });
  }

}])

.controller('recuperarSenhaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])

.controller('usuarioLogadoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('menuUserCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('cONSULTACtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('cadastrarDispositivoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$http', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $state){
  $scope.envialogin = function(){
    var login = document.getElementById('LCPF').value;
    var senha = document.getElementById('LSenha').value;
    var parameter = JSON.stringify({cpf:login,senha:senha});
    $http.post("login.php", parameter).
    success(function(data,status,headers,config){
      if(data == true){
        $state.go("menu");
      }
      else{
        if(data == false){
          alert("Matrícula ou senha inválidas");
        }
      }
    }).
    error(function(data,status,headers,config){
      console.log("Erro na conexão");
    });
  }
}])
