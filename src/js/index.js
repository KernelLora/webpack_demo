// var app = angular.module("angularWebpackSeed", []);
// app.controller("angularWebpackController", function($scope) {
//     $scope.Names = ["Selena", "Lora", "Nothing more"];
// }); 
import _ from 'lodash';
import '../css/styles.css';
function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
