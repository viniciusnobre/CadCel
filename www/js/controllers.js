var app = angular.module('app.controllers', [])

.controller('cADCELCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

app.controller('cadastroUsuRioCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope) {
  /*$scope.$watch("myvar", function (newVal, oldVal) {
    console.log(newVal);
  });*/
  $scope.teste = function(){
  var nome = document.getElementById('inputcadastronome').value;
  var email = document.getElementById('inputcadastroemail').value;
  var cpf = document.getElementById('inputcadastrocpf').value;
  var birth = document.getElementById('inputcadastrobirth').value;
  var celular = document.getElementById('inputcadastrocelular').value;
  var endereco = document.getElementById('inputcadastroendereco').value;
  var senha = document.getElementById('inputcadastrosenha').value;
  var csenha = document.getElementById('inputcadastrocsenha').value;
  var Usuario = {nome, email, cpf, birth, celular, endereco, senha, csenha};
  console.log(Usuario);
  }
});

app.controller('cadastroAgenteCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('consultaDeAparelhosUsuRioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

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

.controller('agenteLogadoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('cadastroDeAparelhosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.teste = function(){
      var tipo = document.getElementById('inputcadastrotipo').value;

      var marca = document.getElementById('inputcadastromarca').value;

      var modelo = document.getElementById('inputcadastromodelo').value;

      var status = document.getElementById('inputcadastrostatus').value;

      var imei = document.getElementById('inputcadastroimei').value;
      var descricao = document.getElementById('inputcadastrodescricao').value;
      var nf = document.getElementById('inputcadastronf').value;
      var quadro = document.getElementById('inputcadastroquadro').value;
      var Dados = {tipo,marca,status,imei,descricao,nf,quadro};
      console.log(Dados);
    }
}])

.controller('consultaDeAparelhosAgenteCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('tranferNciaDeAparelhosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
