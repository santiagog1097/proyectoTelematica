module.exports = {
  template: require('./inicio.html'),
  controller: Inicio
};

function Inicio($scope) {
  this.scope = $scope;
}
